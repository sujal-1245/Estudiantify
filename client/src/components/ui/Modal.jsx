import React from "react";
import { motion } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, y: "-10%" },
  visible: { opacity: 1, y: "0%" },
};

const Modal = ({ children, onClose }) => {
  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-[#1a120a] rounded-xl p-6 w-full max-w-xl shadow-2xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
