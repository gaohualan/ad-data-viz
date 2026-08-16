import * as THREE from 'three'
import { MeshBVH, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh'

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree

export interface PickResult {
  point: THREE.Vector3
  index: number
  distance: number
}

export class Picker {
  private raycaster = new THREE.Raycaster()
  private pointer = new THREE.Vector2()

  pickPoint(
    event: PointerEvent | { x: number; y: number },
    camera: THREE.Camera,
    geometry: THREE.BufferGeometry,
    pointSize: number = 2
  ): PickResult | null {
    this.updatePointer(event, camera)

    this.raycaster.setFromCamera(this.pointer, camera)
    this.raycaster.params.Points = { threshold: pointSize }

    const intersects = this.raycaster.intersectObject(
      new THREE.Points(geometry, new THREE.PointsMaterial()),
      false
    )

    if (intersects.length === 0) return null

    const hit = intersects[0]
    return {
      point: hit.point.clone(),
      index: hit.index ?? 0,
      distance: hit.distance,
    }
  }

  pickMesh(
    event: PointerEvent | { x: number; y: number },
    camera: THREE.Camera,
    meshes: THREE.Object3D[]
  ): THREE.Intersection | null {
    this.updatePointer(event, camera)
    this.raycaster.setFromCamera(this.pointer, camera)

    const intersects = this.raycaster.intersectObjects(meshes, true)
    return intersects.length > 0 ? intersects[0] : null
  }

  boxSelect(
    startScreen: { x: number; y: number },
    endScreen: { x: number; y: number },
    camera: THREE.Camera,
    geometry: THREE.BufferGeometry
  ): number[] {
    const indices: number[] = []
    const positions = geometry.attributes.position

    const minX = Math.min(startScreen.x, endScreen.x)
    const maxX = Math.max(startScreen.x, endScreen.x)
    const minY = Math.min(startScreen.y, endScreen.y)
    const maxY = Math.max(startScreen.y, endScreen.y)

    const vec = new THREE.Vector3()

    for (let i = 0; i < positions.count; i++) {
      vec.fromBufferAttribute(positions, i)
      vec.project(camera)

      const sx = (vec.x + 1) / 2
      const sy = (1 - vec.y) / 2

      if (sx >= minX && sx <= maxX && sy >= minY && sy <= maxY) {
        indices.push(i)
      }
    }

    return indices
  }

  measureDistance(p1: THREE.Vector3, p2: THREE.Vector3): number {
    return p1.distanceTo(p2)
  }

  private updatePointer(event: PointerEvent | { x: number; y: number }, camera: THREE.Camera): void {
    const canvas = camera.userData.canvas as HTMLElement | undefined
    let rect: DOMRect

    if (canvas) {
      rect = canvas.getBoundingClientRect()
    } else {
      rect = { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight } as DOMRect
    }

    if (event instanceof PointerEvent) {
      this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    } else {
      this.pointer.x = (event.x / rect.width) * 2 - 1
      this.pointer.y = -(event.y / rect.height) * 2 + 1
    }
  }

  static accelerateGeometry(geometry: THREE.BufferGeometry): void {
    if (!geometry.boundsTree) {
      geometry.computeBoundsTree()
    }
  }

  dispose(): void {
    this.raycaster = new THREE.Raycaster()
  }
}
