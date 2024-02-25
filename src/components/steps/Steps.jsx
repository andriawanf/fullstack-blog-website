import styles from './steps.module.scss'
import { projects } from './data.js';
import Card from './components/card/Card';
import { useScroll, motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

function Steps() {
    const stepsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: stepsRef,
        offset: ['start start', 'end end']
    })
    const isInView = useInView(stepsRef);

    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    
    return (
        <div ref={stepsRef} className="py-8">
            <motion.div
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
                className='sticky top-24 h-[50vh]'
            >
                <div className="text-center text-white-500">
                    <motion.h1
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="mt-2 tracking-tight font-dm justify-center block  text-3xl md:text-4xl xl:text-6xl font-bold xl:leading-[4.5rem] text-white-500 mx-auto"
                    >
                        Unlock the feature now!
                    </motion.h1>
                    <motion.p
                        variants={FADE_UP_ANIMATION_VARIANTS}
                        className="max-w-lg mx-auto mt-2 text-lg leading-8 font-nunito text-white-700"
                    >
                        The fastest and easiest way to get a blog content for your business without having to manage it
                    </motion.p>
                </div>
            </motion.div>
            <div className='relative max-w-6xl mx-auto'>
                {
                    projects.map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.05);
                        return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                    })
                }
            </div>
        </div>
        // <>
        //     <HorizontalScrollAnimation>
        //         <div className='flex items-center justify-between'>
        //             <div className=''>
        //                 <img src="/src/assets/images/image-(1).png" alt="" className='object-cover' />
        //             </div>
        //             <div className='w-full max-w-2xl text-left'>
        //                 <h1 className='text-4xl font-bold font-dm text-white-500'>Login Account</h1>
        //                 <p className='text-xl font-medium font-nunito text-white-700'>Login to your account to access all features by providing your email and password or using your social accounts.</p>
        //             </div>
        //         </div>
        //     </HorizontalScrollAnimation>
        //     <HorizontalScrollAnimation>
        //         <div className='flex flex-row-reverse items-center justify-between '>
        //             <div className=''>
        //                 <img src="/src/assets/images/image-(2).png" alt="" className='object-cover' />
        //             </div>
        //             <div className='w-full max-w-2xl text-left'>
        //                 <h1 className='text-4xl font-bold font-dm text-white-500'>Access Blog Editor</h1>
        //                 <p className='text-xl font-medium font-nunito text-white-700'>Click on 'Continue Writing with AI' to harness the power of AI. Optionally, define content parameters to tailor the AI-generated text to your preferences.</p>
        //             </div>
        //         </div>
        //     </HorizontalScrollAnimation>
        //     <HorizontalScrollAnimation >
        //         <div className='flex items-center justify-between '>
        //             <div className=''>
        //                 <img src="/src/assets/images/image-(3).png" alt="" className='object-cover' />
        //             </div>
        //             <div className='w-full max-w-2xl text-left'>
        //                 <h1 className='text-4xl font-bold font-dm text-white-500'>Content Generation</h1>
        //                 <p className='text-xl font-medium font-nunito text-white-700'>The AI Assistant will start crafting content based on the selected topic. It leverages its natural language processing (NLP) abilities to generate coherent and contextually relevant sentences, paragraphs, or sections for the blog.</p>
        //             </div>
        //         </div>
        //     </HorizontalScrollAnimation>
        // </>
    )
}

export default Steps