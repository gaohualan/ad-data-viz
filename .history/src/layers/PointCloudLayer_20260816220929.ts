import * as THREE from 'three'
import { ShaderLibrary } from '../core/ShaderLibrary'
import type { ColorMode, PointCloudData } from '../types'

export class PointCloudLayer {
  readonly object3D: THREE.Points
  private geometry: THREE.BufferGeometry
  private material: THREE.ShaderMaterial
  private colorMode: ColorMode = 'intensity'

  constructor() {
    this.geometry = new THREE.BufferGeometry()
    this.material = ShaderLibrary.createPointCloudMaterial()
    this.object3D = new THREE.Points(this.geometry, this.material)
    this.object3D.frustumCulled = false
  }

  setData(data: PointCloudData): void {
    const { positions, intensities, labels, count } = data

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    this.geometry.setAttribute('aIntensity', new THREE.BufferAttribute(intensities, 1))

    if (labels) {
      this.geometry.setAttribute('aLabel', new THREE.BufferAttribute(labels, 1))
    } else {
      this.geometry.setAttribute('aLabel', new THREE.BufferAttribute(new Float32Array(count), 1))
    }

    this.geometry.computeBoundingSphere()
    this.geometry.computeBoundingBox()

    this.updateBounds()
  }

  setColorMode(mode: ColorMode): void {
    this.colorMode = mode
    this.material.uniforms.uColorMode.value = mode === 'intensity' ? 0 : mode === 'height' ? 1 : 2
  }

  setPointSize(size: number): void {
    this.material.uniforms.uPointSize.value = size
  }

  private updateBounds(): void {
    const bbox = this.geometry.boundingBox
    if (bbox) {
      this.material.uniforms.uMinBound.value.copy(bbox.min)
      this.material.uniforms.uMaxBound.value.copy(bbox.max)
    }
  }

  getGeometry(): THREE.BufferGeometry {
    return this.geometry
  }

  getColorMode(): ColorMode {
    return this.colorMode
  }

  setVisible(visible: boolean): void {
    this.object3D.visible = visible
  }

  dispose(): void {
    this.geometry.dispose()
    this.material.dispose()
  }
}
