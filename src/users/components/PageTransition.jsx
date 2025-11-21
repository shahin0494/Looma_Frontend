// components/PageTransition.jsx
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeInOut" }} // Adjust speed here. 0.3 is "subtle", 0.1 is "flash"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;