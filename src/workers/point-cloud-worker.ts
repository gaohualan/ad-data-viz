import type { BoundingBox, Frame, ObjectType } from '../types'

const KITTI_POINT_SIZE = 4

self.onmessage = (e: MessageEvent) => {
  const { binBuffer, labels } = e.data as { binBuffer: ArrayBuffer; labels?: string }

  try {
    const view = new DataView(binBuffer)
    const pointCount = Math.floor(binBuffer.byteLength / (KITTI_POINT_SIZE * 4))

    const positions = new Float32Array(pointCount * 3)
    const intensities = new Float32Array(pointCount)

    for (let i = 0; i < pointCount; i++) {
      const offset = i * KITTI_POINT_SIZE * 4
      positions[i * 3] = view.getFloat32(offset, true)
      positions[i * 3 + 1] = view.getFloat32(offset + 4, true)
      positions[i * 3 + 2] = view.getFloat32(offset + 8, true)
      intensities[i] = view.getFloat32(offset + 12, true)
    }

    const boxes = labels ? parseLabels(labels) : []

    const frame: Frame = {
      points: { positions, intensities, count: pointCount },
      boxes,
    }

    const transferList: Transferable[] = [positions.buffer, intensities.buffer]

    ;(self as unknown as Worker).postMessage({ frame }, transferList)
  } catch (err) {
    ;(self as unknown as Worker).postMessage({ error: (err as Error).message })
  }
}

function parseLabels(text: string): BoundingBox[] {
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
        x: parseFloat(parts[9]),
        y: parseFloat(parts[8]),
        z: parseFloat(parts[10]),
      },
      rotationY: parseFloat(parts[14]),
      score: parts.length > 15 ? parseFloat(parts[15]) : undefined,
    })
  }

  return boxes
}

export {}
