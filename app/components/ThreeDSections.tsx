"use client";

import { useRef, useMemo, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Globe Model ─── */
function Globe({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const materialRefs = useRef<THREE.Material[]>([]);

  const wireGeo = useMemo(() => new THREE.SphereGeometry(2, 36, 36), []);

  const dotGeo = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < 800; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 2.01;
      positions.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  const ringData = useMemo(() => {
    return [
      { radius: 2.8, rotation: [0.3, 0, 0.2] as [number, number, number] },
      { radius: 3.2, rotation: [-0.5, 0.8, 0] as [number, number, number] },
      { radius: 3.5, rotation: [0.1, -0.4, 0.6] as [number, number, number] },
    ].map((ring) => {
      const curve = new THREE.EllipseCurve(0, 0, ring.radius, ring.radius, 0, 2 * Math.PI, false, 0);
      const pts = curve.getPoints(100);
      const geo = new THREE.BufferGeometry().setFromPoints(pts.map((p) => new THREE.Vector3(p.x, 0, p.y)));
      return { geo, rotation: ring.rotation };
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) meshRef.current.rotation.y = t * 0.08;
    if (pointsRef.current) pointsRef.current.rotation.y = t * 0.08;
    if (ringsRef.current) ringsRef.current.rotation.y = t * 0.05;

    // Globe is visible immediately, only fades out on exit
    const exitP = Math.max((progress - 0.6) / 0.4, 0);
    const exit = 1 - Math.pow(1 - exitP, 3);
    const visibility = 1 - exit;

    // Position: sit on the right (+3.5), exit to left
    if (groupRef.current) {
      groupRef.current.position.x = 2.5 - 8 * exit;
      groupRef.current.position.y = -2 * exit;
    }

    materialRefs.current.forEach((mat) => {
      if (mat && "opacity" in mat) {
        (mat as THREE.MeshBasicMaterial).opacity = (mat.userData.baseOpacity ?? 0.12) * visibility;
      }
    });
  });

  const collectRef = (baseOpacity: number) => (mat: THREE.Material | null) => {
    if (mat) {
      mat.userData.baseOpacity = baseOpacity;
      if (!materialRefs.current.includes(mat)) materialRefs.current.push(mat);
    }
  };

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} geometry={wireGeo}>
        <meshBasicMaterial ref={collectRef(0.12)} color="#058B74" wireframe transparent opacity={0} />
      </mesh>
      <points ref={pointsRef} geometry={dotGeo}>
        <pointsMaterial ref={collectRef(0.6)} color="#058B74" size={0.02} transparent opacity={0} sizeAttenuation />
      </points>
      <group ref={ringsRef}>
        {ringData.map((ring, i) => (
          <lineLoop key={i} geometry={ring.geo} rotation={ring.rotation}>
            <lineBasicMaterial ref={collectRef(0.15 + i * 0.05)} color="#058B74" transparent opacity={0} />
          </lineLoop>
        ))}
      </group>
      <mesh>
        <sphereGeometry args={[2.05, 32, 32]} />
        <meshBasicMaterial ref={collectRef(0.03)} color="#058B74" transparent opacity={0} />
      </mesh>
    </group>
  );
}

/* ─── Shield Model ─── */
function Shield({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const materialRefs = useRef<THREE.Material[]>([]);

  // Large shield shape
  const shieldGeo = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 2.8);
    s.bezierCurveTo(1, 2.8, 2.2, 2.2, 2.5, 1.4);
    s.bezierCurveTo(2.8, 0.4, 2.7, -0.8, 2.2, -1.6);
    s.bezierCurveTo(1.7, -2.6, 0.8, -3.4, 0, -3.8);
    s.bezierCurveTo(-0.8, -3.4, -1.7, -2.6, -2.2, -1.6);
    s.bezierCurveTo(-2.7, -0.8, -2.8, 0.4, -2.5, 1.4);
    s.bezierCurveTo(-2.2, 2.2, -1, 2.8, 0, 2.8);
    return new THREE.ExtrudeGeometry(s, { depth: 0.4, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.1, bevelSegments: 4 });
  }, []);

  // Checkmark
  const checkGeo = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-1.1, -0.1);
    s.lineTo(-0.4, -1);
    s.lineTo(1.2, 0.8);
    s.lineTo(0.9, 1.1);
    s.lineTo(-0.4, -0.4);
    s.lineTo(-0.8, 0.2);
    s.closePath();
    return new THREE.ExtrudeGeometry(s, { depth: 0.2, bevelEnabled: false });
  }, []);

  // Orbital rings
  const ringData = useMemo(() => {
    return [
      { radius: 3.8, rotation: [0.3, 0.1, 0.2] as [number, number, number] },
      { radius: 4.2, rotation: [-0.4, 0.7, -0.1] as [number, number, number] },
      { radius: 4.6, rotation: [0.1, -0.3, 0.5] as [number, number, number] },
    ].map((ring) => {
      const curve = new THREE.EllipseCurve(0, 0, ring.radius, ring.radius, 0, 2 * Math.PI, false, 0);
      const pts = curve.getPoints(100);
      const geo = new THREE.BufferGeometry().setFromPoints(pts.map((p) => new THREE.Vector3(p.x, 0, p.y)));
      return { geo, rotation: ring.rotation };
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = t * 0.3;
    if (ringsRef.current) ringsRef.current.rotation.y = t * 0.1;

    const enterP = Math.min(progress / 0.4, 1);
    const exitP = Math.max((progress - 0.6) / 0.4, 0);
    const enter = 1 - Math.pow(1 - enterP, 3);
    const exit = 1 - Math.pow(1 - exitP, 3);
    const visibility = Math.min(enter, 1 - exit);

    if (groupRef.current) {
      groupRef.current.position.x = -2.5 + 8 * exit;
      groupRef.current.position.y = -2 * exit;
    }

    materialRefs.current.forEach((mat) => {
      if (mat && "opacity" in mat) {
        (mat as THREE.MeshStandardMaterial).opacity = (mat.userData.baseOpacity ?? 0.5) * visibility;
      }
    });
  });

  const c = (base: number) => (mat: THREE.Material | null) => {
    if (mat) { mat.userData.baseOpacity = base; if (!materialRefs.current.includes(mat)) materialRefs.current.push(mat); }
  };

  return (
    <group>
      <group ref={groupRef} scale={0.55}>
        {/* Shield wireframe */}
        <mesh geometry={shieldGeo} position={[0, 0.3, -0.2]}>
          <meshStandardMaterial ref={c(0.12)} color="#058B74" wireframe transparent opacity={0} />
        </mesh>
        {/* Shield solid */}
        <mesh geometry={shieldGeo} position={[0, 0.3, -0.2]}>
          <meshStandardMaterial ref={c(0.04)} color="#058B74" transparent opacity={0} side={THREE.DoubleSide} />
        </mesh>
        {/* Checkmark */}
        <mesh geometry={checkGeo} position={[0, -0.1, 0.15]}>
          <meshStandardMaterial ref={c(0.5)} color="#058B74" transparent opacity={0} />
        </mesh>

        {/* Rings */}
        <group ref={ringsRef}>
          {ringData.map((ring, i) => (
            <lineLoop key={i} geometry={ring.geo} rotation={ring.rotation}>
              <lineBasicMaterial ref={c(0.1 + i * 0.04)} color="#058B74" transparent opacity={0} />
            </lineLoop>
          ))}
        </group>
      </group>
    </group>
  );
}

/* ─── Network Model ─── */
function Helix({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRefs = useRef<THREE.Material[]>([]);

  // Network nodes in a 3D cluster
  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [
      [0, 0, 0],         // center hub
      [-1.5, 1.2, 0.5],  [1.4, 1.0, -0.3],
      [-0.8, -1.3, 0.8], [1.6, -0.8, 0.4],
      [0.3, 1.8, -1],    [-1.2, -0.5, -1.2],
      [0.8, 0.3, 1.5],   [-0.5, 1.5, 1.2],
      [1.8, 0.5, 1],     [-1.8, 0.2, 0.3],
    ];
    return positions;
  }, []);

  // Connections from hub to each node + some cross-links
  const connections = useMemo(() => {
    const links: [number, number][] = [];
    // Hub to all
    for (let i = 1; i < nodes.length; i++) links.push([0, i]);
    // Some cross-links
    links.push([1, 5], [2, 4], [3, 6], [7, 8], [9, 2], [10, 3], [1, 8]);
    return links.map(([a, b]) =>
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...nodes[a]),
        new THREE.Vector3(...nodes[b]),
      ])
    );
  }, [nodes]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = t * 0.15;

    const enterP = Math.min(progress / 0.4, 1);
    const enter = 1 - Math.pow(1 - enterP, 3);

    if (groupRef.current) {
      groupRef.current.position.x = 2.5;
      groupRef.current.position.y = 0;
    }

    materialRefs.current.forEach((mat) => {
      if (mat && "opacity" in mat) {
        (mat as THREE.MeshBasicMaterial).opacity = (mat.userData.baseOpacity ?? 0.5) * enter;
      }
    });
  });

  const c = (base: number) => (mat: THREE.Material | null) => {
    if (mat) { mat.userData.baseOpacity = base; if (!materialRefs.current.includes(mat)) materialRefs.current.push(mat); }
  };

  return (
    <group>
      <group ref={groupRef} scale={0.7}>
        {/* Center hub — larger */}
        <mesh position={nodes[0]}>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial ref={c(0.2)} color="#058B74" wireframe transparent opacity={0} />
        </mesh>
        <mesh position={nodes[0]}>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial ref={c(0.06)} color="#058B74" transparent opacity={0} />
        </mesh>

        {/* Outer nodes */}
        {nodes.slice(1).map((pos, i) => (
          <mesh key={`n${i}`} position={pos}>
            <octahedronGeometry args={[0.12, 0]} />
            <meshStandardMaterial ref={c(0.4)} color="#058B74" transparent opacity={0} />
          </mesh>
        ))}

        {/* Connection lines */}
        {connections.map((geo, i) => (
          <lineSegments key={`c${i}`} geometry={geo}>
            <lineBasicMaterial ref={c(0.15)} color="#058B74" transparent opacity={0} />
          </lineSegments>
        ))}
      </group>
    </group>
  );
}

/* ─── Camera Controller ─── */
function CameraController({ scrollProgress }: { scrollProgress: number }) {
  useFrame(({ camera }) => {
    // Two phases: 0→0.5 = globe (right→left), 0.5→1 = shield (left→right)
    const isGlobe = scrollProgress <= 0.5;
    const phaseProgress = isGlobe ? scrollProgress * 2 : (scrollProgress - 0.5) * 2;

    const enterP = Math.min(phaseProgress / 0.4, 1);
    const exitP = Math.max((phaseProgress - 0.6) / 0.4, 0);
    const enter = 1 - Math.pow(1 - enterP, 3);
    const exit = 1 - Math.pow(1 - exitP, 3);

    // Camera stays centered, models move themselves
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 7.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Floating Particles ─── */
function Particles() {
  const ref = useRef<THREE.Points>(null);
  const geo = useMemo(() => {
    const pos: number[] = [];
    for (let i = 0; i < 150; i++) pos.push((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    return g;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial color="#058B74" size={0.03} transparent opacity={0.2} sizeAttenuation />
    </points>
  );
}

/* ─── Main Component ─── */
export default function ThreeDSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const scrolled = -rect.top;
    setScrollProgress(Math.max(0, Math.min(scrolled / total, 1)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Phase progress for each model (0→1 within its own phase)
  // 3 phases: 0→0.333 = globe, 0.333→0.666 = shield, 0.666→1 = helix
  const globeProgress = scrollProgress <= 0.333 ? scrollProgress * 3 : 1;
  const shieldProgress = scrollProgress > 0.333 && scrollProgress <= 0.666 ? (scrollProgress - 0.333) * 3 : scrollProgress > 0.666 ? 1 : 0;
  const helixProgress = scrollProgress > 0.666 ? (scrollProgress - 0.666) * 3 : 0;

  return (
    <div ref={containerRef} className="relative bg-white" style={{ height: "300vh" }}>
      {/* Sticky canvas */}
      <div className="sticky top-0 h-screen w-full">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: "transparent", width: "100%", height: "100%" }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <Globe progress={globeProgress} />
          <Shield progress={shieldProgress} />
          <Helix progress={helixProgress} />
          <CameraController scrollProgress={scrollProgress} />
          <Particles />
        </Canvas>

        {/* Text overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full flex items-center px-6">
            <div className="mx-auto max-w-7xl w-full">
              {/* Globe text — phase 1 */}
              <div
                className="transition-all duration-500 pointer-events-auto"
                style={{
                  opacity: scrollProgress < 0.25 ? 1 : Math.max(0, 1 - (scrollProgress - 0.25) / 0.08),
                  transform: `translateY(${scrollProgress > 0.25 ? (scrollProgress - 0.25) * 200 : 0}px)`,
                }}
              >
                <div className="md:w-1/2">
                  <p className="text-sm font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                    Global Screening
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
                    Screening Without{" "}
                    <span className="text-[#058B74]">Borders</span>
                  </h2>
                  <p className="mt-6 text-gray-500 leading-relaxed max-w-lg">
                    Run background checks across 200+ countries and territories.
                    Our platform connects to international databases, court systems,
                    and verification networks — delivering fast, compliant results
                    no matter where your candidates are.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-6">
                    {[
                      { value: "200+", label: "Countries Covered" },
                      { value: "50+", label: "Database Sources" },
                      { value: "< 24hr", label: "Avg. Turnaround" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-bold text-[#01463A]">{stat.value}</div>
                        <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <a href="#services" className="inline-flex items-center gap-2 bg-[#01463A] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#01463A]/90 transition-colors">
                      Explore Global Coverage
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Shield text — phase 2 */}
              <div
                className="absolute inset-0 flex items-center px-6 transition-all duration-500 pointer-events-auto"
                style={{
                  opacity: scrollProgress < 0.38 ? 0 : scrollProgress < 0.48 ? (scrollProgress - 0.38) / 0.1 : scrollProgress < 0.58 ? 1 : Math.max(0, 1 - (scrollProgress - 0.58) / 0.08),
                  transform: `translateY(${scrollProgress < 0.38 ? 40 : 0}px)`,
                }}
              >
                <div className="mx-auto max-w-7xl w-full">
                  <div className="md:w-1/2 md:ml-auto md:text-right">
                    <p className="text-sm font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                      Security & Compliance
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
                      Built on{" "}
                      <span className="text-[#058B74]">Trust</span>
                    </h2>
                    <p className="mt-6 text-gray-500 leading-relaxed max-w-lg md:ml-auto">
                      Every report is backed by enterprise-grade security. SOC 2 Type II
                      certified, FCRA compliant, and end-to-end encrypted — so your
                      candidate data stays protected at every step.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-6 md:justify-end">
                      {[
                        { value: "SOC 2", label: "Type II Certified" },
                        { value: "FCRA", label: "Fully Compliant" },
                        { value: "256-bit", label: "Encryption" },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl font-bold text-[#01463A]">{stat.value}</div>
                          <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-10 md:flex md:justify-end">
                      <a href="#about" className="inline-flex items-center gap-2 bg-[#01463A] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#01463A]/90 transition-colors">
                        Learn About Security
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Helix text — phase 3 */}
              <div
                className="absolute inset-0 flex items-center px-6 transition-all duration-500 pointer-events-auto"
                style={{
                  opacity: scrollProgress < 0.72 ? 0 : scrollProgress < 0.82 ? (scrollProgress - 0.72) / 0.1 : 1,
                  transform: `translateY(${scrollProgress < 0.72 ? 40 : 0}px)`,
                }}
              >
                <div className="mx-auto max-w-7xl w-full">
                  <div className="md:w-1/2">
                    <p className="text-sm font-semibold tracking-widest uppercase text-[#058B74] mb-3">
                      API & Integrations
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#01463A] leading-tight">
                      Plug Into Your{" "}
                      <span className="text-[#058B74]">Workflow</span>
                    </h2>
                    <p className="mt-6 text-gray-500 leading-relaxed max-w-lg">
                      Connect Atlas Screening directly into your ATS, HRIS, or
                      custom platform. Our RESTful API and pre-built integrations
                      let you trigger checks, receive webhooks, and automate
                      your entire hiring pipeline.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-6">
                      {[
                        { value: "REST", label: "API Access" },
                        { value: "30+", label: "Integrations" },
                        { value: "< 5min", label: "Setup Time" },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl font-bold text-[#01463A]">{stat.value}</div>
                          <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-10">
                      <a href="#services" className="inline-flex items-center gap-2 bg-[#01463A] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#01463A]/90 transition-colors">
                        View API Docs
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
