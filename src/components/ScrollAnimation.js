'use client';

import { motion } from 'framer-motion';

// This component is now a more generic motion-enabled div.
// The animation logic will be controlled by the parent component using variants.
export function ScrollAnimation({ children, className, ...props }) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}
