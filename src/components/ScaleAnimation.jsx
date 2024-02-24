import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { stagger } from 'framer-motion';

function ScaleAnimation({ children }) {
    const scaleRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scaleRef,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    return (
        <div ref={scaleRef}>
            <motion.div style={{scale, opacity}}>{children}</motion.div>
        </div>
    )
}

export default ScaleAnimation