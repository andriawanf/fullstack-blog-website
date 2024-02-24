import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

function HorizontalScrollAnimation({ children }) {
    const stepsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: stepsRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [1, 0.5, 0], [1, 1, 0]);
    const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
    return (
        <div ref={stepsRef}>
            <motion.div style={{ opacity, x }}>{children}</motion.div>
        </div>
    )
}

export default HorizontalScrollAnimation