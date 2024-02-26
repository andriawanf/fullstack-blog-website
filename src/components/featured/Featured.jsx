import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RotateWords from "../animations/RotateWords";
import CardFeatureSlider from "../CardFeatureSlider";

function Featured() {
    const featureRef = useRef(null);
    const isInView = useInView(featureRef);

    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };
    return (
        <div className="relative py-4 mx-auto lg:py-8">
            <motion.div
                ref={featureRef}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                viewport={{ once: false }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                <div className="max-w-md mx-auto text-center lg:max-w-2xl text-white-500">
                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="tracking-tight font-dm justify-center block lg:max-w-3xl text-3xl md:text-4xl md:max-w-lg lg:text-5xl xl:text-6xl font-bold leading-relaxed lg:leading-[120%] text-center  text-white-500"
                    >
                        Your Blog, Your Rules: Trailblazing with AI
                    </motion.p>
                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="mt-2 text-base leading-tight lg:mt-4 lg:text-lg lg:leading-[110%] font-nunito text-white-700"
                    >
                        Empower your online presence with our website, where offering unparalleled control and innovation in the dynamic world of blogging.
                    </motion.p>
                </div>
                <div className="flex justify-center px-2 mt-12">
                    <CardFeatureSlider />
                </div>
            </motion.div>
        </div>
    );
}

export default Featured