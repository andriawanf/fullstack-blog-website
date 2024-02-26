import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import InfinityScrollHorizontal from "../components/InfinityScrollHorizontal";
import { productSlider } from "../data/data.js";
import CardFeatureSlider from "../components/CardFeatureSlider";
import {
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Tooltip,
    Input,
    Textarea
} from "@material-tailwind/react";
import InfiniteSlider from "../components/ui/InfiniteSlider";
import Transition from "../components/ui/PageTransition";
import { motion, useInView, AnimatePresence } from 'framer-motion'
import AnimatedTextWord from "../components/animations/AnimatedTextWord";
import { useRef, useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import RotateWords from "../components/animations/RotateWords";
import HeroSection from "../components/HeroSection";
import Featured from "../components/featured/Featured";
import Steps from "../components/steps/Steps";
import { CardBlogs } from "../components/blogs/components/CardBlogs";
import contents from "../components/blogs/data.js";
import { AllBlogsContext } from "../contexts/BlogsContext";




function HomePage() {
    // const {currentPost} = useContext(AllBlogsContext);
    // const { theme } = useContext(ThemeContext);
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    })

    return (
        <>
            <img src="/download (1).png" alt="bg-hero" className="absolute top-0 w-full h-full rounded-[3rem] left-0 opacity-30 z-10" />
            <section className="relative z-10 pt-8 xl:pt-16">
                <HeroSection />
            </section>

            {/* Infinite Scroll Horizontal Logo */}
            <div>
                <div className="flex flex-col gap-5 pt-8 md:pt-12 lg:pt-16 lg:gap-10">
                    <p className="text-[10px] md:text-sm lg:text-lg text-center font-nunito text-white-700 font-light leading-relaxed">Crafting a masterpiece requires wielding more than 10 captivating tools of creativity.</p>
                    <div className="w-full mx-auto">
                        <div className="text-center">
                            <InfinityScrollHorizontal>
                                <ul x-ref="logos" className="flex items-center justify-start md:justify-start gap-8 md:gap-16 xl:gap-24 [&_img]:max-w-none animate-infinite-scroll ">
                                    {productSlider.map((product, index) => (
                                        <li key={index} className="flex items-center gap-1 md:gap-2">
                                            <img src={product.image} alt={product.name} className="object-cover w-4 h-4 md:h-5 md:w-5 lg:w-9 lg:h-9" />
                                            <p className="text-xs font-semibold md:text-lg xl:text-2xl text-white-500 font-nunito">{product.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </InfinityScrollHorizontal>
                        </div>

                    </div>
                </div>
            </div>

            <section className="pt-12 lg:pt-24 ">
                <Featured />
            </section>

            <section className="px-2 py-8 md:py-24 lg:px-16 lg:py-16 ">
                <Steps />
            </section>

            <section className="px-2 pt-28 lg:px-16 lg:pt-16 ">
                <CardBlogs />
                <div className="py-4 border lg:py-8 bg-white-500/5 border-white-500/15 rounded-3xl">
                    <div className="flex flex-col items-center justify-center w-full gap-4 xl:gap-8">
                        <h1 className="text-3xl font-bold text-center xl:max-w-6xl lg:text-4xl xl:text-6xl text-white-500 font-dm">Begin Your Blogging Journey Today!</h1>
                        <p className="text-base font-normal lg:text-lg font-nunito text-white-700">The sooner you start, the better the results!</p>
                        <Button size="lg" variant="filled" className="rounded-full font-nunito bg-white-500 hover:bg-white-700">Create Blog</Button>
                    </div>
                </div>
            </section>

            <section className="flex flex-col w-full py-16 ">
                {/* <InfiniteSlider baseVelocity={-5} >* Simple & effortless</InfiniteSlider> */}
                <InfiniteSlider baseVelocity={3} >* Quick Blog Crafting</InfiniteSlider>
                <InfiniteSlider baseVelocity={-3} >* Smart suggestions</InfiniteSlider>
            </section>
        </>
    )
}

export default HomePage;