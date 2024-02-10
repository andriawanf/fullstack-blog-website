import React from 'react'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { featuredCard } from '../data/data.js';

function CardFeatureSlider() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        breakpoints: {
            '(min-width: 375px)': {
                slides: {
                    origin: "center",
                    perView: 1,
                    spacing: 15,
                },
            },
            '(min-width: 768px)': {
                slides: {
                    origin: "center",
                    perView: 2,
                    spacing: 15,
                },
            },
            '(min-width: 976px)': {
                slides: {
                    origin: "center",
                    perView: 2,
                    spacing: 15,
                },
            },
            '(min-width: 1440px)': {
                slides: {
                    origin: "center",
                    perView: 3,
                    spacing: 100,
                },
            },
        },
    });

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-50%", "20%"]);
    return (
        <div ref={targetRef} className="relative h-fit">
            <div className="sticky top-0 flex items-center overflow-hidden h-fit">
                <motion.div style={{ x }}
                    className="flex gap-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {featuredCard.map((item, index) => (
                        <div key={index} className='relative w-full h-[320px] md:w-[280px] xl:w-[360px] xl:h-[480px] rounded-3xl xl:rounded-[40px] p-6 xl:p-8 flex flex-col gap-6 xl:gap-8 justify-start items-start bg-white-500/5 border border-white-500/20 overflow-hidden'>
                            <div className='absolute w-32 h-32 rounded-full top-14 right-4 bg-blueLight-500 blur-[100px]'></div>

                            {/* Content */}
                            <div className='p-1 border xl:p-2 rounded-2xl bg-white-500/10 border-white-500 font-nunito text-white-500'>
                                <img src={item.icon} alt="" className='w-11 h-11 xl:h-12 xl:w-12' />
                            </div>
                            <div className='flex flex-col gap-4 tracking-wide font-nunito text-white-500'>
                                <h1 className='text-2xl xl:text-3xl font-bold leading-[110%] xl:leading-[130%]'>{item.title}</h1>
                                <p className='text-xs xl:text-[18px] font-normal xl:leading-[140%]'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>

    )
}

export default CardFeatureSlider