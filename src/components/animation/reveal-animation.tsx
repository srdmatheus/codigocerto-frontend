"use client";

import { ReactNode, useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

type RevealAnimationProps = {
  children: ReactNode;
  width?: "fit-content" | "100%";
};

export const RevealAnimation = ({
  children,
  width = "fit-content"
}: RevealAnimationProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-2 left-0 right-0 top-2 z-20 bg-primary"
      />
    </div>
  );
};
