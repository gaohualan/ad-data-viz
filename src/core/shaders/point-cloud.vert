uniform float uPointSize;
uniform int uColorMode; // 0=intensity, 1=height, 2=semantic
uniform vec3 uMinBound;
uniform vec3 uMaxBound;
uniform sampler2D uColorRamp;

attribute float aIntensity;
attribute float aLabel;

varying vec3 vColor;
varying float vDepth;

vec3 semanticColor(float label) {
  if (label < 0.5) return vec3(0.5);
  if (label < 1.5) return vec3(0.2, 0.8, 0.2);
  if (label < 2.5) return vec3(0.8, 0.8, 0.2);
  if (label < 3.5) return vec3(0.8, 0.5, 0.2);
  if (label < 4.5) return vec3(0.9, 0.1, 0.1);
  if (label < 5.5) return vec3(0.1, 0.5, 0.9);
  if (label < 6.5) return vec3(0.9, 0.3, 0.7);
  return vec3(0.3, 0.3, 0.3);
}

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  float size = uPointSize * (300.0 / -mvPosition.z);
  gl_PointSize = clamp(size, 1.0, 8.0);

  if (uColorMode == 0) {
    float t = clamp(aIntensity / 255.0, 0.0, 1.0);
    vColor = texture2D(uColorRamp, vec2(t, 0.5)).rgb;
  } else if (uColorMode == 1) {
    float t = (position.y - uMinBound.y) / (uMaxBound.y - uMinBound.y + 0.001);
    vColor = texture2D(uColorRamp, vec2(clamp(t, 0.0, 1.0), 0.5)).rgb;
  } else {
    vColor = semanticColor(aLabel);
  }

  vDepth = -mvPosition.z;
}
