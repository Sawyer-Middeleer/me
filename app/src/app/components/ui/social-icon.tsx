"use client";

import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

type SocialIconProps = PropsWithChildren<{
  href: string;
  label: string;
}>;

export default function SocialIcon({ href, label, children }: SocialIconProps) {
  const [isHover, setIsHover] = useState(false);
  const hue = useMotionValue(0);

  useEffect(() => {
    const controls = animate(hue, [0, 360], {
      duration: 6,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [hue]);

  const glow = useMotionTemplate`radial-gradient(140px 140px at 50% 50%, hsl(${hue} 95% 60% / 0.70), hsl(calc(${hue} + 120) 95% 60% / 0.55), hsl(calc(${hue} + 240) 95% 60% / 0.42), transparent 65%)`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      style={{ position: "relative", display: "inline-flex", padding: 8 }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          inset: -12,
          borderRadius: 12,
          filter: "blur(16px)",
          backgroundImage: glow,
          opacity: isHover ? 1 : 0,
          pointerEvents: "none",
        }}
      />
      {children}
    </motion.a>
  );
}


