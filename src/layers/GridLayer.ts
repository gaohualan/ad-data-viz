import * as THREE from 'three'

export class GridLayer {
  readonly object3D: THREE.Group
  private grid: THREE.GridHelper
  private axes: THREE.AxesHelper

  constructor(size: number = 200, divisions: number = 40) {
    this.object3D = new THREE.Group()

    this.grid = new THREE.GridHelper(size, divisions, 0x3366cc, 0x1a2a4a)
    this.grid.position.y = -0.02

    this.axes = new THREE.AxesHelper(5)
    this.axes.position.y = 0.01

    this.object3D.add(this.grid)
    this.object3D.add(this.axes)
  }

  setVisible(visible: boolean): void {
    this.object3D.visible = visible
  }

  dispose(): void {
    this.grid.geometry.dispose()
    this.axes.geometry.dispose()
  }
}
