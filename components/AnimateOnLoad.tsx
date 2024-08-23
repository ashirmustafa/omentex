import { motion } from "framer-motion";

interface AnimateOnLoadProps {
  children: React.ReactNode;
}

const AnimateOnLoad: React.FC<AnimateOnLoadProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnLoad;
