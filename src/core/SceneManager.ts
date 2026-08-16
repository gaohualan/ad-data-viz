import * as THREE from 'three'

export class SceneManager {
  readonly scene: THREE.Scene
  readonly camera: THREE.PerspectiveCamera
  readonly renderer: THREE.WebGLRenderer
  private container: HTMLElement
  private animationId: number | null = null
  private callbacks: Array<(deltaTime: number) => void> = []
  private clock = new THREE.Clock()

  constructor(container: HTMLElement) {
    this.container = container
    const width = container.clientWidth
    const height = container.clientHeight

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x1a1a2e)
    this.scene.fog = new THREE.Fog(0x1a1a2e, 50, 200)

    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    this.camera.position.set(30, 20, 30)
    this.camera.lookAt(0, 0, 0)

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
    })
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    container.appendChild(this.renderer.domElement)

    window.addEventListener('resize', this.onResize)
  }

  add(object: THREE.Object3D): void {
    this.scene.add(object)
  }

  remove(object: THREE.Object3D): void {
    this.scene.remove(object)
  }

  onUpdate(callback: (deltaTime: number) => void): void {
    this.callbacks.push(callback)
  }

  start(): void {
    if (this.animationId !== null) return
    this.animate()
  }

  stop(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId)
      this.animationId = null
    }
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate)
    const deltaTime = this.clock.getDelta()

    for (const callback of this.callbacks) {
      callback(deltaTime)
    }

    this.renderer.render(this.scene, this.camera)
  }

  private onResize = (): void => {
    const width = this.container.clientWidth
    const height = this.container.clientHeight
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  dispose(): void {
    this.stop()
    window.removeEventListener('resize', this.onResize)

    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry?.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach((m) => m.dispose())
        } else {
          object.material?.dispose()
        }
      }
    })

    this.renderer.dispose()

    if (this.renderer.domElement.parentNode === this.container) {
      this.container.removeChild(this.renderer.domElement)
    }
  }
}
