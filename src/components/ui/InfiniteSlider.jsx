/* eslint-disable react/jsx-key */
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function InfiniteSlider({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });
    return (
        <>
            <div className="flex m-0 overflow-hidden leading-relaxed tracking-wide whitespace-nowrap flex-nowrap">
                <motion.div className="flex text-6xl font-extrabold uppercase text-white-500 font-nunito lg:text-8xl whitespace-nowrap flex-nowrap" style={{ x }}>
                    <span className="block mr-8 text-marquee">{children} </span>
                    <span className="block mr-8 text-marquee">{children} </span>
                    <span className="block mr-8 text-marquee">{children} </span>
                    <span className="block mr-8 text-marquee">{children} </span>
                </motion.div>
            </div>
        </>
    )
}

export default InfiniteSlider