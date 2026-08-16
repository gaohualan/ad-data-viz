import { describe, it, expect } from 'vitest'
import { KITTILoader } from '../../src/data/KITTILoader'

describe('KITTILoader', () => {
  it('should parse KITTI binary data correctly', () => {
    const loader = new KITTILoader({ enableWorker: false })

    const pointCount = 10
    const buffer = new ArrayBuffer(pointCount * 4 * 4)
    const view = new DataView(buffer)

    for (let i = 0; i < pointCount; i++) {
      const offset = i * 16
      view.setFloat32(offset, i * 1.0, true)      // x
      view.setFloat32(offset + 4, i * 2.0, true)   // y
      view.setFloat32(offset + 8, i * 3.0, true)   // z
      view.setFloat32(offset + 12, i * 10.0, true) // intensity
    }

    const frame = loader.parseSync(buffer, undefined)

    expect(frame.points.count).toBe(pointCount)
    expect(frame.points.positions.length).toBe(pointCount * 3)
    expect(frame.points.intensities.length).toBe(pointCount)
    expect(frame.points.positions[0]).toBe(0)
    expect(frame.points.positions[3]).toBe(1)
    expect(frame.points.intensities[5]).toBe(50)
  })

  it('should parse KITTI label text correctly', () => {
    const loader = new KITTILoader({ enableWorker: false })

    const labelText = `Car 0.00 0 -1.57 614.24 181.78 727.31 284.77 1.57 1.73 4.15 1.00 1.75 13.22 -1.57
Pedestrian 0.00 0 -0.20 614.24 181.78 727.31 284.77 1.65 0.48 0.52 2.50 1.50 10.00 -0.20`

    const buffer = new ArrayBuffer(12 * 4)
    const frame = loader.parseSync(buffer, labelText)

    expect(frame.boxes.length).toBe(2)
    expect(frame.boxes[0].type).toBe('Car')
    expect(frame.boxes[1].type).toBe('Pedestrian')
    expect(frame.boxes[0].center.x).toBe(1.00)
    expect(frame.boxes[0].rotationY).toBe(-1.57)
  })
})
