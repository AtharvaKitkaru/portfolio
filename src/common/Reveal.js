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
      console.log(inView);
      if (inView) {
        slideControls.start("visible");
        textControls.start("visible");
      }
    };
    loadText();
  });
  return (
    <div ref={ref} className="relative overflow-hidden ">
      <motion.div
        className="m-0 p-0"
        variants={{
          hidden: { y: 75, opacity: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={textControls}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>

      <motion.div
        className="bg-orange-300 absolute top-0 bottom-0 left-0 right-0 z-20"
        variants={{
          hidden: { left: "10%" },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.4, ease: easeIn }}
      ></motion.div>
    </div>
  );
}

export default Reveal;
