import { Vector3 } from 'three'

const EARTH_RADIUS = 6378137.0
const ECCENTRICITY_SQUARED = 0.00669437999014

export class CoordinateTransform {
  private lat0: number
  private lon0: number
  private alt0: number

  constructor(origin: { lat: number; lon: number; alt: number }) {
    this.lat0 = origin.lat
    this.lon0 = origin.lon
    this.alt0 = origin.alt
  }

  wgs84ToEcef(lat: number, lon: number, alt: number): Vector3 {
    const latRad = (lat * Math.PI) / 180
    const lonRad = (lon * Math.PI) / 180

    const sinLat = Math.sin(latRad)
    const cosLat = Math.cos(latRad)
    const sinLon = Math.sin(lonRad)
    const cosLon = Math.cos(lonRad)

    const N = EARTH_RADIUS / Math.sqrt(1 - ECCENTRICITY_SQUARED * sinLat * sinLat)

    return new Vector3(
      (N + alt) * cosLat * cosLon,
      (N + alt) * cosLat * sinLon,
      (N * (1 - ECCENTRICITY_SQUARED) + alt) * sinLat
    )
  }

  wgs84ToEnu(lat: number, lon: number, alt: number): Vector3 {
    const ecef = this.wgs84ToEcef(lat, lon, alt)
    const origin = this.wgs84ToEcef(this.lat0, this.lon0, this.alt0)
    const lat0Rad = (this.lat0 * Math.PI) / 180
    const lon0Rad = (this.lon0 * Math.PI) / 180

    const dx = ecef.x - origin.x
    const dy = ecef.y - origin.y
    const dz = ecef.z - origin.z

    const cosLat0 = Math.cos(lat0Rad)
    const sinLat0 = Math.sin(lat0Rad)
    const cosLon0 = Math.cos(lon0Rad)
    const sinLon0 = Math.sin(lon0Rad)

    return new Vector3(
      -sinLon0 * dx + cosLon0 * dy,
      -sinLat0 * cosLon0 * dx - sinLat0 * sinLon0 * dy + cosLat0 * dz,
      cosLat0 * cosLon0 * dx + cosLat0 * sinLon0 * dy + sinLat0 * dz
    )
  }

  enuToWgs84(east: number, north: number, up: number): { lat: number; lon: number; alt: number } {
    const origin = this.wgs84ToEcef(this.lat0, this.lon0, this.alt0)
    const lat0Rad = (this.lat0 * Math.PI) / 180
    const lon0Rad = (this.lon0 * Math.PI) / 180

    const cosLat0 = Math.cos(lat0Rad)
    const sinLat0 = Math.sin(lat0Rad)
    const cosLon0 = Math.cos(lon0Rad)
    const sinLon0 = Math.sin(lon0Rad)

    const dx = -sinLon0 * east - sinLat0 * cosLon0 * north + cosLat0 * cosLon0 * up
    const dy = cosLon0 * east - sinLat0 * sinLon0 * north + cosLat0 * sinLon0 * up
    const dz = cosLat0 * north + sinLat0 * up

    const x = origin.x + dx
    const y = origin.y + dy
    const z = origin.z + dz

    const lon = Math.atan2(y, x)
    const p = Math.sqrt(x * x + y * y)
    const lat = Math.atan2(z, p * (1 - ECCENTRICITY_SQUARED))
    const alt = p / Math.cos(lat) - EARTH_RADIUS

    return {
      lat: (lat * 180) / Math.PI,
      lon: (lon * 180) / Math.PI,
      alt,
    }
  }

  static gcj02ToWgs84(lng: number, lat: number): [number, number] {
    const dLat = CoordinateTransform.transformLat(lng - 105.0, lat - 35.0)
    const dLng = CoordinateTransform.transformLng(lng - 105.0, lat - 35.0)
    const radLat = (lat / 180.0) * Math.PI
    let magic = Math.sin(radLat)
    magic = 1 - ECCENTRICITY_SQUARED * magic * magic
    const sqrtMagic = Math.sqrt(magic)
    const dLatFixed = (dLat * 180.0) / ((EARTH_RADIUS * (1 - ECCENTRICITY_SQUARED)) / (magic * sqrtMagic) * Math.PI)
    const dLngFixed = (dLng * 180.0) / (EARTH_RADIUS / sqrtMagic * Math.cos(radLat) * Math.PI)
    return [lng - dLngFixed, lat - dLatFixed]
  }

  private static transformLat(x: number, y: number): number {
    let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x))
    ret += ((20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0) / 3.0
    ret += ((20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin((y / 3.0) * Math.PI)) * 2.0) / 3.0
    ret += ((160.0 * Math.sin((y / 12.0) * Math.PI) + 320 * Math.sin((y * Math.PI) / 30.0)) * 2.0) / 3.0
    return ret
  }

  private static transformLng(x: number, y: number): number {
    let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x))
    ret += ((20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0) / 3.0
    ret += ((20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin((x / 3.0) * Math.PI)) * 2.0) / 3.0
    ret += ((150.0 * Math.sin((x / 12.0) * Math.PI) + 300.0 * Math.sin((x / 30.0) * Math.PI)) * 2.0) / 3.0
    return ret
  }
}
