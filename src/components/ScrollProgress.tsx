import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-[#c6a87d] via-[#d8bb91] to-[#581c87]"
      style={{ scaleX }}
    />
  );
}
