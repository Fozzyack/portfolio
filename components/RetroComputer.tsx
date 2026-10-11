"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

const roles = [
    "SOFTWARE ENGINEER",
    "TECH ENTHUSIAST",
    "HACKATHON ENJOYER",
    "PC BUILDER",
];

export default function RetroComputer({
    onReady,
}: {
    onReady: (ready: boolean) => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let renderer: THREE.WebGLRenderer;
        try {
            renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true,
                powerPreference: "low-power",
            });
        } catch {
            // The HTML terminal stays visible if WebGL is unavailable.
            onReady(false);
            return;
        }

        const styles = getComputedStyle(document.documentElement);
        const color = (token: string) => styles.getPropertyValue(token).trim();
        const palette = {
            base: color("--background"),
            mantle: color("--mantle"),
            surface: color("--surface"),
            cream: color("--foreground"),
            bright: color("--cream"),
            muted: color("--muted"),
            accent: color("--accent"),
            teal: color("--teal"),
            green: color("--green"),
        };
        const font = styles.getPropertyValue("--font-geist-mono").trim();
        const motion = matchMedia("(prefers-reduced-motion: reduce)");
        let reducedMotion = motion.matches;
        let disposed = false;
        let inView = true;
        let contextLost = false;
        let frame = 0;
        let lastFrame = 0;
        let lastTerminalState = "";
        const startedAt = performance.now();

        renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.15;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.domElement.setAttribute("aria-hidden", "true");
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
        const computer = new THREE.Group();
        scene.add(computer);

        const plastic = new THREE.MeshStandardMaterial({
            color: palette.cream,
            roughness: 0.72,
        });
        const darkPlastic = new THREE.MeshStandardMaterial({
            color: palette.surface,
            roughness: 0.85,
        });
        const keyPlastic = new THREE.MeshStandardMaterial({
            color: palette.bright,
            roughness: 0.68,
        });
        const orangePlastic = new THREE.MeshStandardMaterial({
            color: palette.accent,
            roughness: 0.6,
        });
        const tealPlastic = new THREE.MeshStandardMaterial({
            color: palette.teal,
            roughness: 0.7,
        });

        const box = (
            width: number,
            height: number,
            depth: number,
            material: THREE.Material,
            x: number,
            y: number,
            z: number,
            radius = 0.04,
        ) => {
            const mesh = new THREE.Mesh(
                new RoundedBoxGeometry(width, height, depth, 3, radius),
                material,
            );
            mesh.position.set(x, y, z);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            computer.add(mesh);
            return mesh;
        };

        // A deep, rounded CRT enclosure, not a flat terminal window.
        box(3.8, 3.05, 1.6, plastic, 0, 0.38, -0.15, 0.16);
        box(3.35, 2.47, 0.16, darkPlastic, 0, 0.57, 0.68, 0.12);
        box(1.0, 0.48, 0.8, plastic, 0, -1.34, -0.15, 0.07);
        box(1.85, 0.18, 1.2, plastic, 0, -1.61, -0.05, 0.07);

        // Side and front ventilation slots make the depth legible.
        for (let i = 0; i < 12; i++) {
            box(0.012, 0.65, 0.035, darkPlastic, 1.905, 0.75, -0.7 + i * 0.08);
            box(0.012, 0.65, 0.035, darkPlastic, -1.905, 0.75, -0.7 + i * 0.08);
        }
        for (let i = 0; i < 9; i++) {
            box(0.018, 0.14, 0.018, darkPlastic, 0.5 + i * 0.065, -0.88, 0.657);
        }

        const powerLight = new THREE.Mesh(
            new THREE.SphereGeometry(0.035, 12, 8),
            new THREE.MeshStandardMaterial({
                color: palette.accent,
                emissive: palette.accent,
                emissiveIntensity: 2,
            }),
        );
        powerLight.position.set(1.36, -0.87, 0.68);
        computer.add(powerLight);
        const powerButton = new THREE.Mesh(
            new THREE.CylinderGeometry(0.095, 0.095, 0.045, 24),
            darkPlastic,
        );
        powerButton.rotation.x = Math.PI / 2;
        powerButton.position.set(1.61, -0.87, 0.675);
        computer.add(powerButton);

        const labelCanvas = document.createElement("canvas");
        labelCanvas.width = 512;
        labelCanvas.height = 128;
        const labelContext = labelCanvas.getContext("2d");
        const drawLabel = () => {
            if (!labelContext) return;
            labelContext.clearRect(0, 0, 512, 128);
            labelContext.fillStyle = palette.surface;
            labelContext.font = `bold 54px ${font}, monospace`;
            labelContext.fillText("FS", 12, 85);
            labelContext.font = `20px ${font}, monospace`;
            labelContext.fillText("PERSONAL COMPUTER", 112, 60);
            labelContext.fillText("MODEL 01", 112, 90);
        };
        drawLabel();
        const labelTexture = new THREE.CanvasTexture(labelCanvas);
        labelTexture.colorSpace = THREE.SRGBColorSpace;
        const label = new THREE.Mesh(
            new THREE.PlaneGeometry(1.22, 0.305),
            new THREE.MeshBasicMaterial({
                map: labelTexture,
                transparent: true,
                toneMapped: false,
            }),
        );
        label.position.set(-0.95, -0.87, 0.658);
        computer.add(label);

        // The terminal is painted into a texture on a gently convex screen.
        const terminalCanvas = document.createElement("canvas");
        terminalCanvas.width = 1024;
        terminalCanvas.height = 720;
        const context = terminalCanvas.getContext("2d");
        const terminalTexture = new THREE.CanvasTexture(terminalCanvas);
        terminalTexture.colorSpace = THREE.SRGBColorSpace;
        terminalTexture.anisotropy = Math.min(
            renderer.capabilities.getMaxAnisotropy(),
            4,
        );
        const screenGeometry = new THREE.PlaneGeometry(3.02, 2.13, 32, 24);
        const vertices = screenGeometry.attributes.position;
        for (let i = 0; i < vertices.count; i++) {
            const x = vertices.getX(i) / 1.51;
            const y = vertices.getY(i) / 1.065;
            vertices.setZ(i, 0.055 * (1 - x * x) * (1 - y * y));
        }
        screenGeometry.computeVertexNormals();
        const screen = new THREE.Mesh(
            screenGeometry,
            new THREE.MeshBasicMaterial({
                map: terminalTexture,
                toneMapped: false,
            }),
        );
        screen.position.set(0, 0.57, 0.77);
        computer.add(screen);

        // A full keyboard with individual keycaps and contrasting keys.
        box(3.45, 0.2, 1.18, plastic, -0.16, -1.55, 1.65, 0.06);
        const keyGeometry = new RoundedBoxGeometry(0.235, 0.1, 0.18, 2, 0.025);
        for (let row = 0; row < 4; row++) {
            for (let column = 0; column < 12; column++) {
                const material =
                    row === 0 && column === 0
                        ? orangePlastic
                        : column === 11
                          ? tealPlastic
                          : keyPlastic;
                const key = new THREE.Mesh(keyGeometry, material);
                key.position.set(
                    -1.62 + column * 0.265,
                    -1.405,
                    1.25 + row * 0.225,
                );
                key.castShadow = true;
                computer.add(key);
            }
        }
        box(1.35, 0.1, 0.16, keyPlastic, -0.15, -1.405, 2.1, 0.025);

        const mouse = new THREE.Mesh(
            new THREE.SphereGeometry(1, 24, 16),
            plastic,
        );
        mouse.scale.set(0.27, 0.15, 0.4);
        mouse.position.set(2.04, -1.55, 1.64);
        mouse.castShadow = true;
        computer.add(mouse);
        box(0.012, 0.016, 0.24, darkPlastic, 2.04, -1.4, 1.49, 0.003);
        const cablePath = new THREE.CatmullRomCurve3([
            new THREE.Vector3(2.04, -1.62, 1.28),
            new THREE.Vector3(2.2, -1.65, 0.9),
            new THREE.Vector3(2.4, -1.65, 0.2),
            new THREE.Vector3(1.1, -1.65, -0.8),
        ]);
        computer.add(
            new THREE.Mesh(
                new THREE.TubeGeometry(cablePath, 32, 0.015, 6, false),
                darkPlastic,
            ),
        );

        const floor = new THREE.Mesh(
            new THREE.CircleGeometry(7, 64),
            new THREE.MeshStandardMaterial({
                color: palette.base,
                roughness: 1,
            }),
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -1.72;
        floor.receiveShadow = true;
        scene.add(floor);

        scene.add(
            new THREE.HemisphereLight(palette.bright, palette.surface, 2),
        );
        const keyLight = new THREE.DirectionalLight(palette.bright, 4);
        keyLight.position.set(-3, 6, 5);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.set(1024, 1024);
        keyLight.shadow.camera.left = -5;
        keyLight.shadow.camera.right = 5;
        keyLight.shadow.camera.top = 5;
        keyLight.shadow.camera.bottom = -5;
        keyLight.shadow.normalBias = 0.035;
        scene.add(keyLight);
        const rimLight = new THREE.DirectionalLight(palette.teal, 2.5);
        rimLight.position.set(4, 2, -3);
        scene.add(rimLight);
        const screenLight = new THREE.PointLight(palette.teal, 2, 5);
        screenLight.position.set(0, 0.4, 1.5);
        scene.add(screenLight);

        const drawTerminal = (elapsed: number) => {
            if (!context) return;
            const firstName = "Frasier".slice(
                0,
                reducedMotion
                    ? 7
                    : Math.max(0, Math.floor((elapsed - 0.4) * 12)),
            );
            const lastName = "Sundra.".slice(
                0,
                reducedMotion ? 7 : Math.max(0, Math.floor((elapsed - 1) * 12)),
            );
            const role = reducedMotion
                ? 0
                : Math.floor(elapsed / 4) % roles.length;
            const cursor = reducedMotion || Math.floor(elapsed * 2) % 2 === 0;
            const state = `${firstName}/${lastName}/${role}/${cursor}`;
            if (state === lastTerminalState) return;
            lastTerminalState = state;

            context.fillStyle = palette.base;
            context.fillRect(0, 0, 1024, 720);
            const glow = context.createRadialGradient(
                512,
                280,
                20,
                512,
                360,
                650,
            );
            glow.addColorStop(0, `${palette.teal}16`);
            glow.addColorStop(1, `${palette.teal}00`);
            context.fillStyle = glow;
            context.fillRect(0, 0, 1024, 720);

            context.font = `24px ${font}, monospace`;
            context.fillStyle = palette.teal;
            context.fillText("FRASIER.OS / PERSONAL TERMINAL", 54, 52);
            context.fillText("TTY 01", 870, 52);
            context.fillStyle = palette.surface;
            context.fillRect(54, 76, 916, 2);

            context.font = `23px ${font}, monospace`;
            context.fillStyle = palette.green;
            context.fillText("[ OK ] Personal system initialised.", 54, 130);
            context.fillStyle = palette.muted;
            context.fillText(
                "[ OK ] Connection established / Perth, WA",
                54,
                172,
            );
            context.fillStyle = palette.teal;
            context.fillText("visitor@frasier:~", 54, 240);
            context.fillStyle = palette.accent;
            context.fillText("$", 290, 240);
            context.fillStyle = palette.cream;
            context.fillText("whoami", 325, 240);

            context.font = `500 112px ${font}, monospace`;
            context.shadowColor = `${palette.cream}50`;
            context.shadowBlur = 12;
            context.fillText(firstName, 48, 365);
            context.fillText(lastName.replace(".", ""), 48, 477);
            if (lastName.endsWith(".")) {
                context.fillStyle = palette.accent;
                context.fillText(
                    ".",
                    48 + context.measureText("Sundra").width,
                    477,
                );
            }
            context.shadowBlur = 0;
            context.fillStyle = palette.teal;
            context.font = `28px ${font}, monospace`;
            context.fillText(`> ${roles[role]}`, 54, 543);
            context.fillStyle = palette.cream;
            context.font = `23px ${font}, monospace`;
            context.fillText(
                "Building useful software. Tinkering with hardware.",
                54,
                596,
            );
            context.fillText("Following my curiosity.", 54, 630);
            context.fillStyle = palette.accent;
            context.fillText("$", 54, 686);
            if (cursor) context.fillRect(87, 665, 14, 25);
            context.fillStyle = palette.muted;
            context.font = `18px ${font}, monospace`;
            context.fillText("SYSTEM READY", 825, 686);

            // Static scanlines: CRT character without flashing the screen.
            context.fillStyle = `${palette.mantle}35`;
            for (let y = 0; y < 720; y += 4) {
                context.fillRect(0, y, 1024, 1);
            }
            const reflection = context.createLinearGradient(0, 0, 650, 720);
            reflection.addColorStop(0, `${palette.bright}0a`);
            reflection.addColorStop(0.6, `${palette.bright}00`);
            context.fillStyle = reflection;
            context.fillRect(0, 0, 1024, 720);
            terminalTexture.needsUpdate = true;
        };

        const pointer = new THREE.Vector2();
        computer.rotation.y = -0.16;
        const resize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            if (!width || !height) return;
            camera.aspect = width / height;
            // Fit the whole desk setup on narrow screens as well as desktops.
            const distance = Math.max(9.2, 9.8 / camera.aspect);
            camera.position.set(0, distance * 0.17, distance);
            camera.lookAt(0, -0.3, 0.35);
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            resume();
        };
        const onPointerMove = (event: PointerEvent) => {
            if (reducedMotion || event.pointerType === "touch") return;
            const rect = container.getBoundingClientRect();
            pointer.set(
                ((event.clientX - rect.left) / rect.width - 0.5) * 2,
                ((event.clientY - rect.top) / rect.height - 0.5) * 2,
            );
        };
        const onPointerLeave = () => pointer.set(0, 0);
        const render = (now: number) => {
            frame = 0;
            if (disposed || contextLost || !inView || document.hidden) return;
            if (reducedMotion || now - lastFrame >= 1000 / 30) {
                const delta = Math.min((now - lastFrame) / 1000, 0.1);
                lastFrame = now;
                computer.rotation.y = THREE.MathUtils.damp(
                    computer.rotation.y,
                    -0.16 + (reducedMotion ? 0 : pointer.x * 0.22),
                    5,
                    delta,
                );
                computer.rotation.x = THREE.MathUtils.damp(
                    computer.rotation.x,
                    reducedMotion ? 0 : pointer.y * 0.055,
                    5,
                    delta,
                );
                drawTerminal((now - startedAt) / 1000);
                renderer.render(scene, camera);
            }
            if (!reducedMotion) frame = requestAnimationFrame(render);
        };
        const resume = () => {
            if (
                !frame &&
                !disposed &&
                !contextLost &&
                inView &&
                !document.hidden
            ) {
                frame = requestAnimationFrame(render);
            }
        };
        const onMotionChange = () => {
            reducedMotion = motion.matches;
            pointer.set(0, 0);
            lastTerminalState = "";
            resume();
        };
        const onContextLost = (event: Event) => {
            event.preventDefault();
            contextLost = true;
            cancelAnimationFrame(frame);
            frame = 0;
            onReady(false);
            container.style.opacity = "0";
        };
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            inView = entry.isIntersecting;
            resume();
        });
        intersectionObserver.observe(container);
        container.addEventListener("pointermove", onPointerMove);
        container.addEventListener("pointerleave", onPointerLeave);
        renderer.domElement.addEventListener("webglcontextlost", onContextLost);
        document.addEventListener("visibilitychange", resume);
        motion.addEventListener("change", onMotionChange);

        resize();
        drawTerminal(0);
        renderer.render(scene, camera);
        onReady(true);
        container.style.opacity = "1";
        resume();
        void document.fonts.ready.then(() => {
            if (!disposed) {
                lastTerminalState = "";
                drawLabel();
                labelTexture.needsUpdate = true;
                resume();
            }
        });

        return () => {
            disposed = true;
            cancelAnimationFrame(frame);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            container.removeEventListener("pointermove", onPointerMove);
            container.removeEventListener("pointerleave", onPointerLeave);
            renderer.domElement.removeEventListener(
                "webglcontextlost",
                onContextLost,
            );
            document.removeEventListener("visibilitychange", resume);
            motion.removeEventListener("change", onMotionChange);
            const geometries = new Set<THREE.BufferGeometry>();
            const materials = new Set<THREE.Material>();
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    geometries.add(object.geometry);
                    const entries = Array.isArray(object.material)
                        ? object.material
                        : [object.material];
                    entries.forEach((material) => materials.add(material));
                }
            });
            geometries.forEach((geometry) => geometry.dispose());
            materials.forEach((material) => material.dispose());
            terminalTexture.dispose();
            labelTexture.dispose();
            keyLight.shadow.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
            renderer.domElement.remove();
        };
    }, [onReady]);

    return (
        <div className="webgl-computer" ref={containerRef} aria-hidden="true" />
    );
}
