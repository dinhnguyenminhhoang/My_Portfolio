"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.opacity = "1";
      }
    };

    const hideCursor = () => {
      if (cursor) {
        cursor.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className="fixed top-0 left-0 w-4 h-4 bg-rose-500 rounded-full pointer-events-none mix-blend-difference opacity-0 transition-all duration-300 ease-out z-[999]"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
