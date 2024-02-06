import React from "react";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import { useEffect, useRef } from "react";

function Reveal({ children }) {
  const textControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    const loadText = async () => {
      if (inView) {
        slideControls.start("visible");
        textControls.start("visible");
      }
    };
    loadText();
  });
  return (
    <div ref={ref} className="relative overflow-hidden m-0 p-0">
      <motion.div
        className="m-0 p-0"
        variants={{
          hidden: { y: 75, opacity: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={textControls}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        {children}
      </motion.div>

      <motion.div
        className="bg-orange-400 rounded-md absolute p-0 m-0 top-0 bottom-0 left-0 right-0 z-0"
        variants={{
          hidden: { left: "0%" },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.4, ease: easeIn, delay: 0.5 }}
      ></motion.div>
    </div>
  );
}

export default Reveal;
