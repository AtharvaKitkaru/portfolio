import React from "react";
import { motion } from "framer-motion";

const InfiniteScrollTape = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <motion.div
        className="bg-pink-200"
        initial={{ x: -100 }}
        animate={{ x: [100, -100], transition: { repeat: Infinity, duration: 2, ease: "linear" } }}
      ></motion.div>
    </div>
  );
};

export default InfiniteScrollTape;
