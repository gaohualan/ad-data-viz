import * as THREE from 'three'

export class TrajectoryLayer {
  readonly object3D: THREE.Group
  private line: THREE.Line
  private pointMesh: THREE.Mesh
  private velocityArrow: THREE.ArrowHelper

  constructor() {
    this.object3D = new THREE.Group()

    const geo = new THREE.BufferGeometry()
    const mat = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      linewidth: 2,
      transparent: true,
      opacity: 0.8,
    })
    this.line = new THREE.Line(geo, mat)

    const pointGeo = new THREE.SphereGeometry(0.3, 16, 16)
    const pointMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.pointMesh = new THREE.Mesh(pointGeo, pointMat)

    this.velocityArrow = new THREE.ArrowHelper(
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, 0),
      5,
      0xffff00
    )

    this.object3D.add(this.line)
    this.object3D.add(this.pointMesh)
    this.object3D.add(this.velocityArrow)
  }

  setTrajectory(positions: Float32Array | THREE.Vector3[]): void {
    const points: THREE.Vector3[] = []

    if (positions instanceof Float32Array) {
      for (let i = 0; i < positions.length; i += 3) {
        points.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]))
      }
    } else {
      points.push(...positions)
    }

    this.line.geometry.dispose()
    this.line.geometry = new THREE.BufferGeometry().setFromPoints(points)

    if (points.length > 0) {
      this.pointMesh.position.copy(points[points.length - 1])
    }
  }

  setCurrentPosition(pos: THREE.Vector3, velocity?: THREE.Vector3): void {
    this.pointMesh.position.copy(pos)

    if (velocity && velocity.length() > 0.1) {
      this.velocityArrow.position.copy(pos)
      this.velocityArrow.setDirection(velocity.clone().normalize())
      this.velocityArrow.setLength(Math.min(velocity.length() * 0.5, 10), 1, 0.5)
      this.velocityArrow.visible = true
    } else {
      this.velocityArrow.visible = false
    }
  }

  setVisible(visible: boolean): void {
    this.object3D.visible = visible
  }

  dispose(): void {
    this.line.geometry.dispose()
    this.pointMesh.geometry.dispose()
    this.velocityArrow.dispose()
  }
}
