import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Wind, Zap, Palette } from 'lucide-react';

export default function ThreeScene() {
  const containerRef = useRef(null);
  const [activeMode, setActiveMode] = useState('turntable'); // 'turntable' | 'windtunnel' | 'laserscan'
  const [activeColor, setActiveColor] = useState('obsidian');

  const paintColorMap = {
    obsidian: { hex: 0x09162e, name: 'Obsidian Navy', css: 'bg-[#09162e] border-[#38bdf8]' },
    silver: { hex: 0x94a3b8, name: 'Liquid Silver', css: 'bg-[#94a3b8] border-white' },
    white: { hex: 0xf1f5f9, name: 'Pearl Ceramic', css: 'bg-[#f1f5f9] border-[#38bdf8]' },
    emerald: { hex: 0x064e3b, name: 'Emerald Knight', css: 'bg-[#064e3b] border-emerald-400' },
    cyan: { hex: 0x0284c7, name: 'Electric Cyan', css: 'bg-[#0284c7] border-cyan-300' },
  };

  const modeRef = useRef('turntable');
  const carPaintMatRef = useRef(null);
  const underglowRef = useRef(null);

  const handleModeChange = (mode) => {
    setActiveMode(mode);
    modeRef.current = mode;
  };

  const handleColorChange = (colorKey) => {
    setActiveColor(colorKey);
    if (carPaintMatRef.current && paintColorMap[colorKey]) {
      carPaintMatRef.current.color.setHex(paintColorMap[colorKey].hex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);

    const isWide = window.innerWidth >= 1024;
    camera.position.set(16, 8, 18);
    camera.lookAt(isWide ? 2.5 : 0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Studio Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const mainStudioLight = new THREE.DirectionalLight(0xffffff, 2.5);
    mainStudioLight.position.set(12, 22, 16);
    scene.add(mainStudioLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 3.2);
    rimLight.position.set(-16, 14, -16);
    scene.add(rimLight);

    const cyanUnderglow = new THREE.PointLight(0x00b4d8, 4.5, 18);
    cyanUnderglow.position.set(0, -0.6, 0);
    scene.add(cyanUnderglow);
    underglowRef.current = cyanUnderglow;

    // Turntable Root Group
    const turntableGroup = new THREE.Group();
    if (isWide) {
      turntableGroup.position.x = 2.8;
    }
    scene.add(turntableGroup);

    // Motorized Turntable Stage Base
    const turntableGeom = new THREE.CylinderGeometry(11.5, 12, 0.5, 64);
    const turntableMat = new THREE.MeshStandardMaterial({
      color: 0x050a14,
      metalness: 0.85,
      roughness: 0.25
    });
    const turntable = new THREE.Mesh(turntableGeom, turntableMat);
    turntable.position.y = -1.9;
    turntableGroup.add(turntable);

    // Concentric Neon Studio Rings
    const ringGeom = new THREE.TorusGeometry(11.4, 0.06, 16, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00b4d8 });
    const ringMesh = new THREE.Mesh(ringGeom, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = -1.64;
    turntableGroup.add(ringMesh);

    const innerRingGeom = new THREE.TorusGeometry(8.5, 0.04, 16, 80);
    const innerRingMesh = new THREE.Mesh(innerRingGeom, ringMat);
    innerRingMesh.rotation.x = Math.PI / 2;
    innerRingMesh.position.y = -1.64;
    turntableGroup.add(innerRingMesh);

    // Perspective Floor Grid
    const gridHelper = new THREE.GridHelper(50, 30, 0x00b4d8, 0x0b1e3d);
    gridHelper.position.y = -2.1;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.38;
    scene.add(gridHelper);

    // 3D Sculpted Supercar Group
    const carRoot = new THREE.Group();
    turntableGroup.add(carRoot);

    // Automotive Metallic Clearcoat Paint Material
    const initialHex = paintColorMap[activeColor]?.hex || 0x09162e;
    const carPaintMat = new THREE.MeshStandardMaterial({
      color: initialHex,
      metalness: 0.92,
      roughness: 0.15,
      envMapIntensity: 1.5
    });
    carPaintMatRef.current = carPaintMat;

    // Cyber Wireframe Glow Overlay
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });

    // Deep Tinted Glass Material
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x011a33,
      metalness: 0.95,
      roughness: 0.08,
      transparent: true,
      opacity: 0.8
    });

    // Carbon Fiber Trim Material
    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x05070a,
      metalness: 0.4,
      roughness: 0.7
    });

    // 1. Main Fuselage
    const mainBodyGeom = new THREE.BoxGeometry(13.2, 1.25, 5.6);
    const mainBody = new THREE.Mesh(mainBodyGeom, carPaintMat);
    mainBody.position.set(0, 0, 0);
    carRoot.add(mainBody);

    const mainBodyWire = new THREE.Mesh(mainBodyGeom, wireframeMat);
    mainBodyWire.position.set(0, 0, 0);
    carRoot.add(mainBodyWire);

    // 2. Sloping Hood / Front Nose Wedge
    const hoodGeom = new THREE.BoxGeometry(4.4, 0.82, 5.2);
    const hood = new THREE.Mesh(hoodGeom, carPaintMat);
    hood.position.set(4.5, 0.25, 0);
    hood.rotation.z = -0.12;
    carRoot.add(hood);

    // Front Splitter
    const splitterGeom = new THREE.BoxGeometry(2.0, 0.18, 6.2);
    const splitter = new THREE.Mesh(splitterGeom, carbonMat);
    splitter.position.set(6.8, -0.55, 0);
    carRoot.add(splitter);

    // Front Grille Recess
    const grilleGeom = new THREE.BoxGeometry(0.3, 0.78, 4.4);
    const grille = new THREE.Mesh(grilleGeom, carbonMat);
    grille.position.set(6.75, -0.15, 0);
    carRoot.add(grille);

    // 3. Cabin Greenhouse (Cockpit)
    const cabinGeom = new THREE.BoxGeometry(6.2, 1.55, 4.4);
    const cabin = new THREE.Mesh(cabinGeom, carPaintMat);
    cabin.position.set(-0.6, 1.22, 0);
    carRoot.add(cabin);

    // Windshield (Front glass)
    const windshieldGeom = new THREE.BoxGeometry(2.3, 1.48, 4.2);
    const windshield = new THREE.Mesh(windshieldGeom, glassMat);
    windshield.position.set(2.0, 1.05, 0);
    windshield.rotation.z = -0.66;
    carRoot.add(windshield);

    // Rear Fastback Window
    const rearGlassGeom = new THREE.BoxGeometry(2.5, 1.38, 4.2);
    const rearGlass = new THREE.Mesh(rearGlassGeom, glassMat);
    rearGlass.position.set(-3.2, 1.0, 0);
    rearGlass.rotation.z = 0.56;
    carRoot.add(rearGlass);

    // Side Windows
    const sideGlassGeom = new THREE.BoxGeometry(4.2, 1.05, 0.08);
    const sideGlassLeft = new THREE.Mesh(sideGlassGeom, glassMat);
    sideGlassLeft.position.set(-0.6, 1.22, 2.22);
    carRoot.add(sideGlassLeft);

    const sideGlassRight = new THREE.Mesh(sideGlassGeom, glassMat);
    sideGlassRight.position.set(-0.6, 1.22, -2.22);
    carRoot.add(sideGlassRight);

    // Side Wing Mirrors
    const mirrorGeom = new THREE.BoxGeometry(0.5, 0.25, 0.4);
    const mirrorLeft = new THREE.Mesh(mirrorGeom, carbonMat);
    mirrorLeft.position.set(1.2, 0.95, 2.45);
    carRoot.add(mirrorLeft);

    const mirrorRight = new THREE.Mesh(mirrorGeom, carbonMat);
    mirrorRight.position.set(1.2, 0.95, -2.45);
    carRoot.add(mirrorRight);

    // 4. Rear Deck & Integrated Ducktail Spoiler
    const rearDeckGeom = new THREE.BoxGeometry(3.2, 0.78, 5.2);
    const rearDeck = new THREE.Mesh(rearDeckGeom, carPaintMat);
    rearDeck.position.set(-5.0, 0.35, 0);
    carRoot.add(rearDeck);

    const spoilerGeom = new THREE.BoxGeometry(0.9, 0.22, 5.6);
    const spoiler = new THREE.Mesh(spoilerGeom, carbonMat);
    spoiler.position.set(-6.5, 0.9, 0);
    spoiler.rotation.z = 0.22;
    carRoot.add(spoiler);

    const diffuserGeom = new THREE.BoxGeometry(2.0, 0.45, 5.6);
    const diffuser = new THREE.Mesh(diffuserGeom, carbonMat);
    diffuser.position.set(-6.0, -0.45, 0);
    carRoot.add(diffuser);

    // Dual Twin Exhaust Tips
    const exhaustMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.95, roughness: 0.2 });
    [-1.6, 1.6].forEach((zPos) => {
      const exGeom = new THREE.CylinderGeometry(0.18, 0.18, 0.5, 12);
      const ex = new THREE.Mesh(exGeom, exhaustMat);
      ex.rotation.z = Math.PI / 2;
      ex.position.set(-6.8, -0.45, zPos);
      carRoot.add(ex);
    });

    // 5. Four 3D Alloy Wheels with Tires & Cyan Brake Calipers
    const wheelPositions = [
      { x: 4.2, y: -0.6, z: 2.85 },
      { x: 4.2, y: -0.6, z: -2.85 },
      { x: -4.2, y: -0.6, z: 2.85 },
      { x: -4.2, y: -0.6, z: -2.85 },
    ];

    const wheelMeshes = [];
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x111317, roughness: 0.85 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.95, roughness: 0.15 });
    const caliperMat = new THREE.MeshBasicMaterial({ color: 0x00b4d8 });

    wheelPositions.forEach((pos) => {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(pos.x, pos.y, pos.z);

      // Rubber Tire
      const tireGeom = new THREE.CylinderGeometry(1.3, 1.3, 0.75, 24);
      const tire = new THREE.Mesh(tireGeom, tireMat);
      tire.rotation.x = Math.PI / 2;
      wheelGroup.add(tire);

      // Chrome Rim Core
      const rimGeom = new THREE.CylinderGeometry(0.95, 0.95, 0.78, 16);
      const rim = new THREE.Mesh(rimGeom, rimMat);
      rim.rotation.x = Math.PI / 2;
      wheelGroup.add(rim);

      // 5-Spoke Turbine Alloy Pattern
      for (let s = 0; s < 5; s++) {
        const spokeGeom = new THREE.BoxGeometry(0.18, 1.5, 0.8);
        const spoke = new THREE.Mesh(spokeGeom, rimMat);
        spoke.rotation.z = (s * Math.PI * 2) / 5;
        wheelGroup.add(spoke);
      }

      // Cyan Brake Caliper
      const caliperGeom = new THREE.BoxGeometry(0.35, 0.7, 0.35);
      const caliper = new THREE.Mesh(caliperGeom, caliperMat);
      caliper.position.set(0.45, 0.3, 0);
      wheelGroup.add(caliper);

      carRoot.add(wheelGroup);
      wheelMeshes.push(wheelGroup);
    });

    // 6. Headlights & Volumetric Forward Light Cones
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xe0f2fe });
    const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 1.1), headlightMat);
    hlLeft.position.set(6.7, 0.15, 1.8);
    carRoot.add(hlLeft);

    const hlRight = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 1.1), headlightMat);
    hlRight.position.set(6.7, 0.15, -1.8);
    carRoot.add(hlRight);

    const beamGeom = new THREE.ConeGeometry(3.0, 15, 16, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });

    const beamL = new THREE.Mesh(beamGeom, beamMat);
    beamL.position.set(14.5, 0.15, 1.8);
    beamL.rotation.z = -Math.PI / 2;
    carRoot.add(beamL);

    const beamR = new THREE.Mesh(beamGeom, beamMat);
    beamR.position.set(14.5, 0.15, -1.8);
    beamR.rotation.z = -Math.PI / 2;
    carRoot.add(beamR);

    // 7. Full-Width Horizon Neon Taillight Bar
    const taillightMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const taillight = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.22, 5.2), taillightMat);
    taillight.position.set(-6.75, 0.35, 0);
    carRoot.add(taillight);

    // 8. Holographic Laser Inspection Scanner Plane
    const scanPlaneGeom = new THREE.PlaneGeometry(0.15, 8.5);
    const scanPlaneMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });
    const laserScanner = new THREE.Mesh(scanPlaneGeom, scanPlaneMat);
    laserScanner.rotation.y = Math.PI / 2;
    laserScanner.position.set(0, 0.8, 0);
    carRoot.add(laserScanner);

    // Shimmering Coating Sparkles along laser scan
    const sparkCount = 85;
    const sparkGeom = new THREE.BufferGeometry();
    const sparkPos = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount; i++) {
      sparkPos[i * 3] = (Math.random() - 0.5) * 1.5;
      sparkPos[i * 3 + 1] = Math.random() * 2.5;
      sparkPos[i * 3 + 2] = (Math.random() - 0.5) * 5.0;
    }
    sparkGeom.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparkMat = new THREE.PointsMaterial({
      color: 0x7dd3fc,
      size: 0.25,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const sparkParticles = new THREE.Points(sparkGeom, sparkMat);
    laserScanner.add(sparkParticles);

    // 9. Aerodynamic Wind-Tunnel Stream Particles
    const streamCount = 260;
    const streamGeom = new THREE.BufferGeometry();
    const streamPos = new Float32Array(streamCount * 3);
    const streamSpeeds = new Float32Array(streamCount);
    for (let i = 0; i < streamCount; i++) {
      streamPos[i * 3] = (Math.random() - 0.5) * 36;
      streamPos[i * 3 + 1] = Math.random() * 4.5 - 0.5;
      streamPos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      streamSpeeds[i] = 0.45 + Math.random() * 0.55;
    }
    streamGeom.setAttribute('position', new THREE.BufferAttribute(streamPos, 3));
    const streamMat = new THREE.PointsMaterial({
      color: 0x00b4d8,
      size: 0.25,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const streamParticles = new THREE.Points(streamGeom, streamMat);
    carRoot.add(streamParticles);

    // 10. Interactive 360° Drag & Parallax Handling
    let isDragging = false;
    let previousMouseX = 0;
    let userRotationOffset = 0.45;
    let targetTilt = 0;
    let currentTilt = 0;
    let lastUserInteraction = 0;

    const onMouseDown = (e) => {
      if (e.target.closest && e.target.closest('.hud-control')) return;
      isDragging = true;
      previousMouseX = e.clientX;
      lastUserInteraction = Date.now();
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        userRotationOffset += deltaX * 0.008;
        previousMouseX = e.clientX;
        lastUserInteraction = Date.now();
      }
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetTilt = normY * 0.2;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e) => {
      if (e.target.closest && e.target.closest('.hud-control')) return;
      if (e.touches[0]) {
        isDragging = true;
        previousMouseX = e.touches[0].clientX;
        lastUserInteraction = Date.now();
      }
    };

    const onTouchMove = (e) => {
      if (isDragging && e.touches[0]) {
        const deltaX = e.touches[0].clientX - previousMouseX;
        userRotationOffset += deltaX * 0.01;
        previousMouseX = e.touches[0].clientX;
        lastUserInteraction = Date.now();
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      const wide = window.innerWidth >= 1024;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      turntableGroup.position.x = wide ? 2.8 : 0;
      camera.lookAt(wide ? 2.5 : 0, 0.5, 0);
    };
    window.addEventListener('resize', onResize);

    // 11. Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const currentMode = modeRef.current;
      const idleTime = Date.now() - lastUserInteraction;

      // Mode-Specific Behaviors
      if (currentMode === 'turntable') {
        if (!isDragging && idleTime > 2500) {
          userRotationOffset += 0.006;
        }
        turntableGroup.rotation.y = userRotationOffset;
        streamParticles.visible = false;
        laserScanner.visible = true;
        laserScanner.position.x = Math.sin(time * 1.5) * 6.2;
        sparkParticles.rotation.y = time * 2;
        beamMat.opacity = 0.12;

        carRoot.position.y = Math.sin(time * 1.5) * 0.04;
        wheelMeshes.forEach((w) => { w.rotation.x -= 0.035; });

      } else if (currentMode === 'windtunnel') {
        const windTarget = 0.35;
        userRotationOffset += (windTarget - (userRotationOffset % (Math.PI * 2))) * 0.05;
        turntableGroup.rotation.y = userRotationOffset;

        streamParticles.visible = true;
        laserScanner.visible = false;
        const positions = streamParticles.geometry.attributes.position.array;
        for (let i = 0; i < streamCount; i++) {
          positions[i * 3] -= streamSpeeds[i] * 1.8;
          if (positions[i * 3] < -18) {
            positions[i * 3] = 18;
            positions[i * 3 + 1] = Math.random() * 4.5 - 0.5;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 11;
          }
        }
        streamParticles.geometry.attributes.position.needsUpdate = true;

        wheelMeshes.forEach((w) => { w.rotation.x -= 0.15; });
        gridHelper.position.x = (time * 12) % 4;

        beamMat.opacity = 0.28;
        carRoot.position.y = Math.sin(time * 8.0) * 0.02;

      } else if (currentMode === 'laserscan') {
        const scanTarget = 0.65;
        userRotationOffset += (scanTarget - (userRotationOffset % (Math.PI * 2))) * 0.05;
        turntableGroup.rotation.y = userRotationOffset;

        streamParticles.visible = false;
        laserScanner.visible = true;
        laserScanner.position.x = Math.sin(time * 1.8) * 6.8;
        sparkParticles.rotation.y = time * 3.5;
        beamMat.opacity = 0.15;
        carRoot.position.y = 0.08 + Math.sin(time * 1.2) * 0.03;
      }

      // Camera parallax tilt
      currentTilt += (targetTilt - currentTilt) * 0.05;
      camera.position.y = 8 + currentTilt * 4;

      // Pulse underglow
      cyanUnderglow.intensity = 3.8 + Math.sin(time * 3) * 1.2;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-auto">
      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Click and drag to rotate the 3D vehicle 360°"
      />

      {/* Interactive 3D Studio HUD Controls (Top-Right) */}
      <div className="hud-control absolute top-4 sm:top-6 right-4 sm:right-8 z-30 flex flex-col items-end gap-2.5 pointer-events-auto max-w-[280px] sm:max-w-none">
        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-1 p-1 sm:p-1.5 rounded-2xl bg-[#071228]/85 backdrop-blur-md border border-[#38bdf8]/40 shadow-2xl">
          <button
            onClick={() => handleModeChange('turntable')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[10px] sm:text-[11px] font-subheading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeMode === 'turntable'
                ? 'bg-gradient-to-r from-[#38bdf8] to-[#154c8a] text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            title="Studio 360° Turntable Mode"
          >
            <RotateCw size={13} />
            <span className="hidden sm:inline">360° Studio</span>
          </button>

          <button
            onClick={() => handleModeChange('windtunnel')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[10px] sm:text-[11px] font-subheading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeMode === 'windtunnel'
                ? 'bg-gradient-to-r from-[#38bdf8] to-[#154c8a] text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            title="Aerodynamic Wind Tunnel Mode"
          >
            <Wind size={13} />
            <span className="hidden sm:inline">Wind Tunnel</span>
          </button>

          <button
            onClick={() => handleModeChange('laserscan')}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-[10px] sm:text-[11px] font-subheading font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeMode === 'laserscan'
                ? 'bg-gradient-to-r from-[#38bdf8] to-[#154c8a] text-white shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            title="Ceramic Laser Inspection Mode"
          >
            <Zap size={13} />
            <span className="hidden sm:inline">Laser Scan</span>
          </button>
        </div>

        {/* Paint Finish Swatches & Hint */}
        <div className="flex items-center gap-2.5 sm:gap-3 px-3 py-1.5 sm:py-2 rounded-xl bg-[#071228]/80 backdrop-blur-md border border-white/10 shadow-lg">
          <span className="text-[10px] font-subheading uppercase font-bold text-gray-400 flex items-center gap-1">
            <Palette size={12} />
            <span className="hidden md:inline">Paint:</span>
          </span>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {Object.entries(paintColorMap).map(([key, col]) => (
              <button
                key={key}
                onClick={() => handleColorChange(key)}
                className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-transform hover:scale-125 cursor-pointer ${col.css} ${
                  activeColor === key ? 'ring-2 ring-[#38bdf8] scale-110' : 'opacity-70 hover:opacity-100'
                }`}
                title={`Switch paint finish to ${col.name}`}
              />
            ))}
          </div>
        </div>

        {/* Drag 360° Hint Badge */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#03050a]/70 border border-white/10 text-[10px] font-mono text-gray-400 backdrop-blur-md">
          <RotateCw size={11} />
          <span>Drag to rotate 360° in 3D</span>
        </div>
      </div>
    </div>
  );
}
