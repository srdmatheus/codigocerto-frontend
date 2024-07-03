"use client";

import { useEffect, useRef } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export const Line = () => {
  const isSmall = useMediaQuery("(max-width: 1200px)");
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (svgRef.current && pathRef.current) {
        const distance = window.scrollY;
        const totalDistance = svgRef.current.clientHeight - window.innerHeight;
        const percentage = distance / totalDistance;
        const pathLength = pathRef.current.getTotalLength();

        pathRef.current.style.strokeDasharray = `${pathLength}`;
        pathRef.current.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
      }
    };

    scroll();
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  if (isSmall) return null;

  return (
    <svg
      width="1000"
      height="2000"
      fill="none"
      viewBox="0 0 1000 2000"
      ref={svgRef}
      className="pointer-events-none absolute left-0 top-0 z-10 h-[200vw] w-[100vw] text-foreground opacity-10"
    >
      <path
        ref={pathRef}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="0.1rem"
        d="M-24.5 101C285 315 5.863 448.291 144.223 631.238c95.181 125.853 415.292 151.608 464.585-13.782 49.293-165.389-111.181-250.383-202.51-190.659-91.33 59.724-142.951 186.061-83.389 438.74C384.086 1125.06 79.399 1007.94 100 1261.99c44.222 545.36 719 63.01 413-119.49-360.283-214.875-558 774 678.5 709.5"
      />
    </svg>
  );
};
