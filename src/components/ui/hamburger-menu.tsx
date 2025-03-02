import { motion } from "framer-motion";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerMenu = ({ isOpen, onClick }: HamburgerMenuProps) => {
  const topLineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 6,
    },
  };

  const middleLineVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -6,
    },
  };

  return (
    <button
      className="fixed top-4 right-4 z-50 p-2 bg-zinc-800/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className="w-5 h-4 relative flex flex-col justify-between">
        <motion.span
          className="w-full h-0.5 bg-white rounded-full absolute top-0"
          variants={topLineVariants}
          animate={isOpen ? "opened" : "closed"}
          initial="closed"
        />
        <motion.span
          className="w-full h-0.5 bg-white rounded-full absolute top-1/2 -translate-y-1/2"
          variants={middleLineVariants}
          animate={isOpen ? "opened" : "closed"}
          initial="closed"
        />
        <motion.span
          className="w-full h-0.5 bg-white rounded-full absolute bottom-0"
          variants={bottomLineVariants}
          animate={isOpen ? "opened" : "closed"}
          initial="closed"
        />
      </div>
    </button>
  );
};
