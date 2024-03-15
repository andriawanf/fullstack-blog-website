import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
    Button,
    IconButton,
} from "@material-tailwind/react";
import { useContext } from 'react';
import { AllBlogsContext } from '../contexts/BlogsContext';

export default function HeroSection() {
    const { blogs } = useContext(AllBlogsContext);
    const ref = useRef(null);
    const isInView = useInView(ref);

    const FADE_DOWN_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
        <div className="h-full isolate">
            {/* Hero section */}
            <div className='grid h-full grid-cols-1 lg:grid-cols-12'>
                <div className="flex justify-center h-full mb-12 lg:pr-6 lg:col-span-6 lg:mb-0 ">
                    <div className='flex flex-col items-center justify-center flex-1'>
                        <p className='mb-4 lg:mb-6 text-sm lg:text-base font-normal text-white-500 font-nunito px-4 py-1.5 bg-white-500/5 rounded-full'>Mind Treasures</p>
                        <h1 className='font-bold text-center text-4xl lg:text-6xl tracking-tight leading-[100%] text-transparent bg-clip-text bg-gradient-to-b from-white-500 via-white-500 to-white-700 font-dm max-w-xl '>Share, Shape, and Spread Your Mind's Treasures</h1>
                        <p className='max-w-xs mt-4 text-base font-medium text-center lg:max-w-lg lg:mt-6 lg:text-lg text-white-700 font-nunito'>Ideas Unleashed! Share, Shape, Spread Your Mind's Treasures. Join us in crafting a brighter future.</p>
                        <Button size='md' className='flex items-center justify-between w-48 py-2 pl-6 pr-2 mt-8 rounded-2xl lg:mt-10 bg-gradient-to-r from-blueDark-500 to-blueLight-500'>
                            <p className='text-base font-medium capitalize text-black-500 font-nunito'>Start create</p>
                            <IconButton variant='filled' size='md' ripple={false} className='rounded-xl bg-black-500'>
                                <i className="ri-arrow-right-line ri-xl text-white-500"></i>
                            </IconButton>
                        </Button>
                    </div>
                </div>
                <div className="h-full lg:col-span-6 lg:pl-6 ">
                    <div className="grid auto-rows-[180px] grid-cols-2 gap-2 my-auto  justify-center items-center">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className={`row-span-1 rounded-3xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 h-full ${i === 1 || i === 2 ? "row-span-2" : ""
                                    }`}
                            >
                                {blogs[i] && (
                                    <div className='relative w-full h-full'>
                                        <img src={blogs[i].imageContent} alt="" className='object-cover w-full h-full rounded-3xl' loading='lazy'/>
                                        <div className='absolute bottom-0 left-0 w-full h-full p-3 bg-gradient-to-b from-transparent to-black-800 rounded-3xl'>
                                            <div className='absolute bottom-0 left-0 p-3'>
                                            <a href="#" className='hover:underline hover:underline-offset-3 hover:decoration-white-500'>
                                                <h1 className='text-base font-semibold lg:text-lg xl:text-2xl text-white-500 font-nunito line-clamp-2'>{blogs[i].title}</h1>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="relative">
                <div
                    className="absolute inset-x-0 overflow-hidden -z-10 transform-gpu blur-[120px] -top-80"
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
                <div className="py-0 xl:py-12">
                    <div className="px-2 mx-auto lg:px-32">
                        <div className="mx-auto text-center lg:max-w-5xl">
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
                                    className="text-5xl font-bold tracking-tight xl:text-7xl font-dm text-transparent bg-clip-text bg-gradient-to-br from-white-500 to-white-700 max-w-5xl leading-[110%] mx-auto capitalize"
                                >
                                    Transforming your awesome ideas into blog
                                </motion.h1>
                                <motion.p
                                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                                    className="max-w-2xl mx-auto mt-6 text-lg leading-[110%] md:text-xl font-nunito text-white-700"
                                >
                                    Automatically write, publish and rank blog posts on an auto-built SEO blog, that brings traffic to your website and grows your online presence.
                                </motion.p>

                                <motion.div
                                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                                    className="flex items-center justify-center mt-10 "
                                >
                                    <a href="/" className="z-50">
                                        <Button size="lg" className="text-sm font-bold capitalize text-black-500 font-nunito rounded-xl bg-gradient-to-r from-blueDark-500 to-blueLight-500">Get started</Button>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="flow-root mt-8 xl:mt-24">
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
                                            <img src="/img-hero.png" alt="" className="object-cover w-full" />
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
            </div> */}
        </div>
    )
}
