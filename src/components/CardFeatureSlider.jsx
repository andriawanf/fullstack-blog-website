import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { featuredCard } from "../data/data.js";
import ScaleAnimation from "./ScaleAnimation.jsx";

const ROTATION_RANGE = 34;
const HALF_ROTATION_RANGE = 34 / 2;

function CardFeatureSlider() {
    const ref = useRef(null);

    return (
        <div ref={ref} className="grid items-center justify-center grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
            {featuredCard.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0, // Slide in to its original position
                    }}
                    transition={{ duration: 1, type: "spring", staggerChildren: index * 1.5, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="relative w-full h-72 xl:w-[400px] xl:h-[400px] rounded-3xl xl:rounded-[50px] p-6 xl:p-8 flex flex-col gap-4 xl:gap-6 justify-center items-center bg-white-500/5 border border-white-500/20 overflow-hidden"
                >
                    <div className="absolute w-32 h-32 rounded-full top-14 right-4 bg-blueLight-500 blur-[100px]"></div>

                    {/* Content */}
                    <div className="self-start p-1 border xl:p-2 rounded-xl xl:rounded-2xl bg-white-500/10 border-white-500 font-nunito text-white-500 w-fit">
                        <img src={item.icon} alt="" className="w-8 h-8 xl:h-12 xl:w-12" />
                    </div>
                    <div className="flex flex-col items-end justify-between h-full gap-4 tracking-wide font-nunito text-white-500 ">
                        <h1 className="text-3xl xl:text-4xl font-dm font-bold leading-[110%] xl:leading-[110%]">
                            {item.title}
                        </h1>
                        <p className="text-sm xl:text-[18px] font-medium font-nunito xl:leading-[110%] max-w-64 xl:max-w-72 text-right text-white-700 ">
                            {item.desc}
                        </p>
                    </div>
                </motion.div>
                // <ScaleAnimation key={index}>
                // </ScaleAnimation>
            ))}
            {/* <motion.a
                href="#"
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    rotateX,
                    rotateY,
                }}
                className="relative w-full min-w-[400px] h-72 xl:h-[400px] xl:w-[400px] "
            >
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute "
                >
                    <div className="relative w-full min-w-[400px] h-72 xl:w-[400px] xl:h-[400px] rounded-3xl xl:rounded-[50px] p-6 xl:p-8 flex flex-col justify-center items-center bg-transparent border-dashed border-2  border-white-700 overflow-hidden group duration-150 delay-75 transition-all ease-out text-white-500 ">
                        <div className="absolute w-32 h-32 rounded-full top-14 right-4 bg-blueLight-500 blur-[100px]"></div>

                        <h1
                            style={{
                                transform: "translateZ(75px)",
                            }}
                            className="text-3xl xl:text-4xl font-dm font-bold leading-[110%] xl:leading-[110%] "
                        >
                            LET'S TRY
                        </h1>
                        <i className="text-7xl ri-arrow-right-down-line"></i>
                    </div>
                </div>
            </motion.a> */}

        </div>
    );
}

export default CardFeatureSlider;
