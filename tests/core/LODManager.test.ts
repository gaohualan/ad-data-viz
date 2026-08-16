import { describe, it, expect } from 'vitest'
import * as THREE from 'three'
import { LODManager } from '../../src/core/LODManager'

describe('LODManager', () => {
  it('should build octree from point positions', () => {
    const lod = new LODManager({ maxLevel: 4, maxPointsPerNode: 100 })

    const pointCount = 1000
    const positions = new Float32Array(pointCount * 3)
    for (let i = 0; i < pointCount; i++) {
      positions[i * 3] = Math.random() * 100
      positions[i * 3 + 1] = Math.random() * 10
      positions[i * 3 + 2] = Math.random() * 100
    }

    lod.build(positions)

    const stats = lod.getStats()
    expect(stats.totalNodes).toBeGreaterThan(0)
    expect(stats.leafNodes).toBeGreaterThan(0)
  })

  it('should return visible points within frustum', () => {
    const lod = new LODManager({ maxLevel: 3, maxPointsPerNode: 50 })

    const pointCount = 500
    const positions = new Float32Array(pointCount * 3)
    for (let i = 0; i < pointCount; i++) {
      positions[i * 3] = (i % 50) * 2
      positions[i * 3 + 1] = 0
      positions[i * 3 + 2] = Math.floor(i / 50) * 2
    }

    lod.build(positions)

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
    camera.position.set(0, 50, 50)
    camera.lookAt(50, 0, 50)
    camera.updateMatrixWorld(true)

    const frustum = new THREE.Frustum()
    frustum.setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
    )

    const visiblePoints = lod.getVisiblePoints(camera, frustum)
    expect(visiblePoints.length).toBeGreaterThan(0)
    expect(visiblePoints.length).toBeLessThanOrEqual(pointCount * 3)
  })
})
