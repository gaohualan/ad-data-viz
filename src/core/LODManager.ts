import * as THREE from 'three'

interface OctreeNode {
  bounds: THREE.Box3
  children: (OctreeNode | null)[]
  points: Float32Array | null
  level: number
  isLeaf: boolean
}

export class LODManager {
  private root: OctreeNode | null = null
  private maxLevel: number
  private maxPointsPerNode: number
  private lodBaseDistance: number

  constructor(options: { maxLevel?: number; maxPointsPerNode?: number; lodBaseDistance?: number } = {}) {
    this.maxLevel = options.maxLevel ?? 6
    this.maxPointsPerNode = options.maxPointsPerNode ?? 8192
    this.lodBaseDistance = options.lodBaseDistance ?? 10
  }

  build(positions: Float32Array): void {
    const bounds = this.computeBounds(positions)
    this.root = this.subdivide(positions, bounds, 0)
  }

  getVisiblePoints(camera: THREE.Camera, frustum: THREE.Frustum): Float32Array {
    if (!this.root) return new Float32Array(0)

    const result: number[] = []
    this.traverse(this.root, camera, frustum, result)
    return new Float32Array(result)
  }

  getStats(): { totalNodes: number; leafNodes: number; totalPoints: number } {
    if (!this.root) return { totalNodes: 0, leafNodes: 0, totalPoints: 0 }

    const stats = { totalNodes: 0, leafNodes: 0, totalPoints: 0 }
    this.collectStats(this.root, stats)
    return stats
  }

  private traverse(
    node: OctreeNode,
    camera: THREE.Camera,
    frustum: THREE.Frustum,
    out: number[]
  ): void {
    if (!frustum.intersectsBox(node.bounds)) return

    const center = new THREE.Vector3()
    node.bounds.getCenter(center)
    const distance = camera.position.distanceTo(center)
    const lodDistance = this.lodBaseDistance * Math.pow(2, node.level)

    if (node.isLeaf || distance > lodDistance || node.level >= this.maxLevel) {
      if (node.points) {
        for (let i = 0; i < node.points.length; i++) {
          out.push(node.points[i])
        }
      }
      return
    }

    for (const child of node.children) {
      if (child) this.traverse(child, camera, frustum, out)
    }
  }

  private subdivide(positions: Float32Array, bounds: THREE.Box3, level: number): OctreeNode {
    const pointCount = positions.length / 3

    if (pointCount <= this.maxPointsPerNode || level >= this.maxLevel) {
      return {
        bounds,
        children: [null, null, null, null, null, null, null, null],
        points: this.downsample(positions, level),
        level,
        isLeaf: true,
      }
    }

    const center = new THREE.Vector3()
    bounds.getCenter(center)
    const children: (OctreeNode | null)[] = []

    for (let i = 0; i < 8; i++) {
      const childBounds = this.getChildBounds(bounds, center, i)
      const childPoints = this.extractPoints(positions, childBounds)

      if (childPoints.length > 0) {
        children[i] = this.subdivide(childPoints, childBounds, level + 1)
      } else {
        children[i] = null
      }
    }

    return {
      bounds,
      children,
      points: this.downsample(positions, level),
      level,
      isLeaf: false,
    }
  }

  private getChildBounds(bounds: THREE.Box3, center: THREE.Vector3, index: number): THREE.Box3 {
    const min = bounds.min
    const max = bounds.max

    return new THREE.Box3(
      new THREE.Vector3(
        index & 1 ? center.x : min.x,
        index & 2 ? center.y : min.y,
        index & 4 ? center.z : min.z
      ),
      new THREE.Vector3(
        index & 1 ? max.x : center.x,
        index & 2 ? max.y : center.y,
        index & 4 ? max.z : center.z
      )
    )
  }

  private extractPoints(positions: Float32Array, bounds: THREE.Box3): Float32Array {
    const result: number[] = []

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      const z = positions[i + 2]

      if (x >= bounds.min.x && x <= bounds.max.x &&
          y >= bounds.min.y && y <= bounds.max.y &&
          z >= bounds.min.z && z <= bounds.max.z) {
        result.push(x, y, z)
      }
    }

    return new Float32Array(result)
  }

  private downsample(positions: Float32Array, level: number): Float32Array {
    const pointCount = positions.length / 3
    const sampleRate = Math.max(1, Math.pow(2, level))
    const sampledCount = Math.floor(pointCount / sampleRate)
    const result = new Float32Array(sampledCount * 3)

    for (let i = 0; i < sampledCount; i++) {
      const srcIdx = Math.floor(i * sampleRate) * 3
      result[i * 3] = positions[srcIdx]
      result[i * 3 + 1] = positions[srcIdx + 1]
      result[i * 3 + 2] = positions[srcIdx + 2]
    }

    return result
  }

  private computeBounds(positions: Float32Array): THREE.Box3 {
    const bounds = new THREE.Box3()
    const vec = new THREE.Vector3()

    for (let i = 0; i < positions.length; i += 3) {
      vec.set(positions[i], positions[i + 1], positions[i + 2])
      bounds.expandByPoint(vec)
    }

    bounds.expandByScalar(0.01)
    return bounds
  }

  private collectStats(node: OctreeNode, stats: { totalNodes: number; leafNodes: number; totalPoints: number }): void {
    stats.totalNodes++
    if (node.isLeaf) {
      stats.leafNodes++
      if (node.points) stats.totalPoints += node.points.length / 3
    } else {
      for (const child of node.children) {
        if (child) this.collectStats(child, stats)
      }
    }
  }

  dispose(): void {
    this.root = null
  }
}
