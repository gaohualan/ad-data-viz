varying vec3 vColor;
varying float vDepth;

void main() {
  vec2 coord = gl_PointCoord - vec2(0.5);
  if (dot(coord, coord) > 0.25) discard;

  float fog = 1.0 - clamp(vDepth / 120.0, 0.0, 1.0);
  vec3 finalColor = mix(vec3(0.1, 0.1, 0.12), vColor, fog);

  gl_FragColor = vec4(finalColor, fog);
}
