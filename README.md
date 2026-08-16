# AD-PointViz

> Autonomous driving point cloud visualization engine based on Three.js + WebGL.
> Supports KITTI dataset, custom GLSL shaders, octree LOD, and InstancedMesh optimization.

## Features

- **KITTI Data Loading** — Binary `.bin` point cloud parsing + label file parsing
- **Custom GLSL Shaders** — Intensity / Height / Semantic three color modes, circular points, distance fog
- **3D Bounding Boxes** — InstancedMesh rendering (1 Draw Call for 100+ boxes), per-type colors
- **BEV View** — Bird's-eye view with point cloud projection and box overlay
- **Octree LOD** — Spatial subdivision + frustum culling + distance-based level-of-detail
- **WebWorker** — Non-blocking point cloud parsing with transferable buffers
- **Multi-frame Playback** — Timeline scrubbing, play/pause/step, camera follow mode
- **Interactive Picking** — BVH-accelerated raycasting for point selection and measurement

## Architecture

```
┌─────────────────────────────────────────────────┐
│           Application Layer (App)                │
│   Demo UI · Playback · View Switcher             │
├─────────────────────────────────────────────────┤
│         Visualization Layer (Layers)              │
│   PointCloudLayer · BoundingBoxLayer · BEVLayer  │
│   TrajectoryLayer · GridLayer                     │
├─────────────────────────────────────────────────┤
│           Engine Layer (Core)                     │
│   SceneManager · CameraController · LODManager   │
│   ShaderLibrary · Picker                         │
├─────────────────────────────────────────────────┤
│            Data Layer (Data)                      │
│   KITTILoader · BinaryReader · WebWorkerPool     │
│   CoordinateTransform                            │
└─────────────────────────────────────────────────┘
```

Each layer has clear responsibilities and can be used independently.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

Then open `http://localhost:3000` in your browser.

## Usage

```typescript
import { ADPointViz } from 'ad-pointviz'

const viz = new ADPointViz({
  container: document.getElementById('canvas')!,
  enableLOD: true,
  enableWorker: true,
})

// Load KITTI frame
await viz.loadFrame('/data/000001.bin', '/data/000001.txt')

// Switch to BEV view
viz.setView('bev')

// Change color mode
viz.setColorMode('height')

// Playback controls
viz.play(2.0)  // 2x speed
viz.pause()
viz.nextFrame()
```

## Performance

| Data Scale | FPS | Draw Calls | Memory |
|------------|-----|------------|--------|
| 120K points | 60 | 3 | ~45MB |
| 500K points | 58 | 5 | ~120MB |
| 1M points | 55 | 5 | ~180MB |

Tested on Chrome 120+ with RTX 3060. LOD and Worker enabled.

## Tech Stack

- **Three.js** — WebGL rendering engine
- **TypeScript** — Type-safe development
- **GLSL** — Custom point cloud shaders
- **Vite** — Build tooling
- **WebWorker** — Multi-threaded data parsing
- **three-mesh-bvh** — Accelerated raycasting
- **troika-three-text** — 3D text labels
- **lil-gui** — Parameter controls

## Project Structure

```
ad-pointviz/
├── src/
│   ├── data/           # KITTI loader, binary reader, coordinate transform
│   ├── core/           # Scene manager, camera, LOD, shaders, picker
│   │   └── shaders/    # GLSL vertex/fragment shaders
│   ├── layers/         # Visualization layer components
│   ├── workers/        # WebWorker for point cloud parsing
│   ├── types/          # TypeScript type definitions
│   ├── ADPointViz.ts   # Main entry point
│   └── index.ts        # Package exports
├── demo/               # Demo application
├── tests/              # Unit tests
└── package.json
```

## License

MIT
