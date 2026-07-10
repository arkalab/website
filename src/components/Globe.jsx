"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useTranslations } from "next-intl";

// Client locations: [latitude, longitude] in degrees; labels come from
// the HomePage.Projects.countries messages, keyed by id
const LOCATIONS = [
  { location: [-22.9068, -43.1729], id: "br" },
  { location: [38.9072, -77.0369], id: "us" },
  { location: [52.52, 13.405], id: "ge" },
  { location: [47.3769, 8.5417], id: "ch", labelBelow: true },
  { location: [33.8938, 35.5018], id: "lb" },
];

const THETA = 0.25;

// Replicates cobe's internal marker projection (square canvas, scale 1,
// no offset, default markerElevation 0.05) so labels can be positioned
// with plain left/top — CSS anchor positioning is Chrome-only.
function project([lat, lng], phi, theta) {
  const la = (lat * Math.PI) / 180;
  const lo = (lng * Math.PI) / 180 - Math.PI;
  const r = 0.8 + 0.05;
  const v = [
    -Math.cos(la) * Math.cos(lo) * r,
    Math.sin(la) * r,
    Math.cos(la) * Math.sin(lo) * r,
  ];
  const cp = Math.cos(phi);
  const sp = Math.sin(phi);
  const ct = Math.cos(theta);
  const st = Math.sin(theta);
  const x = cp * v[0] + sp * v[2];
  const y = sp * st * v[0] + ct * v[1] - cp * st * v[2];
  const z = -sp * ct * v[0] + st * v[1] + cp * ct * v[2];
  return {
    x: (x + 1) / 2,
    y: (1 - y) / 2,
    visible: z >= 0 || x * x + y * y >= 0.64,
  };
}

export default function Globe() {
  const t = useTranslations("HomePage.Projects.countries");
  const canvasRef = useRef(null);
  const labelRefs = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    let phi = 4.1;
    let width = canvas.offsetWidth;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 4.1,
      theta: THETA,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      mapBaseBrightness: 0.05,
      baseColor: [0.15, 0.42, 0.48],
      markerColor: [0.6, 0.95, 1],
      glowColor: [0.08, 0.35, 0.4],
      markers: LOCATIONS.map(({ location }) => ({ location, size: 0.03 })),
      // arcs: LOCATIONS.map(({ location }) => ({ from: location, to: LOCATIONS[0].location }))
    });

    const updateLabels = () => {
      for (const { location, id } of LOCATIONS) {
        const el = labelRefs.current[id];
        if (!el) continue;
        const { x, y, visible } = project(location, phi, THETA);
        el.style.left = `${x * 100}%`;
        el.style.top = `${y * 100}%`;
        el.style.opacity = visible ? "1" : "0";
      }
    };
    updateLabels();

    let drag = null; // { x, phi } while a pointer is down

    // cobe v2 has no internal animation loop; drive the auto-spin (and
    // the first paint of the async-loaded world texture) ourselves,
    // pausing while the user drags
    let frame = requestAnimationFrame(function tick() {
      if (!drag) phi += 0.004;
      globe.update({ phi });
      updateLabels();
      frame = requestAnimationFrame(tick);
    });

    const onResize = () => {
      width = canvas.offsetWidth;
      globe.update({ width: width * 2, height: width * 2 });
    };
    window.addEventListener("resize", onResize);

    const onPointerDown = (e) => {
      drag = { x: e.clientX, phi };
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onPointerMove = (e) => {
      if (!drag) return;
      phi = drag.phi + ((e.clientX - drag.x) / width) * Math.PI;
    };
    const onPointerUp = () => {
      drag = null;
      canvas.style.cursor = "grab";
    };
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      globe.destroy();
    };
  }, []);

  return (
    <div
      style={{ maxWidth: 480, aspectRatio: "1" }}
      className="relative w-full"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          cursor: "grab",
          touchAction: "pan-y",
        }}
      />
      {LOCATIONS.map(({ id, labelBelow }) => (
        <div
          key={id}
          ref={(el) => (labelRefs.current[id] = el)}
          className={labelBelow ? "marker-label marker-label-below" : "marker-label"}
        >
          {t(id)}
        </div>
      ))}
    </div>
  );
}
