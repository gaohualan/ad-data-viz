export type ColorMode = 'intensity' | 'height' | 'semantic'

export type ViewMode = '3d' | 'bev' | 'follow'

export type ObjectType = 'Car' | 'Pedestrian' | 'Cyclist' | 'Van' | 'Truck' | 'Person_sitting' | 'Tram' | 'Misc' | 'DontCare'

export interface PointCloudData {
  positions: Float32Array
  intensities: Float32Array
  labels?: Float32Array
  count: number
}

export interface Vec3 {
  x: number
  y: number
  z: number
}

export interface BoundingBox {
  type: ObjectType
  center: Vec3
  dimensions: Vec3
  rotationY: number
  score?: number
  id?: number
}

export interface Frame {
  points: PointCloudData
  boxes: BoundingBox[]
  timestamp?: number
  pose?: Vec3
}

export interface Layer {
  object3D: THREE.Object3D
  setVisible(visible: boolean): void
  dispose(): void
}

export interface LoaderOptions {
  enableWorker?: boolean
  baseUrl?: string
}

export interface ADPointVizOptions {
  container: HTMLElement
  enableLOD?: boolean
  enableWorker?: boolean
  maxPoints?: number
  onProgress?: (progress: number) => void
}

export const SEMANTIC_COLORS: Record<number, [number, number, number]> = {
  0: [0.5, 0.5, 0.5],
  1: [0.2, 0.8, 0.2],
  2: [0.8, 0.8, 0.2],
  3: [0.8, 0.5, 0.2],
  4: [0.9, 0.1, 0.1],
  5: [0.1, 0.5, 0.9],
  6: [0.9, 0.3, 0.7],
  7: [0.3, 0.3, 0.3],
  8: [0.6, 0.9, 0.3],
  9: [0.3, 0.9, 0.9],
  10: [0.9, 0.6, 0.3],
}

export const OBJECT_COLORS: Record<ObjectType, number> = {
  Car: 0xff4444,
  Pedestrian: 0xffff44,
  Cyclist: 0x44ffff,
  Van: 0xff8844,
  Truck: 0xff44ff,
  Person_sitting: 0x88ff44,
  Tram: 0x4488ff,
  Misc: 0x888888,
  DontCare: 0x444444,
}

import type * as THREE from 'three'
