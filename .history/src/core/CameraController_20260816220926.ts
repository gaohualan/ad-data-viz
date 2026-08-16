import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { ViewMode } from '../types'

export class CameraController {
  readonly controls: OrbitControls
  private camera: THREE.PerspectiveCamera
  private mode: ViewMode = '3d'
  private followTarget: THREE.Vector3 | null = null
  private followOffset = new THREE.Vector3(-15, 12, -15)

  constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
    this.camera = camera
    this.controls = new OrbitControls(camera, domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
    this.controls.minDistance = 2
    this.controls.maxDistance = 500
    this.controls.maxPolarAngle = Math.PI * 0.95
  }

  setMode(mode: ViewMode): void {
    this.mode = mode

    switch (mode) {
      case '3d':
        this.controls.enabled = true
        this.camera.position.set(30, 20, 30)
        this.camera.fov = 60
        this.camera.updateProjectionMatrix()
        break

      case 'bev':
        this.controls.enabled = true
        this.camera.position.set(0, 100, 0.01)
        this.camera.fov = 45
        this.camera.updateProjectionMatrix()
        this.controls.maxPolarAngle = 0.01
        break

      case 'follow':
        this.controls.enabled = false
        this.camera.fov = 70
        this.camera.updateProjectionMatrix()
        break
    }
  }

  setFollowTarget(target: THREE.Vector3): void {
    this.followTarget = target
  }

  update(deltaTime: number): void {
    if (this.mode === 'follow' && this.followTarget) {
      const desired = this.followTarget.clone().add(this.followOffset)
      this.camera.position.lerp(desired, Math.min(deltaTime * 5, 1))
      this.camera.lookAt(this.followTarget)
    } else {
      if (this.mode === 'bev') {
        this.controls.maxPolarAngle = 0.01
      } else {
        this.controls.maxPolarAngle = Math.PI * 0.95
      }
      this.controls.update()
    }
  }

  setFollowOffset(offset: THREE.Vector3): void {
    this.followOffset.copy(offset)
  }

  reset(): void {
    this.setMode('3d')
    this.controls.target.set(0, 0, 0)
  }

  dispose(): void {
    this.controls.dispose()
  }
}
