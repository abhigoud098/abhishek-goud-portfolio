"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

/**
 * Tracks the pointer position and exposes it through a mutable ref rather
 * than state, so consumers can read it inside a rAF loop without triggering
 * a re-render on every pixel of movement.
 */
export function useMousePosition() {
  const position = useRef<Point>({ x: 0, y: 0 });
  const normalized = useRef<Point>({ x: 0, y: 0 }); // -1 to 1, relative to viewport center

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
      normalized.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return { position, normalized };
}
