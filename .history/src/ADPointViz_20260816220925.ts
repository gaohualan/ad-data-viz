import * as THREE from 'three'
import { SceneManager } from './core/SceneManager'
import { CameraController } from './core/CameraController'
import { LODManager } from './core/LODManager'
import { Picker, type PickResult } from './core/Picker'
import { KITTILoader } from './data/KITTILoader'
import { PointCloudLayer } from './layers/PointCloudLayer'
import { BoundingBoxLayer } from './layers/BoundingBoxLayer'
import { BEVLayer } from './layers/BEVLayer'
import { TrajectoryLayer } from './layers/TrajectoryLayer'
import { GridLayer } from './layers/GridLayer'
import type { ADPointVizOptions, ColorMode, Frame, ViewMode } from './types'

export class ADPointViz {
  private scene: SceneManager
  private camera: CameraController
  private loader: KITTILoader
  private picker: Picker
  private lodManager: LODManager

  private pointCloudLayer: PointCloudLayer
  private bboxLayer: BoundingBoxLayer
  private bevLayer: BEVLayer
  private trajectoryLayer: TrajectoryLayer
  private gridLayer: GridLayer

  private layers: Map<string, { setVisible: (v: boolean) => void; dispose: () => void }> = new Map()
  private frames: Frame[] = []
  private currentFrameIndex: number = 0
  private isPlaying: boolean = false
  private playSpeed: number = 1.0
  private playTimer: number | null = null

  private options: Required<Pick<ADPointVizOptions, 'enableLOD' | 'enableWorker' | 'maxPoints'>>

  constructor(options: ADPointVizOptions) {
    this.options = {
      enableLOD: options.enableLOD ?? false,
      enableWorker: options.enableWorker ?? true,
      maxPoints: options.maxPoints ?? 1_000_000,
    }

    this.scene = new SceneManager(options.container)
    this.camera = new CameraController(this.scene.camera, this.scene.renderer.domElement)
    this.loader = new KITTILoader({ enableWorker: this.options.enableWorker })
    this.picker = new Picker()
    this.lodManager = new LODManager()

    this.pointCloudLayer = new PointCloudLayer()
    this.bboxLayer = new BoundingBoxLayer()
    this.bevLayer = new BEVLayer()
    this.trajectoryLayer = new TrajectoryLayer()
    this.gridLayer = new GridLayer()

    this.registerLayer('pointcloud', this.pointCloudLayer)
    this.registerLayer('bbox', this.bboxLayer)
    this.registerLayer('bev', this.bevLayer)
    this.registerLayer('trajectory', this.trajectoryLayer)
    this.registerLayer('grid', this.gridLayer)

    this.scene.add(this.gridLayer.object3D)
    this.scene.add(this.pointCloudLayer.object3D)
    this.scene.add(this.bboxLayer.object3D)
    this.scene.add(this.bevLayer.object3D)
    this.scene.add(this.trajectoryLayer.object3D)

    this.scene.onUpdate((deltaTime) => {
      this.camera.update(deltaTime)
    })

    this.scene.start()
  }

  async loadFrame(binPath: string, labelPath?: string): Promise<Frame> {
    const frame = await this.loader.load(binPath, labelPath)
    this.frames = [frame]
    this.currentFrameIndex = 0
    this.applyFrame(frame)
    return frame
  }

  async loadSequence(
    frameList: Array<{ bin: string; label?: string }>,
    onProgress?: (loaded: number, total: number) => void
  ): Promise<Frame[]> {
    this.frames = await this.loader.loadSequence(frameList, onProgress)
    if (this.frames.length > 0) {
      this.currentFrameIndex = 0
      this.applyFrame(this.frames[0])
    }
    return this.frames
  }

  private applyFrame(frame: Frame): void {
    this.pointCloudLayer.setData(frame.points)
    this.bboxLayer.setData(frame.boxes)
    this.bevLayer.updateFromPointCloud(frame.points)
    this.bevLayer.updateBoxes(frame.boxes)

    if (this.options.enableLOD) {
      this.lodManager.build(frame.points.positions)
    }
  }

  nextFrame(): void {
    if (this.currentFrameIndex < this.frames.length - 1) {
      this.currentFrameIndex++
      this.applyFrame(this.frames[this.currentFrameIndex])
    }
  }

  prevFrame(): void {
    if (this.currentFrameIndex > 0) {
      this.currentFrameIndex--
      this.applyFrame(this.frames[this.currentFrameIndex])
    }
  }

  goToFrame(index: number): void {
    if (index >= 0 && index < this.frames.length) {
      this.currentFrameIndex = index
      this.applyFrame(this.frames[index])
    }
  }

  play(speed: number = 1.0): void {
    if (this.frames.length === 0) return
    this.isPlaying = true
    this.playSpeed = speed

    const playLoop = () => {
      if (!this.isPlaying) return
      if (this.currentFrameIndex < this.frames.length - 1) {
        this.nextFrame()
        this.playTimer = window.setTimeout(playLoop, 1000 / (10 * this.playSpeed))
      } else {
        this.isPlaying = false
      }
    }
    playLoop()
  }

  pause(): void {
    this.isPlaying = false
    if (this.playTimer !== null) {
      clearTimeout(this.playTimer)
      this.playTimer = null
    }
  }

  setView(mode: ViewMode): void {
    this.camera.setMode(mode)
    if (mode === 'bev') {
      this.bevLayer.setVisible(true)
      this.pointCloudLayer.setVisible(false)
      this.bboxLayer.setVisible(false)
    } else {
      this.bevLayer.setVisible(false)
      this.pointCloudLayer.setVisible(true)
      this.bboxLayer.setVisible(true)
    }
  }

  setColorMode(mode: ColorMode): void {
    this.pointCloudLayer.setColorMode(mode)
  }

  setPointSize(size: number): void {
    this.pointCloudLayer.setPointSize(size)
  }

  setLayerVisible(name: string, visible: boolean): void {
    this.layers.get(name)?.setVisible(visible)
  }

  pickPoint(event: PointerEvent): PickResult | null {
    return this.picker.pickPoint(
      event,
      this.scene.camera,
      this.pointCloudLayer.getGeometry(),
      this.pointCloudLayer.getColorMode() === 'intensity' ? 2 : 1
    )
  }

  measureDistance(p1: THREE.Vector3, p2: THREE.Vector3): number {
    return this.picker.measureDistance(p1, p2)
  }

  getFrameInfo(): { current: number; total: number } {
    return { current: this.currentFrameIndex, total: this.frames.length }
  }

  getLODStats(): { totalNodes: number; leafNodes: number; totalPoints: number } {
    return this.lodManager.getStats()
  }

  private registerLayer(name: string, layer: { setVisible: (v: boolean) => void; dispose: () => void; object3D?: THREE.Object3D }): void {
    this.layers.set(name, layer)
  }

  dispose(): void {
    this.pause()
    this.layers.forEach((layer) => layer.dispose())
    this.loader.dispose()
    this.picker.dispose()
    this.lodManager.dispose()
    this.camera.dispose()
    this.scene.dispose()
  }
}
