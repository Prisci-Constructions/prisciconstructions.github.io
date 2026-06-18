/* ─────────────────────────────────────────────────────────────
   PRISCI CONSTRUCTIONS — Three.js 3D Scene
   Rotating building · Parallax depth · Earthy concrete tones
───────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  // ── RENDERER ──────────────────────────────────────────────
  const canvas = document.getElementById('three-canvas');
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.85;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // ── SCENE ─────────────────────────────────────────────────
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x080808);
  scene.fog = new THREE.FogExp2(0x080808, 0.016);

  // ── CAMERA ────────────────────────────────────────────────
  const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 300);
  const CAM_BASE = { x: -1.5, y: 5.5, z: 17 };
  camera.position.set(CAM_BASE.x, CAM_BASE.y, CAM_BASE.z);
  camera.lookAt(1.5, 7, 0);

  // ── LIGHTING ──────────────────────────────────────────────

  // Dark cyan-tinted ambient
  const ambientLight = new THREE.AmbientLight(0x081014, 1.4);
  scene.add(ambientLight);

  // Main sun — cool white
  const sunLight = new THREE.DirectionalLight(0xe0f8ff, 2.8);
  sunLight.position.set(10, 20, 8);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 80;
  sunLight.shadow.camera.left = -20;
  sunLight.shadow.camera.right = 20;
  sunLight.shadow.camera.top = 25;
  sunLight.shadow.camera.bottom = -5;
  sunLight.shadow.bias = -0.001;
  scene.add(sunLight);

  // Cyan fill (signature accent light)
  const fillLight = new THREE.PointLight(0x00E5FF, 2.5, 40);
  fillLight.position.set(-6, 2, 12);
  scene.add(fillLight);

  // Deep cyan rim from behind
  const rimLight = new THREE.DirectionalLight(0x006688, 0.9);
  rimLight.position.set(-15, 8, -10);
  scene.add(rimLight);

  // Sky dark cyan / ground black hemisphere
  const hemiLight = new THREE.HemisphereLight(0x081418, 0x040608, 0.8);
  scene.add(hemiLight);

  // Crane light — cyan pulse at crane top
  const craneLamp = new THREE.PointLight(0x00E5FF, 3.5, 14);
  scene.add(craneLamp); // positioned after crane is built

  // ── MATERIALS ─────────────────────────────────────────────
  function mat(params) { return new THREE.MeshStandardMaterial(params); }

  const M = {
    concrete:    mat({ color: 0x141414, roughness: 0.9,  metalness: 0.05 }),
    concreteLt:  mat({ color: 0x1e1e1e, roughness: 0.85, metalness: 0.08 }),
    concreteDk:  mat({ color: 0x080808, roughness: 0.96, metalness: 0.02 }),
    steel:       mat({ color: 0x607080, roughness: 0.3,  metalness: 0.88 }),
    steelDk:     mat({ color: 0x141414, roughness: 0.45, metalness: 0.78 }),
    glassCool:   mat({ color: 0x040c10, emissive: new THREE.Color(0x00E5FF), emissiveIntensity: 0.5, roughness: 0.05, metalness: 0.92 }),
    glassWarm:   mat({ color: 0x040c10, emissive: new THREE.Color(0x80F0FF), emissiveIntensity: 0.22, roughness: 0.08, metalness: 0.88 }),
    ground:      mat({ color: 0x060606, roughness: 1.0,  metalness: 0.0  }),
    asphalt:     mat({ color: 0x080808, roughness: 0.98, metalness: 0.0  }),
    yellow:      mat({ color: 0xf5c510, emissive: new THREE.Color(0xf5a800), emissiveIntensity: 0.1, roughness: 0.35, metalness: 0.2 }),
    red:         mat({ color: 0x8b1a1a, roughness: 0.8,  metalness: 0.1  }),
    accent:      mat({ color: 0x00E5FF, emissive: new THREE.Color(0x00E5FF), emissiveIntensity: 0.6, roughness: 0.2, metalness: 0.5 }),
  };

  // ── HELPERS ───────────────────────────────────────────────
  function mesh(geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
  }

  function box(w, h, d, mat, x = 0, y = 0, z = 0) {
    return mesh(new THREE.BoxGeometry(w, h, d), mat, x, y, z);
  }

  function cyl(rt, rb, h, mat, x = 0, y = 0, z = 0, segs = 8) {
    return mesh(new THREE.CylinderGeometry(rt, rb, h, segs), mat, x, y, z);
  }

  function cable(ax, ay, az, bx, by, bz, thickness = 0.04) {
    const a = new THREE.Vector3(ax, ay, az);
    const b = new THREE.Vector3(bx, by, bz);
    const dir = new THREE.Vector3().subVectors(b, a);
    const len = dir.length();
    const mid = new THREE.Vector3().lerpVectors(a, b, 0.5);
    const geo = new THREE.CylinderGeometry(thickness, thickness, len, 5);
    const m   = new THREE.Mesh(geo, M.steelDk);
    m.position.copy(mid);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    return m;
  }

  // Random window material (cyan glow variants)
  function winMat() {
    const g = M.glassCool.clone();
    if (Math.random() > 0.65) {
      g.emissive = new THREE.Color(0x00CCEE);
      g.emissiveIntensity = 0.12 + Math.random() * 0.2;
    }
    return g;
  }

  // ── BUILDING GROUP ────────────────────────────────────────
  const buildingGroup = new THREE.Group();
  buildingGroup.position.set(1.5, 0, 0);
  scene.add(buildingGroup);

  // ──────────────────────────────────────────────────────────
  //  1 · MAIN TOWER   (3 × 12 × 2.5, base at y=0, top at y=12)
  // ──────────────────────────────────────────────────────────
  function buildMainTower() {
    const g = new THREE.Group();

    // Core body
    g.add(box(3, 12, 2.5, M.concrete, 0, 6, 0));

    // Horizontal floor bands (every 1 unit from y=0 to y=12)
    for (let i = 0; i <= 12; i++) {
      g.add(box(3.07, 0.07, 2.57, M.concreteDk, 0, i, 0));
    }

    // Vertical corner strips (steel)
    g.add(box(0.1, 12.1, 2.52, M.steel, -1.555, 6, 0));
    g.add(box(0.1, 12.1, 2.52, M.steel,  1.555, 6, 0));

    // Front face windows — 4 cols × 11 rows
    const cols = [-0.84, -0.28, 0.28, 0.84];
    for (let row = 0; row < 11; row++) {
      for (let c = 0; c < cols.length; c++) {
        g.add(box(0.48, 0.7, 0.07, winMat(), cols[c], 0.8 + row, 1.26));
      }
    }

    // Back face windows — same layout
    for (let row = 0; row < 11; row++) {
      for (let c = 0; c < cols.length; c++) {
        const wm = M.glassCool.clone();
        g.add(box(0.48, 0.7, 0.07, wm, cols[c], 0.8 + row, -1.26));
      }
    }

    // Side windows (left/right face, single column each)
    for (let row = 0; row < 10; row++) {
      g.add(box(0.07, 0.7, 0.55, winMat(),  1.56, 0.8 + row, 0));
      g.add(box(0.07, 0.7, 0.55, winMat(), -1.56, 0.8 + row, 0));
    }

    // Rooftop parapet
    g.add(box(3.1, 0.3, 2.6, M.concreteDk, 0, 12.15, 0));

    // Rooftop: mechanical room
    g.add(box(1.4, 1.6, 1.1, M.concrete, -0.5, 12.8, 0));
    g.add(box(0.6, 1.0, 0.7, M.concreteDk, 0.8, 12.5, 0));

    // Spire / antenna
    g.add(box(0.06, 2.5, 0.06, M.steel, 0.3, 14.25, 0));

    // Blink light at tip
    const blink = box(0.12, 0.12, 0.12, M.accent, 0.3, 15.55, 0);
    g.add(blink);

    return { group: g, blink };
  }

  // ──────────────────────────────────────────────────────────
  //  2 · WEST WING   (2.5 × 5 × 2, left of main tower)
  // ──────────────────────────────────────────────────────────
  function buildWestWing() {
    const g = new THREE.Group();
    g.position.set(-2.75, 0, 0);

    g.add(box(2.5, 5, 2, M.concreteLt, 0, 2.5, 0));

    for (let i = 0; i <= 5; i++) g.add(box(2.57, 0.07, 2.07, M.concreteDk, 0, i, 0));

    // Front windows 3 cols × 4 rows
    const cw = [-0.65, 0, 0.65];
    for (let row = 0; row < 4; row++) {
      for (const cx of cw) g.add(box(0.5, 0.7, 0.07, winMat(), cx, 0.8 + row, 1.03));
    }

    // Horizontal brise-soleil sun shades
    for (let i = 0; i < 4; i++) {
      g.add(box(2.5, 0.07, 0.35, M.steel, 0, 0.5 + i, 1.18));
    }

    // Roof parapet
    g.add(box(2.57, 0.22, 2.07, M.concreteDk, 0, 5.11, 0));
    // Small rooftop box
    g.add(box(0.9, 0.8, 0.8, M.concrete, 0.5, 5.4, 0));

    return g;
  }

  // ──────────────────────────────────────────────────────────
  //  3 · EAST TOWER   (2 × 7 × 2, right of main tower)
  // ──────────────────────────────────────────────────────────
  function buildEastTower() {
    const g = new THREE.Group();
    g.position.set(2.5, 0, 0);

    g.add(box(2, 7, 2, M.concrete, 0, 3.5, 0));

    for (let i = 0; i <= 7; i++) g.add(box(2.07, 0.07, 2.07, M.concreteDk, 0, i, 0));

    // Front windows 2 cols × 6 rows
    for (let row = 0; row < 6; row++) {
      g.add(box(0.6, 0.72, 0.07, winMat(), -0.38, 0.8 + row, 1.03));
      g.add(box(0.6, 0.72, 0.07, winMat(),  0.38, 0.8 + row, 1.03));
    }

    g.add(box(2.07, 0.25, 2.07, M.concreteDk, 0, 7.12, 0));
    g.add(box(0.7, 0.9, 0.7, M.concrete, -0.3, 7.45, 0));

    return g;
  }

  // ──────────────────────────────────────────────────────────
  //  4 · PODIUM BASE
  // ──────────────────────────────────────────────────────────
  function buildPodium() {
    const g = new THREE.Group();

    // Main podium slab
    g.add(box(9.5, 0.9, 5.2, M.concreteDk, 0, 0.45, 0.35));

    // Step 1
    g.add(box(10.5, 0.2, 6.0, M.concrete,   0, 0.1, 0.75));

    // Entrance canopy
    g.add(box(3.2, 0.1, 1.6, M.steel,      0, 2.8, 2.0));
    g.add(box(0.09, 2.8, 0.09, M.steel,   -1.4, 1.4, 2.0));
    g.add(box(0.09, 2.8, 0.09, M.steel,    1.4, 1.4, 2.0));

    // Entrance canopy cable supports
    g.add(cable(0, 3.5, 0, -1.4, 2.8, 2.0, 0.03));
    g.add(cable(0, 3.5, 0,  1.4, 2.8, 2.0, 0.03));

    // Bollards at entrance
    for (let bx = -1.2; bx <= 1.2; bx += 0.6) {
      g.add(cyl(0.07, 0.09, 0.7, M.concrete, bx, 1.25, 2.6));
    }

    // Small planters (boxes at sides)
    g.add(box(0.7, 0.5, 0.7, M.concreteDk, -4.2, 0.85, 1.8));
    g.add(box(0.7, 0.5, 0.7, M.concreteDk,  4.2, 0.85, 1.8));

    return g;
  }

  // ──────────────────────────────────────────────────────────
  //  5 · TOWER CRANE
  // ──────────────────────────────────────────────────────────
  function buildCrane() {
    const g = new THREE.Group();
    g.position.set(5.2, 0, -0.6);

    // Vertical mast
    g.add(box(0.32, 18, 0.32, M.yellow, 0, 9, 0));

    // Mast cross-braces every 1.5m
    for (let i = 0; i < 16; i += 1.8) {
      const br = box(0.3, 0.07, 0.3, M.steelDk, 0, i + 0.9, 0);
      g.add(br);
    }

    // Operator cabin
    g.add(box(0.7, 0.65, 0.7, M.yellow, 0.5, 17.4, 0));
    g.add(box(0.5, 0.55, 0.5, mat({ color: 0x040c10, emissive: new THREE.Color(0x003344), emissiveIntensity: 0.4, roughness: 0.05, metalness: 0.9 }), 0.5, 17.4, 0)); // cabin glass

    // Horizontal jib (main — extends right)
    g.add(box(10, 0.25, 0.25, M.yellow, 5, 18, 0));

    // Counter-jib (extends left)
    g.add(box(3.5, 0.2, 0.2, M.yellow, -1.75, 18, 0));

    // Counter-weight
    g.add(box(0.9, 0.9, 0.9, M.concreteDk, -3.7, 17.6, 0));

    // Jib support cables
    g.add(cable(0, 19.5, 0, 10,  18,  0, 0.035));
    g.add(cable(0, 19.5, 0, -3.7,18,  0, 0.035));

    // Trolley on jib
    g.add(box(0.3, 0.18, 0.18, M.steelDk, 7, 17.9, 0));

    // Hook cable going down from trolley
    const hookLen = 9;
    g.add(box(0.03, hookLen, 0.03, M.steelDk, 7, 18 - hookLen / 2, 0));

    // Hook
    g.add(box(0.25, 0.25, 0.25, M.steel, 7, 18 - hookLen, 0));

    // Warning sphere at jib tip (small orange ball)
    const warnSphere = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), M.accent.clone());
    warnSphere.position.set(10, 18, 0);
    g.add(warnSphere);

    return { group: g, lampPos: new THREE.Vector3(5.2 + 0, 18.2, -0.6) };
  }

  // ──────────────────────────────────────────────────────────
  //  6 · SCAFFOLDING   (on main tower's front-left face)
  // ──────────────────────────────────────────────────────────
  function buildScaffolding() {
    const g = new THREE.Group();
    // Positioned at left-front edge of main tower
    g.position.set(-1.55, 0, 1.26);

    const poles = [-0.45, 0, 0.45];
    const floors = 8;

    // Vertical poles
    for (const px of poles) {
      g.add(box(0.05, floors, 0.05, M.steelDk, px, floors / 2, 0));
    }

    // Horizontal platforms at each level
    for (let f = 0; f <= floors; f++) {
      g.add(box(0.9, 0.05, 0.35, M.steelDk, 0, f, 0));
    }

    // Diagonal cross-braces
    for (let f = 0; f < floors; f++) {
      g.add(cable(-0.45, f, 0, 0.45, f + 1, 0, 0.025));
      g.add(cable(0.45, f, 0, -0.45, f + 1, 0, 0.025));
    }

    return g;
  }

  // ── ASSEMBLE ──────────────────────────────────────────────
  const { group: towerGroup, blink: antennaBlink } = buildMainTower();
  buildingGroup.add(towerGroup);
  buildingGroup.add(buildWestWing());
  buildingGroup.add(buildEastTower());
  buildingGroup.add(buildPodium());

  const { group: craneGroup, lampPos } = buildCrane();
  buildingGroup.add(craneGroup);
  buildingGroup.add(buildScaffolding());

  // Position crane warning lamp in world space (set after scene built)
  craneLamp.position.copy(lampPos).add(buildingGroup.position);

  // ── GROUND PLANE ──────────────────────────────────────────
  const groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), M.ground);
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.receiveShadow = true;
  scene.add(groundMesh);

  // Construction-site asphalt patches
  for (const [gx, gz] of [[-6, 4], [8, -2], [-8, -6], [12, 8]]) {
    const patch = new THREE.Mesh(
      new THREE.PlaneGeometry(5 + Math.random() * 4, 4 + Math.random() * 3),
      M.asphalt
    );
    patch.rotation.x = -Math.PI / 2;
    patch.position.set(gx + buildingGroup.position.x, 0.005, gz);
    patch.receiveShadow = true;
    scene.add(patch);
  }

  // Faint ground grid
  const grid = new THREE.GridHelper(80, 80, 0x1a2a45, 0x0d1828);
  grid.position.y = 0.01;
  grid.material.opacity = 0.25;
  grid.material.transparent = true;
  scene.add(grid);

  // ── BACKGROUND BUILDINGS ──────────────────────────────────
  const bgData = [
    { w: 2.0, h:  8, d: 2.0, x: -14, z: -10 },
    { w: 1.5, h: 12, d: 1.5, x: -18, z: -16 },
    { w: 3.0, h:  5, d: 2.5, x: -10, z: -18 },
    { w: 2.5, h: 10, d: 2.0, x: -22, z: -12 },
    { w: 1.8, h:  6, d: 1.8, x:  12, z: -12 },
    { w: 2.0, h: 14, d: 2.0, x:  16, z: -10 },
    { w: 1.2, h:  8, d: 1.2, x:  20, z: -18 },
    { w: 3.5, h:  4, d: 2.5, x:  10, z: -20 },
    { w: 1.5, h: 10, d: 1.5, x: -12, z: -24 },
    { w: 2.0, h:  7, d: 2.0, x:  22, z: -8  },
  ];

  bgData.forEach(({ w, h, d, x, z }) => {
    const bMat = M.concreteDk.clone();
    bMat.color.setHex(0x080808 + Math.floor(Math.random() * 0x080808));
    const b = box(w, h, d, bMat, x, h / 2, z);
    scene.add(b);

    // A few dim windows
    const winCount = Math.floor(h / 1.5);
    for (let i = 0; i < winCount; i++) {
      const wm = new THREE.MeshStandardMaterial({
        color: 0x050c14,
        emissive: Math.random() > 0.45
          ? new THREE.Color(0x00E5FF)
          : new THREE.Color(0x80F0FF),
        emissiveIntensity: 0.12 + Math.random() * 0.12,
        roughness: 0.05, metalness: 0.9,
      });
      const wy = 1 + i * 1.4;
      if (wy < h) {
        const wBox = box(0.3, 0.4, 0.06, wm, x, wy, z + d / 2 + 0.04);
        scene.add(wBox);
      }
    }
  });

  // Construction barriers / cones near building base
  const conePos = [[-3.5, 3.2], [-4.2, 4.0], [6.5, 3.5], [7.0, 4.5]];
  conePos.forEach(([cx, cz]) => {
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.35, 8),
      mat({ color: 0xff5500, roughness: 0.7, metalness: 0.0 })
    );
    cone.position.set(cx + buildingGroup.position.x, 0.175, cz);
    cone.castShadow = true;
    scene.add(cone);
  });

  // ── PARTICLE SYSTEM ───────────────────────────────────────
  const PARTICLE_COUNT = 350;
  const pPos = new Float32Array(PARTICLE_COUNT * 3);
  const pVel = [];
  const pSizes = new Float32Array(PARTICLE_COUNT);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const r     = 4 + Math.random() * 22;
    pPos[i * 3]     = Math.cos(theta) * r + buildingGroup.position.x;
    pPos[i * 3 + 1] = Math.random() * 20;
    pPos[i * 3 + 2] = Math.sin(theta) * r - 5;
    pVel.push({
      x: (Math.random() - 0.5) * 0.004,
      y: Math.random() * 0.006 + 0.001,
      z: (Math.random() - 0.5) * 0.004,
    });
    pSizes[i] = 0.03 + Math.random() * 0.05;
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));

  const pMat = new THREE.PointsMaterial({
    color: 0x00E5FF,
    size: 0.06,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.5,
  });

  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  // ── EDGE WIREFRAME HIGHLIGHT ───────────────────────────────
  // Add subtle edge lines to main tower for blueprint feel
  const edgesGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(3, 12, 2.5));
  const edgesMat = new THREE.LineBasicMaterial({ color: 0x00E5FF, transparent: true, opacity: 0.12 });
  const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
  edgesMesh.position.set(0, 6, 0);
  buildingGroup.add(edgesMesh);

  // ── INTERACTION STATE ─────────────────────────────────────
  let mouseX = 0, mouseY = 0;
  let scrollY = 0;
  let isIdle = true;
  let idleTimer;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    isIdle = false;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => { isIdle = true; }, 2000);
  });

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // ── ANIMATION LOOP ────────────────────────────────────────
  const clock = new THREE.Clock();
  let targetCamX = CAM_BASE.x;
  let targetCamY = CAM_BASE.y;
  let blinkPhase = 0;

  function animate() {
    requestAnimationFrame(animate);

    const t = clock.getElapsedTime();
    const dt = Math.min(clock.getDelta(), 0.05);

    // Building slow Y rotation
    buildingGroup.rotation.y += 0.0025;

    // Parallax: smooth camera drift toward mouse target
    targetCamX = CAM_BASE.x + mouseX * 2.0;
    targetCamY = CAM_BASE.y + mouseY * -1.2;
    camera.position.x += (targetCamX - camera.position.x) * 0.035;
    camera.position.y += (targetCamY - camera.position.y) * 0.035;

    // Scroll-based depth: camera pulls back as user scrolls
    const scrollRatio = scrollY / Math.max(window.innerHeight, 1);
    const targetZ = CAM_BASE.z + scrollRatio * 6;
    camera.position.z += (targetZ - camera.position.z) * 0.06;

    // Camera always looks at building center
    camera.lookAt(buildingGroup.position.x + 0.5, 7, 0);

    // Particle drift upward — reset when too high
    const posArr = pGeo.attributes.position.array;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      posArr[i * 3]     += pVel[i].x;
      posArr[i * 3 + 1] += pVel[i].y;
      posArr[i * 3 + 2] += pVel[i].z;

      if (posArr[i * 3 + 1] > 22) {
        const theta = Math.random() * Math.PI * 2;
        const r     = 4 + Math.random() * 22;
        posArr[i * 3]     = Math.cos(theta) * r + buildingGroup.position.x;
        posArr[i * 3 + 1] = -1;
        posArr[i * 3 + 2] = Math.sin(theta) * r - 5;
      }
    }
    pGeo.attributes.position.needsUpdate = true;

    // Particles slow drift rotation
    particles.rotation.y += 0.0003;

    // Blink antenna light
    blinkPhase += dt;
    const blinkOn = Math.sin(blinkPhase * 2.5) > 0.6;
    antennaBlink.material.emissiveIntensity = blinkOn ? 1.2 : 0.0;

    // Crane warning lamp pulse
    craneLamp.intensity = 2.0 + Math.sin(t * 2.5) * 1.5;

    // Fill light subtle pulse (orange key light)
    fillLight.intensity = 2.4 + Math.sin(t * 0.7) * 0.4 + Math.sin(t * 3.1) * 0.15;

    // Rim light slow cycle
    rimLight.intensity = 0.7 + Math.sin(t * 0.2) * 0.15;

    renderer.render(scene, camera);
  }

  animate();

  // ── SCROLL REVEAL (intersection observer) ─────────────────
  const fadeEls = document.querySelectorAll('.section-eyebrow, .section-title, .service-card, .project-card, .client-pill, .testimonial-card, .about-grid, .contact-grid');
  fadeEls.forEach((el) => el.classList.add('fade-in-up'));

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12 }
  );
  fadeEls.forEach((el) => io.observe(el));

})();
