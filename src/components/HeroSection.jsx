import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Button,
} from "@material-tailwind/react";

export default function HeroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const FADE_DOWN_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
        <div className="isolate">
            {/* Hero section */}
            <div className="relative">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blueDark-500 to-blueLight-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="py-12 sm:py-0">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-5xl text-center">
                            <motion.div
                                initial="hidden"
                                ref={ref}
                                animate={isInView ? "show" : "hidden"}
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
                                <motion.h1
                                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                                    className="text-4xl font-bold tracking-tight sm:text-6xl font-dm text-white-500"
                                >
                                    Empower Your Ideas with AI-Driven Blogging Solutions
                                </motion.h1>
                                <motion.p
                                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                                    className="mt-4 text-lg leading-8 font-nunito text-white-700"
                                >
                                    A collection of handmade, free, and ready to use animations &
                                    variants for your next project.
                                </motion.p>

                                <motion.div
                                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                                    className="mt-8 flex items-center justify-center gap-x-6 "
                                >
                                    <a href="/" className="z-50">
                                        <Button size="lg" className="text-black-500 font-nunito font-bold bg-gradient-to-r from-blueDark-500 to-blueLight-500 rounded-full">Get started</Button>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="mt-16 flow-root sm:mt-24">
                            <motion.div
                                className="rounded-xl"
                                initial={{ y: 100, opacity: 0 }} // Image starts from 100px below and fully transparent
                                animate={{ y: 0, opacity: 1 }} // Image ends at its original position and fully opaque
                                transition={{ type: "spring", stiffness: 50, damping: 20 }} // transition specifications
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <div className="rounded-xl w-full border border-white-500/10 lg:rounded-[2rem] lg:p-0.5 hover:shadow-xl hover:shadow-white-500/5 transition-all duration-150 ease-in">
                                            {/* <VariantCarousel /> */}
                                            <img src="/img-hero.png" alt="" className="w-full object-cover" />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blueDark-500 to-blueLight-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
