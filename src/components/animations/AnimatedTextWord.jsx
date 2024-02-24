import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const AnimatedTextWord = ({ children }) => {
  const textRef = useRef(null);
  const isInView = useInView(textRef);
  // const { scrollYProgress } = useScroll({
  //   target: textRef,
  //   offset: ["start end", "end start"],
  // });

  // const scale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);
  // const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      ref={textRef}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTextWord;