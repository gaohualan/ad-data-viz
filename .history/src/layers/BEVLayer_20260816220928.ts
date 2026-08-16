import * as THREE from 'three'
import type { PointCloudData, BoundingBox } from '../types'
import { OBJECT_COLORS } from '../types'

export class BEVLayer {
  readonly object3D: THREE.Group
  private pointsMesh: THREE.Mesh | THREE.Points
  private boxLines: THREE.LineSegments
  private gridHelper: THREE.GridHelper

  constructor() {
    this.object3D = new THREE.Group()
    this.object3D.visible = false

    const geo = new THREE.PlaneGeometry(200, 200, 1, 1)
    const mat = new THREE.MeshBasicMaterial({
      color: 0x0a0a1a,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    })
    this.pointsMesh = new THREE.Mesh(geo, mat)
    this.pointsMesh.rotation.x = -Math.PI / 2
    this.pointsMesh.position.y = -0.01

    this.boxLines = new THREE.LineSegments(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ vertexColors: true })
    )

    this.gridHelper = new THREE.GridHelper(200, 40, 0x333366, 0x222244)
    this.gridHelper.position.y = 0

    this.object3D.add(this.pointsMesh)
    this.object3D.add(this.gridHelper)
    this.object3D.add(this.boxLines)
  }

  updateFromPointCloud(data: PointCloudData): void {
    const { positions, intensities, count } = data
    const positions2D = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions2D[i * 3] = positions[i * 3]
      positions2D[i * 3 + 1] = 0
      positions2D[i * 3 + 2] = positions[i * 3 + 2]

      const t = Math.min(intensities[i] / 255, 1)
      colors[i * 3] = Math.min(1, 1.5 - Math.abs(4 * t - 3))
      colors[i * 3 + 1] = Math.min(1, 1.5 - Math.abs(4 * t - 2))
      colors[i * 3 + 2] = Math.min(1, 1.5 - Math.abs(4 * t - 1))
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions2D, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    this.pointsMesh.geometry.dispose()
    this.pointsMesh.geometry = geo
    this.pointsMesh.material = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      sizeAttenuation: true,
    })
    this.pointsMesh = new THREE.Points(geo, this.pointsMesh.material)

    while (this.object3D.children.length > 0) {
      this.object3D.remove(this.object3D.children[0])
    }
    this.object3D.add(this.pointsMesh)
    this.object3D.add(this.gridHelper)
    this.object3D.add(this.boxLines)
  }

  updateBoxes(boxes: BoundingBox[]): void {
    const positions: number[] = []
    const colors: number[] = []

    for (const box of boxes) {
      const { x: w, z: l } = box.dimensions
      const { x: cx, z: cz } = box.center
      const ry = box.rotationY

      const cosR = Math.cos(ry)
      const sinR = Math.sin(ry)

      const corners: [number, number][] = [
        [-l/2, -w/2], [l/2, -w/2], [l/2, w/2], [-l/2, w/2],
      ]

      const rotated = corners.map(([dx, dz]) => [
        cx + dx * cosR + dz * sinR,
        cz - dx * sinR + dz * cosR,
      ])

      const edges: [number, number][] = [
        [0, 1], [1, 2], [2, 3], [3, 0],
      ]

      const color = new THREE.Color(OBJECT_COLORS[box.type] ?? 0x00ff00)

      for (const [a, b] of edges) {
        positions.push(rotated[a][0], 0.01, rotated[a][1])
        positions.push(rotated[b][0], 0.01, rotated[b][1])
        colors.push(color.r, color.g, color.b)
        colors.push(color.r, color.g, color.b)
      }
    }

    this.boxLines.geometry.dispose()
    this.boxLines.geometry = new THREE.BufferGeometry()
    this.boxLines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    this.boxLines.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  }

  setVisible(visible: boolean): void {
    this.object3D.visible = visible
  }

  dispose(): void {
    this.pointsMesh.geometry.dispose()
    this.boxLines.geometry.dispose()
    this.gridHelper.geometry.dispose()
  }
}
