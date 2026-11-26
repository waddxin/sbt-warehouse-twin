var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/main.ts
import { createApp } from "vue";

// src/runtime.ts
import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from "vue";

// node_modules/lucide-vue-next/dist/esm/createLucideIcon.js
import { h as h2 } from "vue";

// node_modules/lucide-vue-next/dist/esm/Icon.js
import { h } from "vue";

// node_modules/lucide-vue-next/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// node_modules/lucide-vue-next/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// node_modules/lucide-vue-next/dist/esm/Icon.js
var Icon = ({ size, strokeWidth = 2, absoluteStrokeWidth, color, iconNode, name, class: classes, ...props }, { slots }) => {
  return h(
    "svg",
    {
      ...defaultAttributes,
      width: size || defaultAttributes.width,
      height: size || defaultAttributes.height,
      stroke: color || defaultAttributes.stroke,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: ["lucide", `lucide-${toKebabCase(name ?? "icon")}`],
      ...props
    },
    [...iconNode.map((child) => h(...child)), ...slots.default ? [slots.default()] : []]
  );
};

// node_modules/lucide-vue-next/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => (props, { slots }) => h2(
  Icon,
  {
    ...props,
    iconNode,
    name: iconName
  },
  slots
);

// node_modules/lucide-vue-next/dist/esm/icons/activity.js
var Activity = createLucideIcon("ActivityIcon", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
]);

// node_modules/lucide-vue-next/dist/esm/icons/battery-charging.js
var BatteryCharging = createLucideIcon("BatteryChargingIcon", [
  ["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2", key: "1sdynx" }],
  ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1", key: "1gkd3k" }],
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/box.js
var Box = createLucideIcon("BoxIcon", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/braces.js
var Braces = createLucideIcon("BracesIcon", [
  [
    "path",
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23"
    }
  ]
]);

// node_modules/lucide-vue-next/dist/esm/icons/check.js
var Check = createLucideIcon("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);

// node_modules/lucide-vue-next/dist/esm/icons/chevron-right.js
var ChevronRight = createLucideIcon("ChevronRightIcon", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/circle-alert.js
var CircleAlert = createLucideIcon("CircleAlertIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/circle-check.js
var CircleCheck = createLucideIcon("CircleCheckIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/circle-help.js
var CircleHelp = createLucideIcon("CircleHelpIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/circle.js
var Circle = createLucideIcon("CircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/clock-3.js
var Clock3 = createLucideIcon("Clock3Icon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/cpu.js
var Cpu = createLucideIcon("CpuIcon", [
  ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/focus.js
var Focus = createLucideIcon("FocusIcon", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/link-2.js
var Link2 = createLucideIcon("Link2Icon", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/loader-circle.js
var LoaderCircle = createLucideIcon("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/map-pin.js
var MapPin = createLucideIcon("MapPinIcon", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/mouse-pointer-2.js
var MousePointer2 = createLucideIcon("MousePointer2Icon", [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
]);

// node_modules/lucide-vue-next/dist/esm/icons/package-check.js
var PackageCheck = createLucideIcon("PackageCheckIcon", [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/package.js
var Package = createLucideIcon("PackageIcon", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/pause.js
var Pause = createLucideIcon("PauseIcon", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/play.js
var Play = createLucideIcon("PlayIcon", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/radio-tower.js
var RadioTower = createLucideIcon("RadioTowerIcon", [
  ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }],
  ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
  ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }],
  ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }],
  ["path", { d: "M9.5 18h5", key: "mfy3pd" }],
  ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/radio.js
var Radio = createLucideIcon("RadioIcon", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/rotate-ccw.js
var RotateCcw = createLucideIcon("RotateCcwIcon", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/route.js
var Route = createLucideIcon("RouteIcon", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/scan-line.js
var ScanLine = createLucideIcon("ScanLineIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/scroll-text.js
var ScrollText = createLucideIcon("ScrollTextIcon", [
  ["path", { d: "M15 12h-5", key: "r7krc0" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
]);

// node_modules/lucide-vue-next/dist/esm/icons/shield-check.js
var ShieldCheck = createLucideIcon("ShieldCheckIcon", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/sparkles.js
var Sparkles = createLucideIcon("SparklesIcon", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/square-terminal.js
var SquareTerminal = createLucideIcon("SquareTerminalIcon", [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/triangle-alert.js
var TriangleAlert = createLucideIcon("TriangleAlertIcon", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/warehouse.js
var Warehouse = createLucideIcon("WarehouseIcon", [
  [
    "path",
    {
      d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
      key: "gksnxg"
    }
  ],
  ["path", { d: "M6 18h12", key: "9pbo8z" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }],
  ["rect", { width: "12", height: "12", x: "6", y: "10", key: "apd30q" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/x.js
var X = createLucideIcon("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);

// node_modules/lucide-vue-next/dist/esm/icons/zap.js
var Zap = createLucideIcon("ZapIcon", [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
]);

// src/engine/WarehouseScene.ts
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
var WarehouseScene = class {
  constructor(container, simulation2) {
    __publicField(this, "onSelect");
    __publicField(this, "container");
    __publicField(this, "simulation");
    __publicField(this, "scene", new THREE.Scene());
    __publicField(this, "camera", new THREE.PerspectiveCamera(38, 1, 0.1, 250));
    __publicField(this, "renderer");
    __publicField(this, "controls");
    __publicField(this, "resizeObserver");
    __publicField(this, "raycaster", new THREE.Raycaster());
    __publicField(this, "pointer", new THREE.Vector2());
    __publicField(this, "robotVisuals", /* @__PURE__ */ new Map());
    __publicField(this, "selectable", []);
    __publicField(this, "frame", 0);
    __publicField(this, "clock", new THREE.Clock());
    __publicField(this, "activeView", "overview");
    __publicField(this, "cameraDestination", new THREE.Vector3(33, 31, 35));
    __publicField(this, "targetDestination", new THREE.Vector3(0, 1.5, 0));
    __publicField(this, "routeLine");
    __publicField(this, "routeUpdate", 0);
    __publicField(this, "floorMaterial");
    __publicField(this, "animate", () => {
      this.frame = requestAnimationFrame(this.animate);
      const delta = Math.min(this.clock.getDelta(), 0.05);
      this.updateRobots(delta);
      if (this.activeView === "robot" && this.simulation.state.autoCamera) {
        const order = this.simulation.state.orders.find((item) => item.id === this.simulation.state.selectedOrderId);
        const task = this.simulation.state.tasks.find((item) => item.id === order?.taskId);
        const robot = this.simulation.state.robots.find((item) => item.id === task?.robotId) ?? this.simulation.state.robots[0];
        if (robot) {
          this.cameraDestination.set(robot.x + 6.5, 4.7, robot.z + 6.2);
          this.targetDestination.set(robot.x, 1.65, robot.z);
        }
      }
      const cameraBlend = 1 - Math.exp(-delta * 3.4);
      this.camera.position.lerp(this.cameraDestination, cameraBlend);
      this.controls.target.lerp(this.targetDestination, cameraBlend);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    });
    __publicField(this, "handleClick", (event) => {
      const rect = this.renderer.domElement.getBoundingClientRect();
      this.pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
      this.raycaster.setFromCamera(this.pointer, this.camera);
      const hits = this.raycaster.intersectObjects(this.selectable, true);
      if (!hits.length) return;
      let object = hits[0].object;
      while (object && !object.userData.selectType) object = object.parent;
      if (object?.userData.selectType) this.onSelect?.(object.userData.selectType, object.userData.id);
    });
    this.container = container;
    this.simulation = simulation2;
    this.scene.background = new THREE.Color("#dce5e9");
    this.scene.fog = new THREE.Fog("#dce5e9", 52, 105);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.9;
    this.renderer.domElement.setAttribute("aria-label", "SBT \u7ACB\u4F53\u4ED3\u5E93\u4E09\u7EF4\u4EA4\u4E92\u573A\u666F");
    this.container.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.075;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 85;
    this.controls.maxPolarAngle = Math.PI * 0.485;
    this.controls.target.copy(this.targetDestination);
    this.camera.position.copy(this.cameraDestination);
    this.floorMaterial = new THREE.MeshStandardMaterial({ color: "#b8c2c5", roughness: 0.92, metalness: 0.02 });
    this.buildLighting();
    this.buildWarehouse();
    this.buildRacks();
    this.buildConveyors();
    this.buildRobots();
    this.buildRouteLine();
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
    this.renderer.domElement.addEventListener("click", this.handleClick);
    this.resize();
    this.animate();
  }
  setView(view) {
    this.activeView = view;
    const positions = {
      overview: { position: [33, 31, 35], target: [0, 1.5, 0] },
      inbound: { position: [28, 11, 18], target: [14, 1.6, 7.2] },
      aisle: { position: [12, 3.2, 0.2], target: [-12, 2.1, 0] },
      outbound: { position: [29, 12, -15], target: [16, 1.2, 0] }
    };
    if (view !== "robot") {
      this.cameraDestination.set(...positions[view].position);
      this.targetDestination.set(...positions[view].target);
    }
  }
  focusRobot(robotId) {
    if (!this.robotVisuals.has(robotId)) return;
    this.activeView = "robot";
  }
  dispose() {
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.renderer.domElement.removeEventListener("click", this.handleClick);
    this.controls.dispose();
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Sprite) {
        object.geometry?.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => {
          if ("map" in material && material.map instanceof THREE.Texture) material.map.dispose();
          material.dispose();
        });
      }
    });
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
  buildLighting() {
    this.scene.add(new THREE.HemisphereLight("#f7fcff", "#718087", 1.45));
    const sun = new THREE.DirectionalLight("#ffffff", 2.25);
    sun.position.set(12, 28, 20);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -30;
    sun.shadow.camera.right = 30;
    sun.shadow.camera.top = 24;
    sun.shadow.camera.bottom = -24;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 80;
    sun.shadow.bias = -25e-5;
    this.scene.add(sun);
    const fill = new THREE.DirectionalLight("#b8e8f2", 0.65);
    fill.position.set(-20, 10, -18);
    this.scene.add(fill);
  }
  buildWarehouse() {
    const floor = new THREE.Mesh(new THREE.BoxGeometry(48, 0.18, 23), this.floorMaterial);
    floor.position.y = -0.11;
    floor.receiveShadow = true;
    this.scene.add(floor);
    const grid = new THREE.GridHelper(48, 48, "#8e9da2", "#aeb9bd");
    grid.scale.z = 23 / 48;
    grid.position.y = 5e-3;
    grid.material.transparent = true;
    grid.material.opacity = 0.24;
    this.scene.add(grid);
    const wallMaterial = new THREE.MeshStandardMaterial({ color: "#e8edee", roughness: 0.88 });
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(0.18, 6.5, 23), wallMaterial);
    backWall.position.set(-23.8, 3.15, 0);
    backWall.receiveShadow = true;
    this.scene.add(backWall);
    const sideWall = new THREE.Mesh(new THREE.BoxGeometry(48, 6.5, 0.16), wallMaterial);
    sideWall.position.set(0, 3.15, -11.4);
    this.scene.add(sideWall);
    const columnMaterial = new THREE.MeshStandardMaterial({ color: "#8d9b9f", metalness: 0.55, roughness: 0.42 });
    for (const x of [-23.4, -12, 0, 12, 23.4]) {
      for (const z of [-11, 11]) {
        const column = new THREE.Mesh(new THREE.BoxGeometry(0.22, 7.2, 0.22), columnMaterial);
        column.position.set(x, 3.6, z);
        this.scene.add(column);
      }
    }
    for (const z of [-11, 11]) {
      const beam = new THREE.Mesh(new THREE.BoxGeometry(47, 0.18, 0.2), columnMaterial);
      beam.position.set(0, 7.1, z);
      this.scene.add(beam);
    }
    this.addZoneLabel("\u667A\u80FD\u5B58\u50A8\u533A", new THREE.Vector3(-9, 6.3, -7.5), 4.2);
    this.addZoneLabel("\u4E0A\u8D27\u63A5\u9A73\u533A", new THREE.Vector3(15, 5.8, 9.2), 3.6);
    this.addZoneLabel("\u51FA\u5E93\u62E3\u9009\u533A", new THREE.Vector3(19.5, 5.4, -1.5), 3.6);
    const safetyMaterial = new THREE.MeshBasicMaterial({ color: "#e5b74c", transparent: true, opacity: 0.8 });
    for (const z of [-8.9, 8.9]) {
      const stripe = new THREE.Mesh(new THREE.PlaneGeometry(41, 0.08), safetyMaterial);
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(-1, 0.014, z);
      this.scene.add(stripe);
    }
  }
  buildRacks() {
    const rows = [-7.5, -4.5, -1.5, 1.5, 4.5, 7.5];
    const bays = 16;
    const levels = 10;
    const levelHeight = 0.43;
    const firstCenter = -18.9;
    const rackMaterial = new THREE.MeshStandardMaterial({ color: "#d7dad7", metalness: 0.48, roughness: 0.5 });
    const shelfMaterial = new THREE.MeshStandardMaterial({ color: "#bbc4c5", metalness: 0.4, roughness: 0.54 });
    const uprightGeometry = new THREE.BoxGeometry(0.075, 4.65, 0.075);
    const shelfGeometry = new THREE.BoxGeometry(2.02, 0.045, 1.22);
    const uprightCount = rows.length * (bays + 1) * 2;
    const shelfCount = rows.length * bays * levels;
    const uprights = new THREE.InstancedMesh(uprightGeometry, rackMaterial, uprightCount);
    const shelves = new THREE.InstancedMesh(shelfGeometry, shelfMaterial, shelfCount);
    const matrix = new THREE.Matrix4();
    let uprightIndex = 0;
    let shelfIndex = 0;
    for (const z of rows) {
      for (let bay = 0; bay <= bays; bay += 1) {
        const x = firstCenter - 1.05 + bay * 2.1;
        for (const side of [-0.61, 0.61]) {
          matrix.makeTranslation(x, 2.325, z + side);
          uprights.setMatrixAt(uprightIndex++, matrix);
        }
      }
      for (let bay = 0; bay < bays; bay += 1) {
        for (let level = 0; level < levels; level += 1) {
          matrix.makeTranslation(firstCenter + bay * 2.1, 0.24 + level * levelHeight, z);
          shelves.setMatrixAt(shelfIndex++, matrix);
        }
      }
      const shadow = new THREE.Mesh(
        new THREE.PlaneGeometry(35, 1.7),
        new THREE.MeshBasicMaterial({ color: "#526168", transparent: true, opacity: 0.13, depthWrite: false })
      );
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.set(-3.15, 0.012, z);
      this.scene.add(shadow);
    }
    this.scene.add(uprights, shelves);
    const toteGeometry = new RoundedBoxGeometry(0.58, 0.275, 0.46, 2, 0.025);
    const toteMaterial = new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.72, metalness: 0.04 });
    const totes = new THREE.InstancedMesh(toteGeometry, toteMaterial, shelfCount * 3);
    const lipGeometry = new THREE.BoxGeometry(0.46, 0.055, 0.018);
    const lipMaterial = new THREE.MeshStandardMaterial({ color: "#59676d", roughness: 0.78 });
    const lips = new THREE.InstancedMesh(lipGeometry, lipMaterial, shelfCount * 3);
    const palette = ["#78868d", "#87959a", "#6f7e84", "#94a0a3", "#7b898e"];
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3(1, 1, 1);
    let toteIndex = 0;
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
      const z = rows[rowIndex];
      for (let bay = 0; bay < bays; bay += 1) {
        for (let level = 0; level < levels; level += 1) {
          for (let column = 0; column < 3; column += 1) {
            const occupied = (rowIndex * 17 + bay * 13 + level * 7 + column * 5) % 11 > 1;
            const x = firstCenter + bay * 2.1 + (column - 1) * 0.64;
            const y = 0.41 + level * levelHeight;
            const position = new THREE.Vector3(x, occupied ? y : -20, z + 0.29);
            matrix.compose(position, quaternion, scale);
            totes.setMatrixAt(toteIndex, matrix);
            totes.setColorAt(toteIndex, new THREE.Color(palette[(rowIndex + bay + level + column) % palette.length]));
            matrix.compose(new THREE.Vector3(x, occupied ? y + 0.02 : -20, z + 0.527), quaternion, scale);
            lips.setMatrixAt(toteIndex, matrix);
            toteIndex += 1;
          }
        }
      }
    }
    totes.instanceMatrix.needsUpdate = true;
    if (totes.instanceColor) totes.instanceColor.needsUpdate = true;
    this.scene.add(totes, lips);
    const labelMaterial = new THREE.MeshBasicMaterial({ color: "#263b46" });
    rows.forEach((z, index) => {
      const endSign = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.48, 0.7), labelMaterial);
      endSign.position.set(-20.08, 4.4, z);
      this.scene.add(endSign);
      this.addZoneLabel(`${String.fromCharCode(65 + index)} \u533A`, new THREE.Vector3(-20.25, 4.45, z), 1.25, "#153746");
    });
    const qrMaterial = new THREE.MeshBasicMaterial({ color: "#34464d" });
    for (const z of [-6, -3, 0, 3, 6]) {
      for (let x = -17; x <= 14; x += 4) {
        const marker = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), qrMaterial);
        marker.rotation.x = -Math.PI / 2;
        marker.position.set(x, 0.018, z);
        this.scene.add(marker);
      }
    }
  }
  buildConveyors() {
    const frameMaterial = new THREE.MeshStandardMaterial({ color: "#687a80", metalness: 0.62, roughness: 0.4 });
    const rollerMaterial = new THREE.MeshStandardMaterial({ color: "#a9b5b8", metalness: 0.72, roughness: 0.32 });
    const cyanMaterial = new THREE.MeshStandardMaterial({ color: "#10a9bc", metalness: 0.32, roughness: 0.42 });
    const stationMaterial = new THREE.MeshStandardMaterial({ color: "#e6ebec", metalness: 0.25, roughness: 0.55 });
    for (const [index, z] of [-6, -3, 0, 3, 6].entries()) {
      const conveyor = new THREE.Group();
      conveyor.position.set(18.2, 0, z);
      for (const side of [-0.55, 0.55]) {
        const frame = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.16, 0.1), frameMaterial);
        frame.position.set(0, 0.65, side);
        conveyor.add(frame);
      }
      for (let roller = 0; roller < 16; roller += 1) {
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 1.02, 10), rollerMaterial);
        mesh.rotation.x = Math.PI / 2;
        mesh.position.set(-2.05 + roller * 0.275, 0.76, 0);
        conveyor.add(mesh);
      }
      for (const x of [-1.8, 1.8]) {
        for (const side of [-0.47, 0.47]) {
          const leg = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.65, 0.09), frameMaterial);
          leg.position.set(x, 0.32, side);
          conveyor.add(leg);
        }
      }
      const station = new THREE.Mesh(new RoundedBoxGeometry(1.25, 0.86, 1.35, 3, 0.06), stationMaterial);
      station.position.set(2.65, 0.48, 0);
      station.castShadow = true;
      conveyor.add(station);
      const screen = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 0.65), new THREE.MeshStandardMaterial({ color: "#142d39", emissive: "#0b7080", emissiveIntensity: 0.35 }));
      screen.position.set(2.5, 1.32, -0.6);
      conveyor.add(screen);
      const pickLight = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.035, 0.08), new THREE.MeshBasicMaterial({ color: "#42d9ad" }));
      pickLight.position.set(2.15, 1, 0.58);
      conveyor.add(pickLight);
      const workstationId = `WS-${String(index + 1).padStart(2, "0")}`;
      conveyor.userData = { selectType: "workstation", id: workstationId };
      this.selectable.push(conveyor);
      this.scene.add(conveyor);
      this.addZoneLabel(workstationId, new THREE.Vector3(20.4, 2, z), 1.25, "#0b7280");
    }
    const inbound = new THREE.Group();
    inbound.position.set(17.8, 0, 9.25);
    for (let lane = 0; lane < 4; lane += 1) {
      const laneGroup = new THREE.Group();
      laneGroup.position.z = (lane - 1.5) * 0.65;
      const base = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.18, 0.55), frameMaterial);
      base.position.y = 0.62;
      laneGroup.add(base);
      for (let roller = 0; roller < 14; roller += 1) {
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.48, 8), rollerMaterial);
        mesh.rotation.x = Math.PI / 2;
        mesh.position.set(-2.1 + roller * 0.32, 0.75, 0);
        laneGroup.add(mesh);
      }
      inbound.add(laneGroup);
    }
    this.scene.add(inbound);
    const lift = new THREE.Group();
    lift.position.set(12.8, 0, 9.1);
    for (const x of [-0.75, 0.75]) {
      for (const z of [-0.75, 0.75]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.11, 5.1, 0.11), cyanMaterial);
        post.position.set(x, 2.55, z);
        lift.add(post);
      }
    }
    for (let level = 0; level < 12; level += 1) {
      const tray = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.07, 1.55), level % 2 ? frameMaterial : cyanMaterial);
      tray.position.y = 0.25 + level * 0.4;
      lift.add(tray);
    }
    const helixPoints = [];
    for (let i = 0; i <= 160; i += 1) {
      const angle = i * 0.22;
      helixPoints.push(new THREE.Vector3(Math.cos(angle) * 0.52, 0.25 + i * 0.029, Math.sin(angle) * 0.52));
    }
    const helix = new THREE.Line(new THREE.BufferGeometry().setFromPoints(helixPoints), new THREE.LineBasicMaterial({ color: "#e6f4f6" }));
    lift.add(helix);
    this.scene.add(lift);
  }
  buildRobots() {
    for (const robot of this.simulation.state.robots) {
      const group = new THREE.Group();
      group.position.set(robot.x, 0, robot.z);
      group.rotation.y = robot.yaw;
      group.userData = { selectType: "robot", id: robot.id };
      const cyan = new THREE.MeshStandardMaterial({ color: "#10a9bc", metalness: 0.38, roughness: 0.34 });
      const cyanDark = new THREE.MeshStandardMaterial({ color: "#087889", metalness: 0.42, roughness: 0.36 });
      const metal = new THREE.MeshStandardMaterial({ color: "#c5ced0", metalness: 0.82, roughness: 0.24 });
      const dark = new THREE.MeshStandardMaterial({ color: "#1c272b", roughness: 0.72 });
      const chassis = new THREE.Mesh(new RoundedBoxGeometry(1.5, 0.38, 1.06, 4, 0.09), cyan);
      chassis.position.y = 0.38;
      chassis.castShadow = true;
      group.add(chassis);
      const bumper = new THREE.Mesh(new RoundedBoxGeometry(1.58, 0.12, 1.12, 3, 0.05), dark);
      bumper.position.y = 0.2;
      group.add(bumper);
      for (const x of [-0.48, 0.48]) {
        for (const z of [-0.52, 0.52]) {
          const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.1, 18), dark);
          wheel.rotation.x = Math.PI / 2;
          wheel.position.set(x, 0.2, z);
          group.add(wheel);
        }
      }
      for (const z of [-0.35, 0.35]) {
        const mast = new THREE.Mesh(new THREE.BoxGeometry(0.1, 3.95, 0.1), metal);
        mast.position.set(0.14, 2.48, z);
        mast.castShadow = true;
        group.add(mast);
      }
      const top = new THREE.Mesh(new RoundedBoxGeometry(0.48, 0.18, 0.88, 3, 0.035), cyanDark);
      top.position.set(0.14, 4.46, 0);
      group.add(top);
      const liftGroup = new THREE.Group();
      liftGroup.position.y = 0;
      const carriage = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.18, 0.86), cyanDark);
      carriage.position.set(0.15, 0.75, 0);
      liftGroup.add(carriage);
      const forkGroup = new THREE.Group();
      forkGroup.position.set(0, 0, 0);
      for (const x of [-0.03, 0.31]) {
        const fork = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.07, 0.92), metal);
        fork.position.set(x, 0.83, 0.4);
        forkGroup.add(fork);
      }
      liftGroup.add(forkGroup);
      const tote = this.createTote();
      tote.position.set(0.14, 1.05, 0);
      tote.visible = false;
      liftGroup.add(tote);
      group.add(liftGroup);
      const texture = new THREE.TextureLoader().load("./assets/sbt-logo.png");
      texture.colorSpace = THREE.SRGBColorSpace;
      const logo = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.24), new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide }));
      logo.position.set(-0.25, 0.4, 0.537);
      group.add(logo);
      const statusLight = new THREE.MeshStandardMaterial({ color: "#42d9ad", emissive: "#42d9ad", emissiveIntensity: 1.5 });
      const light = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 8), statusLight);
      light.position.set(-0.54, 0.72, 0);
      group.add(light);
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.9, 1.02, 48),
        new THREE.MeshBasicMaterial({ color: "#00d5ee", transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.025;
      ring.visible = false;
      group.add(ring);
      const idSprite = this.makeTextSprite(robot.id, "#123743", 1.25);
      idSprite.position.set(0, 5.05, 0);
      group.add(idSprite);
      this.robotVisuals.set(robot.id, { group, liftGroup, forkGroup, tote, ring, statusLight });
      this.selectable.push(group);
      this.scene.add(group);
    }
  }
  createTote() {
    const group = new THREE.Group();
    const body = new THREE.Mesh(
      new RoundedBoxGeometry(0.6, 0.3, 0.46, 3, 0.025),
      new THREE.MeshStandardMaterial({ color: "#6f8188", roughness: 0.68 })
    );
    body.castShadow = true;
    group.add(body);
    const rim = new THREE.Mesh(new THREE.BoxGeometry(0.63, 0.055, 0.49), new THREE.MeshStandardMaterial({ color: "#96a4a8", roughness: 0.65 }));
    rim.position.y = 0.14;
    group.add(rim);
    const label = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.09), new THREE.MeshBasicMaterial({ color: "#d7f4f2" }));
    label.position.set(0, 0, 0.234);
    group.add(label);
    return group;
  }
  buildRouteLine() {
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
    this.routeLine = new THREE.Line(geometry, new THREE.LineDashedMaterial({ color: "#00b9cf", dashSize: 0.55, gapSize: 0.28, linewidth: 2, transparent: true, opacity: 0.9 }));
    this.routeLine.computeLineDistances();
    this.routeLine.frustumCulled = false;
    this.scene.add(this.routeLine);
  }
  updateRobots(delta) {
    const selectedOrder = this.simulation.state.orders.find((order) => order.id === this.simulation.state.selectedOrderId);
    const selectedTask = this.simulation.state.tasks.find((task) => task.id === selectedOrder?.taskId);
    for (const robot of this.simulation.state.robots) {
      const visual = this.robotVisuals.get(robot.id);
      if (!visual) continue;
      const blend = 1 - Math.exp(-delta * 12);
      visual.group.position.x = THREE.MathUtils.lerp(visual.group.position.x, robot.x, blend);
      visual.group.position.z = THREE.MathUtils.lerp(visual.group.position.z, robot.z, blend);
      const angleDelta = Math.atan2(Math.sin(robot.yaw - visual.group.rotation.y), Math.cos(robot.yaw - visual.group.rotation.y));
      visual.group.rotation.y += angleDelta * blend;
      visual.liftGroup.position.y = THREE.MathUtils.lerp(visual.liftGroup.position.y, robot.lift, blend);
      const orderIndex = this.simulation.state.orders.findIndex((order) => order.taskId === robot.currentTaskId);
      const direction = orderIndex % 2 === 0 ? 1 : -1;
      visual.forkGroup.position.z = THREE.MathUtils.lerp(visual.forkGroup.position.z, robot.fork * 0.62 * direction, blend);
      visual.tote.visible = Boolean(robot.loadedTote);
      visual.ring.visible = selectedTask?.robotId === robot.id;
      if (visual.ring.visible) {
        const pulse = 1 + Math.sin(this.simulation.state.virtualTime * 6e-3) * 0.08;
        visual.ring.scale.setScalar(pulse);
      }
      const color = robot.status === "\u6545\u969C" ? "#ff5c67" : robot.status === "\u7A7A\u95F2" ? "#42d9ad" : "#24cfe2";
      visual.statusLight.color.set(color);
      visual.statusLight.emissive.set(color);
    }
    this.routeUpdate += delta;
    if (this.routeLine && this.routeUpdate > 0.12) {
      this.routeUpdate = 0;
      const robot = this.simulation.state.robots.find((item) => item.id === selectedTask?.robotId);
      if (robot && selectedTask && selectedTask.phase !== "\u5DF2\u5B8C\u6210") {
        const step = selectedTask.steps[selectedTask.stepIndex];
        const end = step?.target ?? { x: 18, z: robot.homeZ };
        const points = [new THREE.Vector3(robot.x, 0.055, robot.z), new THREE.Vector3(end.x, 0.055, end.z)];
        this.routeLine.geometry.dispose();
        this.routeLine.geometry = new THREE.BufferGeometry().setFromPoints(points);
        this.routeLine.computeLineDistances();
        this.routeLine.visible = true;
      } else {
        this.routeLine.visible = false;
      }
    }
  }
  resize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (!width || !height) return;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }
  addZoneLabel(text, position, scale = 3.5, color = "#163c49") {
    const sprite = this.makeTextSprite(text, color, scale);
    sprite.position.copy(position);
    this.scene.add(sprite);
  }
  makeTextSprite(text, background, scale) {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 128;
    const context = canvas.getContext("2d");
    context.fillStyle = background;
    context.beginPath();
    context.roundRect(8, 8, 496, 112, 20);
    context.fill();
    context.strokeStyle = "rgba(255,255,255,.35)";
    context.lineWidth = 3;
    context.stroke();
    context.fillStyle = "#f5fbfc";
    context.font = '600 48px "PingFang SC", "Microsoft YaHei", sans-serif';
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, 256, 65);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: true }));
    sprite.scale.set(scale * 2.5, scale * 0.625, 1);
    return sprite;
  }
};

// src/simulation/SimulationEngine.ts
import { reactive } from "vue";
var PRODUCTS = [
  ["SKU-EV-1024", "\u65B0\u80FD\u6E90\u9AD8\u538B\u7EBF\u675F"],
  ["SKU-BR-2048", "\u5236\u52A8\u7CFB\u7EDF\u63A7\u5236\u6A21\u5757"],
  ["SKU-TH-4096", "\u70ED\u7BA1\u7406\u8FDE\u63A5\u7EC4\u4EF6"],
  ["SKU-EC-8192", "\u8F66\u8EAB\u7535\u5B50\u63A7\u5236\u5668"],
  ["SKU-SN-1032", "\u667A\u80FD\u9A7E\u9A76\u4F20\u611F\u5668"],
  ["SKU-HV-2064", "\u9AD8\u538B\u914D\u7535\u5355\u5143"],
  ["SKU-CL-3056", "\u5EA7\u8231\u7EBF\u675F\u603B\u6210"],
  ["SKU-BM-7128", "\u7535\u6C60\u7BA1\u7406\u4ECE\u63A7\u5355\u5143"]
];
var CUSTOMERS = ["\u5317\u4EAC\u65B0\u80FD\u6E90\u4E00\u5382", "\u534E\u5317\u96F6\u90E8\u4EF6\u4E2D\u5FC3", "\u4EA6\u5E84\u603B\u88C5\u57FA\u5730", "\u987A\u4E49\u7269\u6D41\u4E2D\u5FC3", "\u5929\u6D25\u5236\u9020\u5DE5\u5382", "\u5317\u4EAC\u552E\u540E\u5907\u4EF6\u5E93"];
function mulberry32(seed) {
  return () => {
    let value = seed += 1831565813;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
}
var SimulationEngine = class {
  constructor() {
    __publicField(this, "state", reactive({
      running: true,
      speed: 1,
      virtualTime: Date.now(),
      elapsed: 0,
      autoDispatch: true,
      autoCamera: true,
      selectedOrderId: "",
      orders: [],
      tasks: [],
      robots: [],
      commands: [],
      events: [],
      workstations: [],
      metrics: {
        completedOrders: 0,
        totalOrders: 0,
        commandsSent: 0,
        commandSuccessRate: 100,
        averageAck: 0,
        activeRobots: 0,
        onlineRobots: 5,
        toteCount: 1280
      }
    }));
    __publicField(this, "random", mulberry32(42));
    __publicField(this, "timer");
    __publicField(this, "sequence", 1e3);
    __publicField(this, "eventSequence", 0);
    __publicField(this, "taskSequence", 0);
    __publicField(this, "forceNextTimeout", false);
    this.reset();
  }
  start() {
    if (this.timer) return;
    this.timer = setInterval(() => this.tick(0.05), 50);
  }
  stop() {
    if (this.timer) clearInterval(this.timer);
    this.timer = void 0;
  }
  toggle() {
    this.state.running = !this.state.running;
    this.addEvent("info", "WCS", this.state.running ? "\u4EFF\u771F\u8C03\u5EA6\u7EE7\u7EED\u8FD0\u884C" : "\u4EFF\u771F\u8C03\u5EA6\u5DF2\u6682\u505C\uFF0C\u73B0\u573A\u72B6\u6001\u4FDD\u6301");
  }
  setSpeed(speed) {
    this.state.speed = speed;
    this.addEvent("info", "WCS", `\u4EFF\u771F\u500D\u901F\u5207\u6362\u4E3A ${speed}\xD7`);
  }
  selectOrder(orderId) {
    this.state.selectedOrderId = orderId;
    const order = this.state.orders.find((item) => item.id === orderId);
    const command = this.state.commands.find((item) => item.orderId === orderId && !item.completedAt);
    this.state.selectedCommandId = command?.id;
    if (order) this.addEvent("info", "OMS", `\u6F14\u793A\u89C6\u89D2\u5DF2\u5B9A\u4F4D\u8BA2\u5355 ${order.id}`);
  }
  selectCommand(commandId) {
    this.state.selectedCommandId = commandId;
    const command = this.state.commands.find((item) => item.id === commandId);
    if (command) this.state.selectedOrderId = command.orderId;
  }
  prioritizeOrder(orderId) {
    const order = this.state.orders.find((item) => item.id === orderId);
    if (!order || order.status !== "\u5F85\u6392\u4EA7") return;
    order.priority = "\u7D27\u6025";
    order.releaseAfter = 0;
    this.addEvent("warning", "APS", `${order.id} \u5DF2\u8C03\u6574\u4E3A\u7D27\u6025\u63D2\u5355\uFF0C\u91CD\u65B0\u8BA1\u7B97\u6392\u4EA7\u4F18\u5148\u7EA7`);
  }
  injectTimeout() {
    this.forceNextTimeout = true;
    this.addEvent("warning", "WCS", "\u5F02\u5E38\u6F14\u7EC3\u5DF2\u542F\u7528\uFF1A\u4E0B\u4E00\u6761\u8BBE\u5907\u6307\u4EE4\u9996\u6B21\u5E94\u7B54\u5C06\u8D85\u65F6");
  }
  reset() {
    this.random = mulberry32(42);
    this.sequence = 1e3;
    this.eventSequence = 0;
    this.taskSequence = 0;
    this.forceNextTimeout = false;
    this.state.running = true;
    this.state.speed = 1;
    this.state.elapsed = 0;
    this.state.virtualTime = Date.now();
    this.state.selectedOrderId = "SO-20261125-001";
    this.state.selectedCommandId = void 0;
    this.state.tasks = [];
    this.state.commands = [];
    this.state.events = [];
    this.state.robots = [-6, -3, 0, 3, 6].map((z, index) => ({
      id: `CTU-${String(index + 1).padStart(2, "0")}`,
      name: `SBT CTU-${String(index + 1).padStart(2, "0")}`,
      x: 16.5,
      z,
      yaw: Math.PI,
      lift: 0,
      fork: 0,
      status: "\u7A7A\u95F2",
      battery: 96 - index * 4,
      speed: 2.25,
      homeX: 16.5,
      homeZ: z
    }));
    this.state.workstations = [-6, -3, 0, 3, 6].map((z, index) => ({
      id: `WS-${String(index + 1).padStart(2, "0")}`,
      name: `\u51FA\u5E93\u62E3\u9009 ${index + 1}`,
      status: "\u7A7A\u95F2"
    }));
    this.state.orders = PRODUCTS.map(([sku, product], index) => ({
      id: `SO-20261125-${String(index + 1).padStart(3, "0")}`,
      customer: CUSTOMERS[index % CUSTOMERS.length],
      sku,
      product,
      quantity: 2 + index * 3 % 9,
      priority: index === 0 || index === 5 ? "\u7D27\u6025" : "\u5E38\u89C4",
      status: "\u5F85\u6392\u4EA7",
      createdAt: Date.now() - (PRODUCTS.length - index) * 42e3,
      progress: 0,
      releaseAfter: index * 2.2
    }));
    this.addEvent("success", "WCS", "WCS \u4EFF\u771F\u670D\u52A1\u5728\u7EBF\uFF0C5 \u53F0 CTU \u5DF2\u5B8C\u6210\u5FC3\u8DF3\u6CE8\u518C");
    this.addEvent("info", "OMS", "OMS \u5DF2\u540C\u6B65 8 \u7B14\u51FA\u5E93\u8BA2\u5355\uFF0C\u7B49\u5F85 APS \u6392\u4EA7");
    this.addEvent("info", "APS", "\u6392\u4EA7\u7B56\u7565\uFF1A\u7D27\u6025\u4F18\u5148 \u2192 \u5DF7\u9053\u5747\u8861 \u2192 \u6700\u77ED\u7A7A\u9A76\u8DEF\u5F84");
    this.updateMetrics();
  }
  tick(rawDelta) {
    if (!this.state.running) return;
    const delta = Math.min(rawDelta * this.state.speed, 0.4);
    this.state.elapsed += delta;
    this.state.virtualTime += delta * 1e3;
    if (this.state.autoDispatch) this.scheduleOrders();
    for (const task of this.state.tasks) {
      if (task.phase === "\u5DF2\u5B8C\u6210" || task.phase === "\u5F02\u5E38") continue;
      if (!task.activeCommandId) this.dispatchNextStep(task);
      const command = this.state.commands.find((item) => item.id === task.activeCommandId);
      if (command) this.updateCommand(command, delta);
    }
    this.updateMetrics();
  }
  scheduleOrders() {
    const pending = [...this.state.orders].filter((order) => order.status === "\u5F85\u6392\u4EA7" && order.releaseAfter <= this.state.elapsed).sort((a, b) => Number(b.priority === "\u7D27\u6025") - Number(a.priority === "\u7D27\u6025") || a.createdAt - b.createdAt);
    for (const order of pending) {
      const robot = this.state.robots.find((item) => !item.currentTaskId && item.status !== "\u6545\u969C");
      if (!robot) break;
      const orderIndex = this.state.orders.indexOf(order);
      const task = this.createTask(order, robot, orderIndex);
      this.state.tasks.push(task);
      order.taskId = task.id;
      order.status = "\u6267\u884C\u4E2D";
      robot.currentTaskId = task.id;
      robot.status = "\u7B49\u5F85";
      this.addEvent("info", "APS", `${order.id} \u6392\u4EA7\u6210\u529F\uFF1A${robot.id} / ${task.locationCode} / ${task.workstationId}`);
    }
  }
  createTask(order, robot, orderIndex) {
    this.taskSequence += 1;
    const taskId = `TASK-${String(this.taskSequence).padStart(5, "0")}`;
    const bay = 3 + (orderIndex * 4 + this.taskSequence) % 13;
    const level = 2 + (orderIndex * 3 + this.taskSequence) % 7;
    const targetX = Math.round((-18.9 + bay * 2.1) * 1e3) / 1e3;
    const rackSide = orderIndex % 2 === 0 ? -0.75 : 0.75;
    const rackRow = Math.round((robot.homeZ + 6) / 3);
    const locationCode = `${String.fromCharCode(65 + rackRow)}-${String(bay + 1).padStart(2, "0")}-${String(level + 1).padStart(2, "0")}`;
    const workstation = this.state.workstations[Math.round((robot.homeZ + 6) / 3)];
    const lift = Math.round(level * 0.43 * 1e3) / 1e3;
    const steps = [
      { type: "MOVE", title: "\u524D\u5F80\u76EE\u6807\u5E93\u4F4D", phase: "\u524D\u5F80\u5E93\u4F4D", target: { x: targetX, z: robot.homeZ }, parameters: { x: targetX, z: robot.homeZ, speed: robot.speed, navigation: "QR+SLAM" } },
      { type: "LIFT", title: "\u95E8\u67B6\u5BF9\u9F50\u76EE\u6807\u5C42", phase: "\u53D6\u7BB1\u4F5C\u4E1A", lift, parameters: { height: lift, level: level + 1, rackSide } },
      { type: "FORK", title: "\u4F38\u7F29\u53C9\u8FDB\u5165\u8D27\u4F4D", phase: "\u53D6\u7BB1\u4F5C\u4E1A", fork: 1, parameters: { direction: rackSide < 0 ? "LEFT" : "RIGHT", distance: 0.72 } },
      { type: "LOAD", title: "\u6599\u7BB1\u53D6\u79BB\u8D27\u67B6", phase: "\u53D6\u7BB1\u4F5C\u4E1A", duration: 1.15, parameters: { toteId: `TOTE-${String(2600 + orderIndex)}`, locationCode } },
      { type: "FORK", title: "\u4F38\u7F29\u53C9\u5B89\u5168\u6536\u56DE", phase: "\u53D6\u7BB1\u4F5C\u4E1A", fork: 0, parameters: { direction: "CENTER", distance: 0 } },
      { type: "LIFT", title: "\u95E8\u67B6\u964D\u81F3\u884C\u9A76\u4F4D", phase: "\u53D6\u7BB1\u4F5C\u4E1A", lift: 0, parameters: { height: 0, interlock: "FORK_CENTERED" } },
      { type: "MOVE", title: "\u524D\u5F80\u51FA\u5E93\u63A5\u9A73\u4F4D", phase: "\u524D\u5F80\u5DE5\u4F5C\u7AD9", target: { x: 15.8, z: robot.homeZ }, parameters: { x: 15.8, z: robot.homeZ, speed: 1.65, load: "LOADED" } },
      { type: "UNLOAD", title: "\u63A5\u9A73\u4F4D\u6599\u7BB1\u4EA4\u63A5", phase: "\u51FA\u5E93\u62E3\u9009", duration: 1.3, parameters: { workstationId: workstation.id, conveyor: `CV-${workstation.id.slice(-2)}` } },
      { type: "PICK", title: "\u62E3\u9009\u590D\u6838\u4E0E\u51FA\u5E93\u786E\u8BA4", phase: "\u51FA\u5E93\u62E3\u9009", duration: 3.2, parameters: { workstationId: workstation.id, quantity: order.quantity, verify: "BARCODE+WEIGHT" } },
      { type: "COMPLETE", title: "\u56DE\u4F20\u4EFB\u52A1\u5B8C\u6210", phase: "\u51FA\u5E93\u62E3\u9009", duration: 0.35, parameters: { inventory: "DEDUCT", orderStatus: "SHIPPED" } }
    ];
    return {
      id: taskId,
      orderId: order.id,
      robotId: robot.id,
      toteId: `TOTE-${String(2600 + orderIndex)}`,
      locationCode,
      workstationId: workstation.id,
      phase: "\u5F85\u8C03\u5EA6",
      steps,
      stepIndex: 0,
      createdAt: this.state.virtualTime
    };
  }
  dispatchNextStep(task) {
    const step = task.steps[task.stepIndex];
    if (!step) return;
    const robot = this.requireRobot(task.robotId);
    const order = this.requireOrder(task.orderId);
    const sequence = ++this.sequence;
    const id = `CMD-${sequence}`;
    task.phase = step.phase;
    task.activeCommandId = id;
    if (step.type === "PICK") order.status = "\u62E3\u9009\u4E2D";
    if (step.type === "UNLOAD") {
      const workstation = this.state.workstations.find((item) => item.id === task.workstationId);
      if (workstation) {
        workstation.status = "\u5F85\u62E3\u9009";
        workstation.currentOrderId = order.id;
      }
    }
    if (step.type === "PICK") {
      const workstation = this.state.workstations.find((item) => item.id === task.workstationId);
      if (workstation) workstation.status = "\u62E3\u9009\u4E2D";
    }
    const packet = {
      messageId: `MSG-${this.state.virtualTime.toFixed(0)}-${sequence}`,
      protocol: "SBT-WCS/1.0",
      taskNo: task.id,
      deviceId: robot.id,
      command: step.type,
      sequence,
      timestamp: new Date(this.state.virtualTime).toISOString(),
      parameters: step.parameters
    };
    const command = {
      id,
      messageId: packet.messageId,
      taskId: task.id,
      orderId: order.id,
      robotId: robot.id,
      sequence,
      type: step.type,
      title: step.title,
      parameters: step.parameters,
      status: "\u5DF2\u4E0B\u53D1",
      retries: 0,
      maxRetries: 3,
      createdAt: this.state.virtualTime,
      sentAt: this.state.virtualTime,
      ackDue: 0.16 + this.random() * 0.28,
      startDelay: 0.1,
      elapsed: 0,
      forceTimeout: this.forceNextTimeout,
      packet: JSON.stringify(packet, null, 2)
    };
    this.forceNextTimeout = false;
    this.state.commands.unshift(command);
    this.state.selectedCommandId = id;
    this.addEvent("info", "WCS", `${id} \u4E0B\u53D1 ${robot.id} \xB7 ${step.title}`);
  }
  updateCommand(command, delta) {
    command.elapsed += delta;
    const task = this.state.tasks.find((item) => item.id === command.taskId);
    if (!task) return;
    const robot = this.requireRobot(command.robotId);
    const step = task.steps[task.stepIndex];
    if (command.status === "\u5DF2\u4E0B\u53D1" || command.status === "\u91CD\u8BD5\u4E2D") {
      if (command.forceTimeout && command.retries === 0 && command.elapsed >= 1.25) {
        command.status = "\u5E94\u7B54\u8D85\u65F6";
        command.elapsed = 0;
        robot.status = "\u7B49\u5F85";
        this.addEvent("error", "CTU", `${command.id} ACK \u8D85\u65F6\uFF081250ms\uFF09\uFF0CWCS \u542F\u52A8\u5B89\u5168\u91CD\u8BD5`);
        return;
      }
      if (!command.forceTimeout && command.elapsed >= command.ackDue) {
        command.status = "\u5DF2\u5E94\u7B54";
        command.ackAt = this.state.virtualTime;
        command.latency = Math.round(command.ackDue * 1e3);
        command.elapsed = 0;
        this.addEvent("success", "CTU", `${command.robotId} ACK ${command.id} \xB7 ${command.latency}ms \xB7 \u53C2\u6570\u6821\u9A8C\u901A\u8FC7`);
      }
      return;
    }
    if (command.status === "\u5E94\u7B54\u8D85\u65F6") {
      if (command.elapsed >= 0.45) {
        command.retries += 1;
        command.status = "\u91CD\u8BD5\u4E2D";
        command.sentAt = this.state.virtualTime;
        command.forceTimeout = false;
        command.ackDue = 0.18 + this.random() * 0.18;
        command.elapsed = 0;
        this.addEvent("warning", "WCS", `${command.id} \u7B2C ${command.retries} \u6B21\u91CD\u53D1\uFF0C\u4FDD\u6301\u539F\u4EFB\u52A1\u5E8F\u53F7\u4E0E\u5E42\u7B49\u952E`);
      }
      return;
    }
    if (command.status === "\u5DF2\u5E94\u7B54") {
      if (command.elapsed >= command.startDelay) {
        command.status = "\u6267\u884C\u4E2D";
        command.elapsed = 0;
        robot.status = command.type === "MOVE" ? "\u884C\u9A76\u4E2D" : command.type === "PICK" ? "\u7B49\u5F85" : "\u4F5C\u4E1A\u4E2D";
        this.addEvent("info", "CTU", `${command.robotId} \u5F00\u59CB\u6267\u884C ${command.title}`);
      }
      return;
    }
    if (command.status !== "\u6267\u884C\u4E2D") return;
    let finished = false;
    switch (command.type) {
      case "MOVE": {
        const target = step.target;
        const dx = target.x - robot.x;
        const dz = target.z - robot.z;
        const distance = Math.hypot(dx, dz);
        const move = Math.min(distance, robot.speed * delta);
        if (distance > 1e-3) {
          robot.x += dx / distance * move;
          robot.z += dz / distance * move;
          robot.yaw = -Math.atan2(dz, dx);
          robot.battery = Math.max(20, robot.battery - delta * 0.012);
        }
        finished = distance <= Math.max(0.035, move);
        break;
      }
      case "LIFT": {
        const target = step.lift ?? 0;
        robot.lift = this.approach(robot.lift, target, delta * 1.5);
        finished = Math.abs(robot.lift - target) < 5e-3;
        break;
      }
      case "FORK": {
        const target = step.fork ?? 0;
        robot.fork = this.approach(robot.fork, target, delta * 1.8);
        finished = Math.abs(robot.fork - target) < 5e-3;
        break;
      }
      case "LOAD":
      case "UNLOAD":
      case "PICK":
      case "COMPLETE":
        finished = command.elapsed >= (step.duration ?? 1);
        break;
    }
    if (finished) this.completeCommand(command, task);
  }
  completeCommand(command, task) {
    const robot = this.requireRobot(task.robotId);
    const order = this.requireOrder(task.orderId);
    command.status = "\u5DF2\u5B8C\u6210";
    command.completedAt = this.state.virtualTime;
    robot.status = "\u7B49\u5F85";
    if (command.type === "LOAD") robot.loadedTote = task.toteId;
    if (command.type === "UNLOAD") robot.loadedTote = void 0;
    this.addEvent("success", command.type === "COMPLETE" ? "WMS" : "CTU", `${command.id} \u6267\u884C\u5B8C\u6210 \xB7 ${command.title}`);
    task.stepIndex += 1;
    task.activeCommandId = void 0;
    order.progress = Math.min(100, Math.round(task.stepIndex / task.steps.length * 100));
    if (command.type === "COMPLETE" || task.stepIndex >= task.steps.length) {
      task.phase = "\u5DF2\u5B8C\u6210";
      task.completedAt = this.state.virtualTime;
      order.status = "\u5DF2\u5B8C\u6210";
      order.progress = 100;
      robot.currentTaskId = void 0;
      robot.status = "\u7A7A\u95F2";
      robot.lift = 0;
      robot.fork = 0;
      const workstation = this.state.workstations.find((item) => item.id === task.workstationId);
      if (workstation) {
        workstation.status = "\u7A7A\u95F2";
        workstation.currentOrderId = void 0;
      }
      this.addEvent("success", "OMS", `${order.id} \u5DF2\u51FA\u5E93\uFF0CWMS \u5E93\u5B58\u6263\u51CF ${order.quantity} \u4EF6\uFF0C\u8BA2\u5355\u95ED\u73AF\u5B8C\u6210`);
    }
  }
  updateMetrics() {
    const acked = this.state.commands.filter((command) => command.latency !== void 0);
    const failed = this.state.commands.filter((command) => command.status === "\u5931\u8D25").length;
    this.state.metrics = {
      completedOrders: this.state.orders.filter((order) => order.status === "\u5DF2\u5B8C\u6210").length,
      totalOrders: this.state.orders.length,
      commandsSent: this.state.commands.length + this.state.commands.reduce((sum, command) => sum + command.retries, 0),
      commandSuccessRate: this.state.commands.length ? Math.round((1 - failed / this.state.commands.length) * 1e3) / 10 : 100,
      averageAck: acked.length ? Math.round(acked.reduce((sum, command) => sum + (command.latency ?? 0), 0) / acked.length) : 0,
      activeRobots: this.state.robots.filter((robot) => robot.currentTaskId).length,
      onlineRobots: this.state.robots.length,
      toteCount: 1280 - this.state.orders.filter((order) => order.status === "\u5DF2\u5B8C\u6210").length
    };
  }
  addEvent(level, source, message) {
    this.state.events.unshift({ id: ++this.eventSequence, time: this.state.virtualTime, level, source, message });
    if (this.state.events.length > 100) this.state.events.length = 100;
  }
  requireRobot(robotId) {
    return this.state.robots.find((robot) => robot.id === robotId);
  }
  requireOrder(orderId) {
    return this.state.orders.find((order) => order.id === orderId);
  }
  approach(current, target, amount) {
    return Math.abs(target - current) <= amount ? target : current + Math.sign(target - current) * amount;
  }
};
var simulation = new SimulationEngine();
function commandStatusClass(status) {
  if (status === "\u5DF2\u5B8C\u6210" || status === "\u5DF2\u5E94\u7B54") return "success";
  if (status === "\u5E94\u7B54\u8D85\u65F6" || status === "\u5931\u8D25") return "danger";
  if (status === "\u91CD\u8BD5\u4E2D") return "warning";
  return "processing";
}

// src/runtime.ts
var state = simulation.state;
var formatTime = (timestamp) => timestamp ? new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(timestamp) : "--:--:--";
var OrderPanel = defineComponent({
  components: { CheckCircle2: CircleCheck, ChevronRight, Clock3, Package, Sparkles },
  setup() {
    const filter = ref("\u5168\u90E8");
    const orders = computed(() => state.orders.filter((order) => {
      if (filter.value === "\u6267\u884C\u4E2D") return order.status !== "\u5DF2\u5B8C\u6210" && order.status !== "\u5F85\u6392\u4EA7";
      if (filter.value === "\u5DF2\u5B8C\u6210") return order.status === "\u5DF2\u5B8C\u6210";
      return true;
    }));
    const statusClass = (status) => status === "\u5DF2\u5B8C\u6210" ? "success" : status === "\u5F85\u6392\u4EA7" ? "pending" : status === "\u5F02\u5E38" ? "danger" : "processing";
    return { state, filter, orders, simulation, statusClass };
  },
  template: `
    <aside class="panel order-panel">
      <div class="panel-heading"><div><span class="eyebrow">OMS / APS</span><h2>\u8BA2\u5355\u4EFB\u52A1</h2></div><span class="count-badge">{{ state.metrics.totalOrders }}</span></div>
      <div class="compact-tabs"><button v-for="item in ['\u5168\u90E8','\u6267\u884C\u4E2D','\u5DF2\u5B8C\u6210']" :key="item" :class="{active:filter===item}" @click="filter=item">{{ item }}</button></div>
      <div class="order-list scrollable">
        <button v-for="order in orders" :key="order.id" class="order-card" :class="{selected:state.selectedOrderId===order.id}" @click="simulation.selectOrder(order.id)">
          <div class="order-card-head"><span class="order-id">{{ order.id }}</span><span class="status-pill" :class="statusClass(order.status)">{{ order.status }}</span></div>
          <div class="product-line"><Package :size="15"/><strong>{{ order.product }}</strong><ChevronRight :size="14" class="chevron"/></div>
          <div class="order-meta"><span>{{ order.sku }}</span><span>{{ order.quantity }} \u4EF6</span><span v-if="order.priority==='\u7D27\u6025'" class="urgent">\u7D27\u6025</span></div>
          <div class="progress-track"><i :style="{width:order.progress+'%'}"/></div>
          <div class="order-card-foot"><span><Clock3 :size="12"/>{{ order.taskId || '\u7B49\u5F85 APS \u5206\u914D\u8D44\u6E90' }}</span><b>{{ order.progress }}%</b></div>
        </button>
        <div v-if="!orders.length" class="empty-state"><CheckCircle2 :size="28"/><span>\u5F53\u524D\u5206\u7C7B\u6682\u65E0\u8BA2\u5355</span></div>
      </div>
      <div class="strategy-note"><Sparkles :size="16"/><div><strong>APS \u667A\u80FD\u6392\u4EA7\u4E2D</strong><span>\u7D27\u6025\u4F18\u5148 \xB7 \u5DF7\u9053\u5747\u8861 \xB7 \u6700\u77ED\u8DEF\u5F84</span></div></div>
    </aside>`
});
var TaskPanel = defineComponent({
  components: { BatteryCharging, Box, Check, Circle, Cpu, Link2, LoaderCircle, MapPin, Radio, Zap },
  setup() {
    const tab = ref("\u4EFB\u52A1\u94FE\u8DEF");
    const order = computed(() => state.orders.find((item) => item.id === state.selectedOrderId));
    const task = computed(() => state.tasks.find((item) => item.id === order.value?.taskId));
    const robot = computed(() => state.robots.find((item) => item.id === task.value?.robotId));
    const activeCommand = computed(() => state.commands.find((item) => item.id === task.value?.activeCommandId));
    const steps = computed(() => {
      const phase = task.value?.phase;
      const completed = order.value?.status === "\u5DF2\u5B8C\u6210";
      const picking = phase === "\u51FA\u5E93\u62E3\u9009" || order.value?.status === "\u62E3\u9009\u4E2D";
      const retrieving = phase === "\u53D6\u7BB1\u4F5C\u4E1A";
      const moving = phase === "\u524D\u5F80\u5E93\u4F4D" || phase === "\u524D\u5F80\u5DE5\u4F5C\u7AD9";
      return [
        { title: "OMS \u8BA2\u5355\u63A5\u6536", detail: order.value ? `${order.value.id} \xB7 ${order.value.quantity} \u4EF6` : "\u7B49\u5F85\u8BA2\u5355", done: Boolean(order.value), active: !task.value },
        { title: "APS \u6392\u4EA7\u5206\u914D", detail: task.value ? `${task.value.robotId} \xB7 ${task.value.locationCode}` : "\u6B63\u5728\u8BA1\u7B97\u8D44\u6E90\u4E0E\u8DEF\u5F84", done: Boolean(task.value), active: phase === "\u5F85\u8C03\u5EA6" },
        { title: "CTU \u53D6\u7BB1\u6267\u884C", detail: retrieving ? activeCommand.value?.title : moving ? "\u8DEF\u5F84\u89C4\u5212\u5B8C\u6210\uFF0C\u8BBE\u5907\u6267\u884C\u4E2D" : task.value ? "\u53D6\u7BB1\u52A8\u4F5C\u5DF2\u5B8C\u6210" : "\u7B49\u5F85\u8BBE\u5907\u6307\u4EE4", done: Boolean(task.value && (picking || completed)), active: retrieving || moving },
        { title: "\u63A5\u9A73\u4E0E\u62E3\u9009\u590D\u6838", detail: picking ? `${task.value?.workstationId} \xB7 \u6761\u7801\u4E0E\u91CD\u91CF\u590D\u6838` : "\u7B49\u5F85\u6599\u7BB1\u5230\u7AD9", done: completed, active: picking && !completed },
        { title: "WMS \u51FA\u5E93\u5B8C\u6210", detail: completed ? "\u5E93\u5B58\u6263\u51CF\u6210\u529F\uFF0C\u8BA2\u5355\u5DF2\u95ED\u73AF" : "\u7B49\u5F85\u51FA\u5E93\u786E\u8BA4\u56DE\u4F20", done: completed, active: false }
      ];
    });
    return { state, tab, order, task, robot, activeCommand, steps, simulation };
  },
  template: `
    <aside class="panel task-panel">
      <div class="compact-tabs task-tabs"><button :class="{active:tab==='\u4EFB\u52A1\u94FE\u8DEF'}" @click="tab='\u4EFB\u52A1\u94FE\u8DEF'">\u4EFB\u52A1\u94FE\u8DEF</button><button :class="{active:tab==='\u8BBE\u5907\u72B6\u6001'}" @click="tab='\u8BBE\u5907\u72B6\u6001'">\u8BBE\u5907\u72B6\u6001</button></div>
      <div v-if="tab==='\u4EFB\u52A1\u94FE\u8DEF'" class="task-content scrollable">
        <template v-if="order">
          <div class="selected-order-summary"><div class="summary-top"><span>{{ order.id }}</span><b :class="{urgent:order.priority==='\u7D27\u6025'}">{{ order.priority }}</b></div><h3>{{ order.product }}</h3><p>{{ order.customer }} \xB7 {{ order.sku }}</p></div>
          <div class="business-steps"><div v-for="(step,index) in steps" :key="step.title" class="business-step" :class="{done:step.done,active:step.active}">
            <div class="step-rail"><span class="step-icon"><Check v-if="step.done&&!step.active" :size="13"/><LoaderCircle v-else-if="step.active" :size="14" class="spin"/><Circle v-else :size="11"/></span><i v-if="index<steps.length-1"/></div>
            <div class="step-copy"><strong>{{ step.title }}</strong><span>{{ step.detail }}</span></div>
          </div></div>
          <div v-if="activeCommand" class="active-command-card"><div class="active-command-title"><Radio :size="14"/><span>\u5F53\u524D\u8BBE\u5907\u6307\u4EE4</span><b>{{ activeCommand.status }}</b></div><strong>{{ activeCommand.id }} \xB7 {{ activeCommand.title }}</strong><div class="command-params"><span v-for="(value,key) in activeCommand.parameters" :key="key">{{ key }}: {{ value }}</span></div></div>
          <button v-if="order.status==='\u5F85\u6392\u4EA7'" class="primary-button full-width" @click="simulation.prioritizeOrder(order.id)"><Zap :size="15"/>\u7D27\u6025\u63D2\u5355\u5E76\u6392\u4EA7</button>
        </template>
      </div>
      <div v-else class="device-content scrollable">
        <div class="device-summary-card" v-if="robot"><div class="device-icon"><Cpu :size="23"/></div><div><span>\u5F53\u524D\u8054\u52A8\u8BBE\u5907</span><strong>{{ robot.name }}</strong><small><MapPin :size="11"/>X {{ robot.x.toFixed(1) }}m \xB7 Z {{ robot.z.toFixed(1) }}m</small></div><span class="status-pill processing">{{ robot.status }}</span></div>
        <div v-for="item in state.robots" :key="item.id" class="robot-row" :class="{highlighted:item.id===robot?.id}"><div class="robot-row-top"><strong>{{ item.id }}</strong><span>{{ item.status }}</span><b><BatteryCharging :size="12"/>{{ item.battery.toFixed(0) }}%</b></div><div class="battery-track"><i :style="{width:item.battery+'%'}"/></div><small>{{ item.currentTaskId || '\u5F85\u547D\u533A' }}<span>{{ item.loadedTote || '\u7A7A\u8F7D' }}</span></small></div>
        <div class="workstation-grid"><div v-for="station in state.workstations" :key="station.id"><Box :size="13"/><strong>{{ station.id }}</strong><span>{{ station.status }}</span></div></div>
      </div>
      <div class="integration-footer"><Link2 :size="13"/><span>\u63A5\u53E3\u5DF2\u9884\u7559</span><b>OMS</b><b>APS</b><b>WCS</b><b>WMS</b></div>
    </aside>`
});
var PlaybackBar = defineComponent({
  components: { AlertTriangle: TriangleAlert, Check, Pause, Play, RadioTower, RotateCcw },
  setup() {
    const order = computed(() => state.orders.find((item) => item.id === state.selectedOrderId));
    const activeStage = computed(() => {
      if (!order.value) return 0;
      if (order.value.status === "\u5DF2\u5B8C\u6210") return 5;
      if (order.value.status === "\u62E3\u9009\u4E2D") return 3;
      const task = state.tasks.find((item) => item.id === order.value?.taskId);
      if (!task) return 0;
      if (task.phase === "\u5F85\u8C03\u5EA6") return 1;
      return task.phase === "\u524D\u5F80\u5E93\u4F4D" || task.phase === "\u53D6\u7BB1\u4F5C\u4E1A" ? 2 : 3;
    });
    return { state, order, activeStage, simulation, stages: ["\u8BA2\u5355", "\u6392\u4EA7", "\u53D6\u7BB1", "\u62E3\u9009", "\u51FA\u5E93"] };
  },
  template: `
    <div class="playback-bar panel">
      <div class="playback-actions"><button class="play-button" @click="simulation.toggle()"><Pause v-if="state.running" :size="19"/><Play v-else :size="19"/></button><button class="icon-button" @click="simulation.reset()"><RotateCcw :size="16"/></button></div>
      <div class="playback-order"><span>\u5F53\u524D\u6F14\u793A\u8BA2\u5355</span><strong>{{ order?.id || '\u7B49\u5F85\u8BA2\u5355' }}</strong></div>
      <div class="order-timeline"><div class="timeline-track"><i :style="{width:(order?.progress||0)+'%'}"/></div><div v-for="(stage,index) in stages" :key="stage" class="timeline-stage" :class="{done:index<activeStage,active:index===activeStage}"><span><Check v-if="index<activeStage" :size="10"/>{{ index<activeStage?'':index+1 }}</span><b>{{ stage }}</b></div></div>
      <div class="speed-control"><button v-for="speed in [1,2,4]" :key="speed" :class="{active:state.speed===speed}" @click="simulation.setSpeed(speed)">{{ speed }}\xD7</button></div>
      <button class="fault-button" @click="simulation.injectTimeout()"><AlertTriangle :size="14"/>\u5F02\u5E38\u6F14\u7EC3</button>
    </div>`
});
var CommandConsole = defineComponent({
  components: { Braces, CheckCircle2: CircleCheck, ChevronRight, CircleAlert, Radio, ScrollText, TerminalSquare: SquareTerminal },
  setup() {
    const tab = ref("\u8BBE\u5907\u6307\u4EE4");
    const selectedCommand = computed(() => state.commands.find((item) => item.id === state.selectedCommandId) || state.commands[0]);
    return { state, tab, selectedCommand, simulation, formatTime, commandStatusClass };
  },
  template: `
    <section class="panel command-console">
      <div class="console-header"><div class="console-title"><TerminalSquare :size="16"/><strong>\u8C03\u5EA6\u6307\u4EE4\u4E2D\u5FC3</strong><span>COMMAND DISPATCH</span></div><div class="compact-tabs"><button :class="{active:tab==='\u8BBE\u5907\u6307\u4EE4'}" @click="tab='\u8BBE\u5907\u6307\u4EE4'"><Radio :size="12"/>\u8BBE\u5907\u6307\u4EE4</button><button :class="{active:tab==='\u7CFB\u7EDF\u4E8B\u4EF6'}" @click="tab='\u7CFB\u7EDF\u4E8B\u4EF6'"><ScrollText :size="12"/>\u7CFB\u7EDF\u4E8B\u4EF6</button><button :class="{active:tab==='\u63A5\u53E3\u62A5\u6587'}" @click="tab='\u63A5\u53E3\u62A5\u6587'"><Braces :size="12"/>\u63A5\u53E3\u62A5\u6587</button></div><div class="console-legend"><span class="live-dot"/>\u6307\u4EE4\u901A\u9053\u5728\u7EBF <b>SIM / \u65E0\u771F\u5B9E\u8BBE\u5907\u8FDE\u63A5</b></div></div>
      <div v-if="tab==='\u8BBE\u5907\u6307\u4EE4'" class="command-layout"><div class="command-table-wrap scrollable"><table class="command-table"><thead><tr><th>\u65F6\u95F4</th><th>\u6307\u4EE4\u7F16\u53F7 / \u4EFB\u52A1</th><th>\u8BBE\u5907</th><th>\u6267\u884C\u52A8\u4F5C</th><th>ACK</th><th>\u72B6\u6001</th><th>\u91CD\u8BD5</th><th/></tr></thead><tbody>
        <tr v-for="command in state.commands" :key="command.id" :class="{selected:selectedCommand?.id===command.id}" @click="simulation.selectCommand(command.id)"><td>{{ formatTime(command.sentAt) }}</td><td><strong>{{ command.id }}</strong><span>{{ command.taskId }}</span></td><td><b class="device-tag">{{ command.robotId }}</b></td><td>{{ command.title }}<span class="command-type">{{ command.type }}</span></td><td>{{ command.latency?command.latency+'ms':'\u2014' }}</td><td><span class="status-pill" :class="commandStatusClass(command.status)">{{ command.status }}</span></td><td><span :class="{'retry-count':command.retries}">{{ command.retries }} / {{ command.maxRetries }}</span></td><td><ChevronRight :size="13"/></td></tr>
      </tbody></table><div v-if="!state.commands.length" class="console-empty">\u7B49\u5F85 APS \u6392\u4EA7\u540E\u81EA\u52A8\u4E0B\u53D1\u8BBE\u5907\u6307\u4EE4</div></div><div v-if="selectedCommand" class="packet-preview"><div><span>\u6700\u65B0\u4E0B\u884C\u62A5\u6587</span><b>{{ selectedCommand.messageId }}</b></div><pre>{{ selectedCommand.packet }}</pre></div></div>
      <div v-else-if="tab==='\u7CFB\u7EDF\u4E8B\u4EF6'" class="event-list scrollable"><div v-for="event in state.events" :key="event.id" class="event-row"><span>{{ formatTime(event.time) }}</span><b>{{ event.source }}</b><CheckCircle2 v-if="event.level==='success'" :size="13" class="event-success"/><CircleAlert v-else-if="event.level==='warning'||event.level==='error'" :size="13" class="event-warning"/><Radio v-else :size="13"/><p>{{ event.message }}</p></div></div>
      <div v-else class="api-layout"><div class="api-meta"><span>\u534F\u8BAE <b>SBT-WCS/1.0</b></span><span>\u4F20\u8F93 <b>JSON / TCP SIM</b></span><span>\u5E42\u7B49 <b>taskNo + sequence</b></span><span>\u8D85\u65F6 <b>1250ms</b></span><span>\u91CD\u8BD5 <b>\u6700\u591A 3 \u6B21</b></span></div><pre v-if="selectedCommand">{{ selectedCommand.packet }}</pre></div>
    </section>`
});
var WarehouseViewport = defineComponent({
  components: { Box, Focus, Route, ScanLine, Warehouse, MousePointer2 },
  setup() {
    const viewport = ref();
    const currentView = ref("overview");
    let scene;
    const selectedOrder = computed(() => state.orders.find((order) => order.id === state.selectedOrderId));
    const selectedTask = computed(() => state.tasks.find((task) => task.id === selectedOrder.value?.taskId));
    const selectedRobot = computed(() => state.robots.find((robot) => robot.id === selectedTask.value?.robotId));
    const views = [
      { id: "overview", label: "\u5168\u4ED3", icon: Warehouse },
      { id: "inbound", label: "\u4E0A\u8D27", icon: Box },
      { id: "aisle", label: "\u5DF7\u9053", icon: Route },
      { id: "outbound", label: "\u51FA\u5E93", icon: ScanLine },
      { id: "robot", label: "\u8DDF\u968F", icon: Focus }
    ];
    const changeView = (view) => {
      currentView.value = view;
      scene?.setView(view);
    };
    onMounted(() => {
      if (!viewport.value) return;
      scene = new WarehouseScene(viewport.value, simulation);
      scene.onSelect = (type, id) => {
        const task = type === "robot" ? state.tasks.find((item) => item.robotId === id && item.phase !== "\u5DF2\u5B8C\u6210") : state.tasks.find((item) => item.workstationId === id && item.phase !== "\u5DF2\u5B8C\u6210");
        if (task) simulation.selectOrder(task.orderId);
        if (type === "robot") {
          currentView.value = "robot";
          scene?.focusRobot(id);
        } else changeView("outbound");
      };
    });
    onBeforeUnmount(() => scene?.dispose());
    return { viewport, currentView, selectedOrder, selectedTask, selectedRobot, views, changeView };
  },
  template: `
    <section class="warehouse-viewport"><div ref="viewport" class="scene-canvas"/>
      <div class="scene-title glass-panel"><span class="live-dot"/><div><strong>\u5168\u4ED3\u5B9E\u65F6\u6570\u5B57\u5B6A\u751F</strong><span>{{ selectedTask?selectedTask.phase+' \xB7 '+selectedTask.locationCode:'\u8BBE\u5907\u5728\u7EBF \xB7 \u7B49\u5F85\u4EFB\u52A1' }}</span></div></div>
      <div class="camera-switcher glass-panel"><button v-for="view in views" :key="view.id" :class="{active:currentView===view.id}" @click="changeView(view.id)"><component :is="view.icon" :size="14"/>{{ view.label }}</button></div>
      <div class="simulation-badge">SIMULATION</div>
      <div v-if="selectedRobot" class="robot-focus-card glass-panel"><div class="focus-card-top"><span>{{ selectedRobot.id }}</span><span class="status-online">{{ selectedRobot.status }}</span></div><strong>{{ selectedTask?.phase }}</strong><div class="focus-data"><span>\u8D27\u4F4D <b>{{ selectedTask?.locationCode }}</b></span><span>\u7535\u91CF <b>{{ selectedRobot.battery.toFixed(0) }}%</b></span><span>\u8F7D\u8377 <b>{{ selectedRobot.loadedTote||'\u7A7A\u8F7D' }}</b></span></div></div>
      <div class="scene-legend glass-panel"><span><i class="legend-robot"/>CTU \u673A\u5668\u4EBA</span><span><i class="legend-route"/>\u6267\u884C\u8DEF\u5F84</span><span><i class="legend-station"/>\u62E3\u9009\u5DE5\u4F4D</span></div>
      <div class="scene-help"><MousePointer2 :size="13"/>\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u51FB\u8BBE\u5907\u8054\u52A8</div>
    </section>`
});
var App = defineComponent({
  components: { WarehouseViewport, OrderPanel, TaskPanel, PlaybackBar, CommandConsole, Activity, Box, CheckCircle2: CircleCheck, CircleHelp, Clock3, Cpu, PackageCheck, RadioTower, ShieldCheck, X, Zap },
  setup() {
    const showHelp = ref(false);
    const virtualTime = computed(() => new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(state.virtualTime));
    onMounted(() => simulation.start());
    onBeforeUnmount(() => simulation.stop());
    return { state, showHelp, virtualTime };
  },
  template: `
    <div class="dashboard-shell">
      <header class="app-header"><div class="brand-block"><div class="brand-logo"><img src="./assets/sbt-logo.png" alt="SBT"/></div><div class="brand-copy"><strong>\u82CF\u4F2F\u7279\u667A\u80FD\u7ACB\u4F53\u4ED3\u5E93</strong><span>SBT SMART WAREHOUSE \xB7 DIGITAL TWIN</span></div></div><div class="header-divider"/><div class="page-title"><Box :size="17"/><span>\u6570\u5B57\u5B6A\u751F\u8C03\u5EA6\u4E2D\u5FC3</span><b>\u6F14\u793A\u73AF\u5883</b></div><div class="header-right"><div class="system-health"><span class="live-dot"/><div><strong>\u7CFB\u7EDF\u8FD0\u884C\u6B63\u5E38</strong><span>OMS \xB7 APS \xB7 WCS \xB7 WMS</span></div></div><div class="virtual-clock"><Clock3 :size="15"/><span>{{ virtualTime }}</span></div><button class="help-button" @click="showHelp=true"><CircleHelp :size="16"/>\u6F14\u793A\u6307\u5357</button></div></header>
      <section class="metrics-strip">
        <div class="metric-card"><div class="metric-icon cyan"><PackageCheck :size="20"/></div><div><span>\u51FA\u5E93\u8BA2\u5355</span><strong>{{ state.metrics.completedOrders }}<small>/ {{ state.metrics.totalOrders }}</small></strong></div><span class="metric-trend">\u5168\u6D41\u7A0B\u95ED\u73AF</span></div>
        <div class="metric-card"><div class="metric-icon green"><Cpu :size="20"/></div><div><span>CTU \u5728\u7EBF</span><strong>{{ state.metrics.onlineRobots }}<small>/ {{ state.metrics.onlineRobots }}</small></strong></div><span class="metric-trend">{{ state.metrics.activeRobots }} \u53F0\u4F5C\u4E1A\u4E2D</span></div>
        <div class="metric-card"><div class="metric-icon blue"><RadioTower :size="20"/></div><div><span>\u7D2F\u8BA1\u6307\u4EE4</span><strong>{{ state.metrics.commandsSent }}</strong></div><span class="metric-trend">\u4E0B\u53D1\u4E0E\u56DE\u4F20</span></div>
        <div class="metric-card"><div class="metric-icon violet"><Zap :size="20"/></div><div><span>\u5E73\u5747 ACK</span><strong>{{ state.metrics.averageAck }}<small>ms</small></strong></div><span class="metric-trend">\u9608\u503C 1250ms</span></div>
        <div class="metric-card"><div class="metric-icon amber"><Activity :size="20"/></div><div><span>\u6307\u4EE4\u8FBE\u6210\u7387</span><strong>{{ state.metrics.commandSuccessRate }}<small>%</small></strong></div><span class="metric-trend">\u5F02\u5E38\u81EA\u52A8\u91CD\u8BD5</span></div>
      </section>
      <main class="workspace-grid"><OrderPanel/><div class="center-stage"><WarehouseViewport/><PlaybackBar/></div><TaskPanel/></main>
      <CommandConsole/>
      <div class="app-footer"><span><ShieldCheck :size="12"/>\u5B89\u5168\u4EFF\u771F\uFF1A\u6307\u4EE4\u4EC5\u4F5C\u7528\u4E8E\u865A\u62DF\u8BBE\u5907\uFF0C\u4E0D\u8FDE\u63A5\u73B0\u573A\u63A7\u5236\u5668</span><span>\u6A21\u578B\u4F9D\u636E\u73B0\u6709 CAD \u5C3A\u5BF8\u4E0E SBT \u53C2\u8003\u573A\u666F\u91CD\u5EFA \xB7 API Adapter Ready</span></div>
      <Teleport to="body"><div v-if="showHelp" class="modal-backdrop" @click.self="showHelp=false"><div class="help-modal"><button class="modal-close" @click="showHelp=false"><X :size="18"/></button><span class="eyebrow">CUSTOMER DEMO GUIDE</span><h2>\u7ACB\u4F53\u4ED3\u5E93\u6570\u5B57\u5B6A\u751F\u6F14\u793A</h2><p>\u4ECE\u8BA2\u5355\u5230\u8BBE\u5907\u6307\u4EE4\uFF0C\u518D\u5230\u51FA\u5E93\u56DE\u4F20\uFF0C\u5B8C\u6574\u5C55\u793A\u4E1A\u52A1\u4E0E 3D \u573A\u666F\u8054\u52A8\u3002</p><div class="help-steps"><div><b>01</b><span><strong>\u9009\u62E9\u8BA2\u5355</strong>\u5DE6\u4FA7\u70B9\u51FB\u8BA2\u5355\uFF0C\u53F3\u4FA7\u67E5\u770B APS \u6392\u4EA7\u4E0E\u4EFB\u52A1\u94FE\u8DEF\u3002</span></div><div><b>02</b><span><strong>\u89C2\u5BDF\u6307\u4EE4</strong>\u5E95\u90E8\u67E5\u770B\u6BCF\u6761\u4E0B\u884C\u62A5\u6587\u3001\u8BBE\u5907 ACK\u3001\u6267\u884C\u72B6\u6001\u4E0E\u5B8C\u6210\u56DE\u4F20\u3002</span></div><div><b>03</b><span><strong>\u8054\u52A8\u573A\u666F</strong>\u5207\u6362\u5168\u4ED3\u3001\u5DF7\u9053\u3001\u51FA\u5E93\u4E0E\u8DDF\u968F\u673A\u4F4D\uFF0C\u70B9\u51FB\u8BBE\u5907\u4E5F\u53EF\u5B9A\u4F4D\u4EFB\u52A1\u3002</span></div></div><div class="help-tip"><CheckCircle2 :size="16"/>\u70B9\u51FB\u201C\u5F02\u5E38\u6F14\u7EC3\u201D\u53EF\u6A21\u62DF\u4E0B\u4E00\u6B21 ACK \u8D85\u65F6\uFF0CWCS \u5C06\u4F7F\u7528\u539F\u5E42\u7B49\u952E\u5B89\u5168\u91CD\u53D1\u3002</div><button class="primary-button full-width" @click="showHelp=false">\u5F00\u59CB\u6F14\u793A</button></div></div></Teleport>
    </div>`
});

// src/main.ts
createApp(App).mount("#app");
/*! Bundled license information:

lucide-vue-next/dist/esm/shared/src/utils.js:
lucide-vue-next/dist/esm/defaultAttributes.js:
lucide-vue-next/dist/esm/Icon.js:
lucide-vue-next/dist/esm/createLucideIcon.js:
lucide-vue-next/dist/esm/icons/activity.js:
lucide-vue-next/dist/esm/icons/battery-charging.js:
lucide-vue-next/dist/esm/icons/box.js:
lucide-vue-next/dist/esm/icons/braces.js:
lucide-vue-next/dist/esm/icons/check.js:
lucide-vue-next/dist/esm/icons/chevron-right.js:
lucide-vue-next/dist/esm/icons/circle-alert.js:
lucide-vue-next/dist/esm/icons/circle-check.js:
lucide-vue-next/dist/esm/icons/circle-help.js:
lucide-vue-next/dist/esm/icons/circle.js:
lucide-vue-next/dist/esm/icons/clock-3.js:
lucide-vue-next/dist/esm/icons/cpu.js:
lucide-vue-next/dist/esm/icons/focus.js:
lucide-vue-next/dist/esm/icons/link-2.js:
lucide-vue-next/dist/esm/icons/loader-circle.js:
lucide-vue-next/dist/esm/icons/map-pin.js:
lucide-vue-next/dist/esm/icons/mouse-pointer-2.js:
lucide-vue-next/dist/esm/icons/package-check.js:
lucide-vue-next/dist/esm/icons/package.js:
lucide-vue-next/dist/esm/icons/pause.js:
lucide-vue-next/dist/esm/icons/play.js:
lucide-vue-next/dist/esm/icons/radio-tower.js:
lucide-vue-next/dist/esm/icons/radio.js:
lucide-vue-next/dist/esm/icons/rotate-ccw.js:
lucide-vue-next/dist/esm/icons/route.js:
lucide-vue-next/dist/esm/icons/scan-line.js:
lucide-vue-next/dist/esm/icons/scroll-text.js:
lucide-vue-next/dist/esm/icons/shield-check.js:
lucide-vue-next/dist/esm/icons/sparkles.js:
lucide-vue-next/dist/esm/icons/square-terminal.js:
lucide-vue-next/dist/esm/icons/triangle-alert.js:
lucide-vue-next/dist/esm/icons/warehouse.js:
lucide-vue-next/dist/esm/icons/x.js:
lucide-vue-next/dist/esm/icons/zap.js:
lucide-vue-next/dist/esm/lucide-vue-next.js:
  (**
   * @license lucide-vue-next v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
