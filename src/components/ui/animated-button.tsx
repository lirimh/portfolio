'use client';
import {motion, HTMLMotionProps} from 'framer-motion';
import React, {FC} from 'react';

// Extending HTMLMotionProps for `button`
interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  title: string;
  className?: string;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
  title,
  className,
  ...rest
}) => {
  return (
    <motion.button
      whileHover={{scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
      whileTap={{scale: 0.95}}
      transition={{type: 'spring', stiffness: 300, damping: 15}}
      className={`mt-3 border px-10 py-5 rounded-full border-white bg-transparent text-white ${className}`}
      {...rest} // Pass other props safely
    >
      {title}
    </motion.button>
  );
};

export default AnimatedButton;
