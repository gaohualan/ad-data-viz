import { ADPointViz } from "../src/ADPointViz";
import type { ColorMode, ViewMode } from "../src/types";
import Stats from "stats.js";

const container = document.getElementById("canvas-container")!;
const loading = document.getElementById("loading")!;

const viz = new ADPointViz({
  container,
  enableLOD: true,
  enableWorker: true,
});

const stats = new Stats();
stats.showPanel(0);
stats.dom.style.position = "absolute";
stats.dom.style.top = "0";
stats.dom.style.left = "0";
document.getElementById("stats-container")!.appendChild(stats.dom);

function animate() {
  requestAnimationFrame(animate);
  stats.begin();
  stats.end();
}
animate();

async function loadDemoData() {
  try {
    const binPath = import.meta.env.BASE_URL + "sample-data/demo.bin";
    const labelPath = import.meta.env.BASE_URL + "sample-data/demo.txt";

    try {
      await viz.loadFrame(binPath, labelPath);
    } catch {
      console.log(
        "No demo data found. Please load a KITTI .bin file manually.",
      );
      loading.classList.add("hidden");
      document.getElementById("stats-text")!.textContent =
        "Ready — Load a .bin file to start";
      return;
    }

    loading.classList.add("hidden");
    updateStats();
  } catch (err) {
    console.error("Failed to load demo data:", err);
    loading.classList.add("hidden");
    document.getElementById("stats-text")!.textContent =
      "Failed to load demo data";
  }
}

function updateStats() {
  const { current, total } = viz.getFrameInfo();
  document.getElementById("frame-info")!.textContent =
    `${current + 1} / ${total}`;

  const lodStats = viz.getLODStats();
  document.getElementById("stats-text")!.textContent =
    `Frames: ${total} | LOD Nodes: ${lodStats.totalNodes} (${lodStats.leafNodes} leaves) | Points: ${lodStats.totalPoints.toLocaleString()}`;
}

document
  .getElementById("btn-3d")!
  .addEventListener("click", () => setActiveView("3d"));
document
  .getElementById("btn-bev")!
  .addEventListener("click", () => setActiveView("bev"));
document
  .getElementById("btn-follow")!
  .addEventListener("click", () => setActiveView("follow"));

function setActiveView(mode: ViewMode) {
  viz.setView(mode);
  document
    .querySelectorAll("#controls .btn-group:nth-child(1) button")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(`btn-${mode}`)?.classList.add("active");
}

document
  .getElementById("btn-intensity")!
  .addEventListener("click", () => setActiveColor("intensity"));
document
  .getElementById("btn-height")!
  .addEventListener("click", () => setActiveColor("height"));
document
  .getElementById("btn-semantic")!
  .addEventListener("click", () => setActiveColor("semantic"));

function setActiveColor(mode: ColorMode) {
  viz.setColorMode(mode);
  document
    .querySelectorAll("#controls .control-group:nth-child(2) button")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(`btn-${mode}`)?.classList.add("active");
}

const sizeSlider = document.getElementById("point-size") as HTMLInputElement;
const sizeValue = document.getElementById("size-value")!;
sizeSlider.addEventListener("input", () => {
  const size = parseFloat(sizeSlider.value);
  viz.setPointSize(size);
  sizeValue.textContent = size.toFixed(1);
});

document.getElementById("btn-grid")!.addEventListener("click", (e) => {
  const btn = e.target as HTMLElement;
  btn.classList.toggle("active");
  viz.setLayerVisible("grid", btn.classList.contains("active"));
});

document.getElementById("btn-bbox")!.addEventListener("click", (e) => {
  const btn = e.target as HTMLElement;
  btn.classList.toggle("active");
  viz.setLayerVisible("bbox", btn.classList.contains("active"));
});

document.getElementById("btn-trajectory")!.addEventListener("click", (e) => {
  const btn = e.target as HTMLElement;
  btn.classList.toggle("active");
  viz.setLayerVisible("trajectory", btn.classList.contains("active"));
});

document.getElementById("btn-prev")!.addEventListener("click", () => {
  viz.prevFrame();
  updateStats();
});

document.getElementById("btn-next")!.addEventListener("click", () => {
  viz.nextFrame();
  updateStats();
});

const playBtn = document.getElementById("btn-play")!;
playBtn.addEventListener("click", () => {
  if (playBtn.classList.contains("active")) {
    viz.pause();
    playBtn.classList.remove("active");
    playBtn.textContent = "▶";
  } else {
    viz.play(1.0);
    playBtn.classList.add("active");
    playBtn.textContent = "⏸";
  }
});

const fileInput = document.getElementById("file-input") as HTMLInputElement;
document
  .getElementById("btn-load")!
  .addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", async (e) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;

  loading.classList.remove("hidden");
  loading.querySelector("p")!.textContent = `Loading ${file.name}...`;

  const url = URL.createObjectURL(file);
  try {
    await viz.loadFrame(url);
    updateStats();
  } catch (err) {
    console.error("Failed to load file:", err);
    alert(`Failed to load ${file.name}`);
  } finally {
    loading.classList.add("hidden");
    URL.revokeObjectURL(url);
  }
});

loadDemoData();
