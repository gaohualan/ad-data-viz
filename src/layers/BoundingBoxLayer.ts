import * as THREE from 'three'
import { Text } from 'troika-three-text'
import type { BoundingBox } from '../types'
import { OBJECT_COLORS } from '../types'

export class BoundingBoxLayer {
  readonly object3D: THREE.Group
  private mesh: THREE.InstancedMesh
  private labels: THREE.Group
  private dummy = new THREE.Object3D()
  private maxInstances: number = 1000

  constructor() {
    this.object3D = new THREE.Group()

    const geo = new THREE.BoxGeometry(1, 1, 1)
    const edges = new THREE.EdgesGeometry(geo)

    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    })

    this.mesh = new THREE.InstancedMesh(edges, mat, this.maxInstances)
    this.mesh.frustumCulled = false
    this.mesh.count = 0

    this.labels = new THREE.Group()

    this.object3D.add(this.mesh)
    this.object3D.add(this.labels)
  }

  setData(boxes: BoundingBox[]): void {
    const count = Math.min(boxes.length, this.maxInstances)

    for (let i = 0; i < count; i++) {
      const box = boxes[i]
      this.dummy.position.set(box.center.x, box.center.y, box.center.z)
      this.dummy.rotation.set(0, box.rotationY, 0)
      this.dummy.scale.set(box.dimensions.x, box.dimensions.y, box.dimensions.z)
      this.dummy.updateMatrix()

      this.mesh.setMatrixAt(i, this.dummy.matrix)

      const color = new THREE.Color(OBJECT_COLORS[box.type] ?? 0x00ff00)
      this.mesh.setColorAt(i, color)
    }

    this.mesh.count = count
    this.mesh.instanceMatrix.needsUpdate = true
    if (this.mesh.instanceColor) {
      this.mesh.instanceColor.needsUpdate = true
    }

    this.updateLabels(boxes.slice(0, count))
  }

  private updateLabels(boxes: BoundingBox[]): void {
    while (this.labels.children.length > 0) {
      const child = this.labels.children[0]
      this.labels.remove(child)
      if (child instanceof Text) {
        ;(child as Text).dispose()
      }
    }

    for (const box of boxes) {
      const text = new Text()
      text.text = `${box.type}${box.score ? ` ${(box.score * 100).toFixed(0)}%` : ''}`
      text.fontSize = 0.5
      text.color = OBJECT_COLORS[box.type] ?? 0x00ff00
      text.position.set(box.center.x, box.center.y + box.dimensions.y / 2 + 0.5, box.center.z)
      text.sync()
      this.labels.add(text)
    }
  }

  setMaxInstances(count: number): void {
    this.maxInstances = count
    this.mesh.dispose()
    const geo = new THREE.BoxGeometry(1, 1, 1)
    const edges = new THREE.EdgesGeometry(geo)
    const mat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.9 })
    this.mesh = new THREE.InstancedMesh(edges, mat, count)
    this.mesh.frustumCulled = false
    this.mesh.count = 0
  }

  setVisible(visible: boolean): void {
    this.object3D.visible = visible
  }

  dispose(): void {
    this.mesh.geometry.dispose()
    if (Array.isArray(this.mesh.material)) {
      this.mesh.material.forEach((m) => m.dispose())
    } else {
      this.mesh.material.dispose()
    }

    for (const child of this.labels.children) {
      if (child instanceof Text) {
        ;(child as Text).dispose()
      }
    }
  }
}
