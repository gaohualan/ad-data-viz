export class BinaryReader {
  private view: DataView
  private offset = 0
  private littleEndian: boolean

  constructor(buffer: ArrayBuffer, byteOffset = 0, byteLength?: number) {
    this.view = new DataView(buffer, byteOffset, byteLength)
    this.littleEndian = true
  }

  get position(): number {
    return this.offset
  }

  get remaining(): number {
    return this.view.byteLength - this.offset
  }

  seek(offset: number): void {
    this.offset = offset
  }

  skip(bytes: number): void {
    this.offset += bytes
  }

  readFloat32(): number {
    const val = this.view.getFloat32(this.offset, this.littleEndian)
    this.offset += 4
    return val
  }

  readInt32(): number {
    const val = this.view.getInt32(this.offset, this.littleEndian)
    this.offset += 4
    return val
  }

  readUint8(): number {
    const val = this.view.getUint8(this.offset)
    this.offset += 1
    return val
  }

  readFloat32Array(count: number): Float32Array {
    const result = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      result[i] = this.view.getFloat32(this.offset, this.littleEndian)
      this.offset += 4
    }
    return result
  }

  readFloat32ArrayZeroCopy(count: number): Float32Array {
    const result = new Float32Array(
      this.view.buffer,
      this.view.byteOffset + this.offset,
      count
    )
    this.offset += count * 4
    return result
  }

  isEOF(): boolean {
    return this.offset >= this.view.byteLength
  }

  static detectEndianness(): boolean {
    const buf = new ArrayBuffer(4)
    new Uint32Array(buf)[0] = 0x12345678
    return new Uint8Array(buf)[0] === 0x78
  }
}
