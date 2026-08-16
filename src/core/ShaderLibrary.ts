import * as THREE from 'three'

import pointCloudVert from './shaders/point-cloud.vert?raw'
import pointCloudFrag from './shaders/point-cloud.frag?raw'

export class ShaderLibrary {
  static createPointCloudMaterial(): THREE.ShaderMaterial {
    const colorRamp = this.createColorRampTexture()

    return new THREE.ShaderMaterial({
      vertexShader: pointCloudVert,
      fragmentShader: pointCloudFrag,
      uniforms: {
        uPointSize: { value: 2.0 },
        uColorMode: { value: 0 },
        uMinBound: { value: new THREE.Vector3(-100, -10, -100) },
        uMaxBound: { value: new THREE.Vector3(100, 10, 100) },
        uColorRamp: { value: colorRamp },
      },
      transparent: true,
      depthWrite: false,
    })
  }

  static createColorRampTexture(): THREE.DataTexture {
    const size = 256
    const data = new Uint8Array(size * 4)

    for (let i = 0; i < size; i++) {
      const t = i / (size - 1)
      const color = this.turboColormap(t)
      data[i * 4] = color[0]
      data[i * 4 + 1] = color[1]
      data[i * 4 + 2] = color[2]
      data[i * 4 + 3] = 255
    }

    const texture = new THREE.DataTexture(data, size, 1, THREE.RGBAFormat)
    texture.needsUpdate = true
    return texture
  }

  private static turboColormap(t: number): [number, number, number] {
    const r = Math.round(255 * Math.min(1, Math.max(0, 1.5 - Math.abs(4 * t - 3))))
    const g = Math.round(255 * Math.min(1, Math.max(0, 1.5 - Math.abs(4 * t - 2))))
    const b = Math.round(255 * Math.min(1, Math.max(0, 1.5 - Math.abs(4 * t - 1))))
    return [r, g, b]
  }
}
