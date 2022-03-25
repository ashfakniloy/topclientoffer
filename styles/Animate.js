export const aboutAnimation = {
  initial: {
    x: "-110vw",
  },
  animate: {
    x: "0px",
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export const leftSection = {
  initial: {
    x: "-40vw",
    opacity: 0,
  },
  animate: {
    x: "0px",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export const rightSection = {
  initial: {
    x: "40vw",
    opacity: 0,
  },
  animate: {
    x: "0px",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};
