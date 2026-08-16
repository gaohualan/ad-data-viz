declare module 'troika-three-text' {
  import * as THREE from 'three'

  export class Text extends THREE.Mesh {
    text: string
    fontSize: number
    color: number | string | THREE.Color
    anchorX: number | string
    anchorY: number | string
    position: THREE.Vector3
    sync(): void
    dispose(): void
  }

  export class BatchedText extends THREE.Mesh {}
  export class GlyphsGeometry extends THREE.BufferGeometry {}

  export function configureTextBuilder(options: Record<string, unknown>): void
  export function preloadFont(options: Record<string, unknown>): Promise<void>
  export function getTextRenderInfo(
    text: string,
    options?: Record<string, unknown>
  ): Record<string, unknown>
  export function getCaretAtPoint(
    textRenderInfo: Record<string, unknown>,
    x: number,
    y: number
  ): number
  export function getSelectionRects(
    textRenderInfo: Record<string, unknown>,
    start: number,
    end: number
  ): Array<Record<string, number>>
  export function createTextDerivedMaterial(
    baseMaterial: THREE.Material
  ): THREE.Material
  export const typesetterWorkerModule: string
  export const fontResolverWorkerModule: string
  export function dumpSDFTextures(): void
}
