import type { BoundingBox, Frame, ObjectType, LoaderOptions } from '../types'
import { BinaryReader } from './BinaryReader'

const KITTI_POINT_SIZE = 4 // x, y, z, intensity (each float32)
const KITTI_POINT_BYTES = KITTI_POINT_SIZE * 4

export class KITTILoader {
  private worker: Worker | null = null
  private baseUrl: string

  constructor(options: LoaderOptions = {}) {
    this.baseUrl = options.baseUrl ?? ''

    if (options.enableWorker && typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('../workers/point-cloud-worker.ts', import.meta.url), {
        type: 'module',
      })
    }
  }

  async load(binPath: string, labelPath?: string): Promise<Frame> {
    const binUrl = this.resolveUrl(binPath)
    const labelUrl = labelPath ? this.resolveUrl(labelPath) : undefined

    const [binRes, labelRes] = await Promise.all([
      fetch(binUrl),
      labelUrl ? fetch(labelUrl) : Promise.resolve(null),
    ])

    if (!binRes.ok) {
      throw new Error(`Failed to load point cloud: ${binUrl} (${binRes.status})`)
    }

    const binBuffer = await binRes.arrayBuffer()
    const labelText = labelRes ? await labelRes.text() : undefined

    if (this.worker) {
      return this.parseInWorker(binBuffer, labelText)
    }

    return this.parseSync(binBuffer, labelText)
  }

  async loadSequence(
    frames: Array<{ bin: string; label?: string }>,
    onProgress?: (loaded: number, total: number) => void
  ): Promise<Frame[]> {
    const results: Frame[] = []
    for (let i = 0; i < frames.length; i++) {
      const frame = await this.load(frames[i].bin, frames[i].label)
      results.push(frame)
      onProgress?.(i + 1, frames.length)
    }
    return results
  }

  parseSync(binBuffer: ArrayBuffer, labels?: string): Frame {
    const reader = new BinaryReader(binBuffer)
    const totalBytes = binBuffer.byteLength
    const pointCount = Math.floor(totalBytes / KITTI_POINT_BYTES)

    const positions = new Float32Array(pointCount * 3)
    const intensities = new Float32Array(pointCount)

    for (let i = 0; i < pointCount; i++) {
      positions[i * 3] = reader.readFloat32()
      positions[i * 3 + 1] = reader.readFloat32()
      positions[i * 3 + 2] = reader.readFloat32()
      intensities[i] = reader.readFloat32()
    }

    const boxes = labels ? this.parseLabels(labels) : []

    return {
      points: { positions, intensities, count: pointCount },
      boxes,
    }
  }

  private parseInWorker(binBuffer: ArrayBuffer, labels?: string): Promise<Frame> {
    return new Promise((resolve, reject) => {
      if (!this.worker) {
        reject(new Error('Worker not initialized'))
        return
      }

      this.worker.onmessage = (e: MessageEvent) => {
        if (e.data.error) {
          reject(new Error(e.data.error))
        } else {
          resolve(e.data.frame as Frame)
        }
      }

      this.worker.postMessage(
        { binBuffer, labels },
        [binBuffer] // Transfer ownership to avoid copy
      )
    })
  }

  private parseLabels(text: string): BoundingBox[] {
    const lines = text.trim().split('\n')
    const boxes: BoundingBox[] = []

    for (const line of lines) {
      const parts = line.trim().split(/\s+/)
      if (parts.length < 15) continue

      boxes.push({
        type: parts[0] as ObjectType,
        center: {
          x: parseFloat(parts[11]),
          y: parseFloat(parts[12]),
          z: parseFloat(parts[13]),
        },
        dimensions: {
          x: parseFloat(parts[9]), // w
          y: parseFloat(parts[8]), // h
          z: parseFloat(parts[10]), // l
        },
        rotationY: parseFloat(parts[14]),
        score: parts.length > 15 ? parseFloat(parts[15]) : undefined,
      })
    }

    return boxes
  }

  private resolveUrl(path: string): string {
    if (path.startsWith('http') || path.startsWith('blob:') || path.startsWith('data:')) {
      return path
    }
    return `${this.baseUrl}/${path}`.replace(/\/+/g, '/')
  }

  dispose(): void {
    this.worker?.terminate()
    this.worker = null
  }
}
