"use client";

import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * A chiselled block: a monolith with one corner cut away. The cut face is
 * the only colour, echoing the dot in the wordmark. On devices with a fine
 * pointer the block tilts toward the cursor and a spotlight follows it
 * across the grid.
 */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 80, damping: 20, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-1, 1], [-9, 9]), spring);
  const rotateX = useSpring(useTransform(py, [-1, 1], [7, -7]), spring);
  const chipX = useSpring(useTransform(px, [-1, 1], [-10, 10]), spring);
  const chipY = useSpring(useTransform(py, [-1, 1], [-8, 8]), spring);

  useEffect(() => {
    const host = ref.current?.closest<HTMLElement>("[data-hero]");
    if (!host || reduce || !window.matchMedia("(pointer: fine)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        host.style.setProperty("--spot-x", `${x * 100}%`);
        host.style.setProperty("--spot-y", `${y * 100}%`);
        px.set(x * 2 - 1);
        py.set(y * 2 - 1);
      });
    };
    host.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onMove);
    };
  }, [px, py, reduce]);

  return (
    <div ref={ref} className="pointer-events-none select-none [perspective:1200px]" aria-hidden="true">
      <m.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <svg viewBox="0 0 420 540" className="h-auto w-full overflow-visible">
          {/* the block, its top right corner cut away */}
          <path d="M60 40h230l70 70v390H60z" fill="#151724" stroke="rgb(248 249 255 / 0.14)" />
          {/* faint strata */}
          <g stroke="rgb(248 249 255 / 0.05)">
            {Array.from({ length: 10 }, (_, i) => (
              <path key={i} d={`M60 ${150 + i * 35}h300`} />
            ))}
          </g>
          {/* the cut face */}
          <path d="M290 40l70 70-18 18-70-70z" fill="#648BFF" />
        </svg>
        <m.svg
          viewBox="0 0 420 540"
          style={{ x: chipX, y: chipY }}
          className="absolute inset-0 h-auto w-full overflow-visible"
        >
          <path d="M372 58l14-5-5 14z" fill="#9A86FF" />
          <path d="M392 104l11 4-10 6z" fill="#648BFF" opacity="0.7" />
          <path d="M352 22l8-8 2 11z" fill="#F8F9FF" opacity="0.45" />
        </m.svg>
      </m.div>
    </div>
  );
}
