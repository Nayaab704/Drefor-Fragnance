import type { Variants } from "framer-motion";

const motionTransition = {
  duration: 0.78,
  ease: "easeOut",
} as const;

const reducedTransition = {
  duration: 0.01,
} as const;

export const viewportReveal = {
  once: true,
  amount: 0.24,
  margin: "0px 0px -90px 0px",
} as const;

export function fadeUp(reducedMotion = false, distance = 24): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: reducedMotion ? reducedTransition : motionTransition,
    },
  };
}

export function fadeInLeft(reducedMotion = false, distance = 32): Variants {
  return {
    hidden: {
      opacity: 0,
      x: reducedMotion ? 0 : -distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: reducedMotion ? reducedTransition : motionTransition,
    },
  };
}

export function fadeInRight(reducedMotion = false, distance = 32): Variants {
  return {
    hidden: {
      opacity: 0,
      x: reducedMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: reducedMotion ? reducedTransition : motionTransition,
    },
  };
}

export function scaleIn(reducedMotion = false): Variants {
  return {
    hidden: {
      opacity: 0,
      scale: reducedMotion ? 1 : 1.035,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: reducedMotion
        ? reducedTransition
        : {
            duration: 1.1,
            ease: "easeOut",
          },
    },
  };
}

export function staggerContainer(reducedMotion = false): Variants {
  return {
    hidden: {},
    visible: {
      transition: reducedMotion
        ? reducedTransition
        : {
            staggerChildren: 0.09,
            delayChildren: 0.08,
          },
    },
  };
}
