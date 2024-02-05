import React from 'react'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
                <div className='relative w-full h-[320px] md:w-[280px] xl:w-[360px] xl:h-[480px] rounded-3xl xl:rounded-[40px] p-6 xl:p-8 flex flex-col gap-6 xl:gap-8 justify-start items-start bg-white-500/5 border border-white-500/20 overflow-hidden'>
                    <div className='absolute w-32 h-32 rounded-full top-14 right-4 bg-blueLight-500 blur-[100px]'></div>

                    {/* Content */}
                    <div className='p-1 border xl:p-2 rounded-2xl bg-white-500/10 border-white-500 font-nunito text-white-500'>
                        <img src="/icons/ai_generate.svg" alt="" className='w-11 h-11 xl:h-12 xl:w-12' />
                    </div>
                    <div className='flex flex-col gap-4 tracking-wide font-nunito text-white-500'>
                        <h1 className='text-2xl xl:text-3xl font-bold leading-[110%] xl:leading-[130%]'>AI-Powered Blog Creation Wizard</h1>
                        <p className='text-xs xl:text-[18px] font-normal xl:leading-[140%]'>Experience the ease of blog creation with our AI-powered assistant. Simply input your preferences and let our intelligent system design your blog for you, saving you time and effort.</p>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide">
                <div className='relative w-full h-[320px] md:w-[280px] xl:w-[360px] xl:h-[480px] rounded-3xl xl:rounded-[40px] p-6 xl:p-8 flex flex-col gap-6 xl:gap-8 justify-start items-start bg-white-500/5 border border-white-500/20 overflow-hidden'>
                    <div className='absolute w-32 h-32 rounded-full top-14 right-4 bg-blueLight-500 blur-[100px]'></div>

                    {/* Content */}
                    <div className='p-1 border xl:p-2 rounded-2xl bg-white-500/10 border-white-500 font-nunito text-white-500'>
                        <img src="/icons/ai_generate.svg" alt="" className='w-11 h-11 xl:h-12 xl:w-12' />
                    </div>
                    <div className='flex flex-col gap-4 tracking-wide font-nunito text-white-500'>
                        <h1 className='text-2xl xl:text-3xl font-bold leading-[110%] xl:leading-[130%]'>AI-Powered Blog Creation Wizard</h1>
                        <p className='text-xs xl:text-[18px] font-normal xl:leading-[140%]'>Experience the ease of blog creation with our AI-powered assistant. Simply input your preferences and let our intelligent system design your blog for you, saving you time and effort.</p>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide">
                <div className='relative w-full h-[320px] md:w-[280px] xl:w-[360px] xl:h-[480px] rounded-3xl xl:rounded-[40px] p-6 xl:p-8 flex flex-col gap-6 xl:gap-8 justify-start items-start bg-white-500/5 border border-white-500/20 overflow-hidden'>
                    <div className='absolute w-32 h-32 rounded-full top-14 right-4 bg-blueLight-500 blur-[100px]'></div>

                    {/* Content */}
                    <div className='p-1 border xl:p-2 rounded-2xl bg-white-500/10 border-white-500 font-nunito text-white-500'>
                        <img src="/icons/ai_generate.svg" alt="" className='w-11 h-11 xl:h-12 xl:w-12' />
                    </div>
                    <div className='flex flex-col gap-4 tracking-wide font-nunito text-white-500'>
                        <h1 className='text-2xl xl:text-3xl font-bold leading-[110%] xl:leading-[130%]'>AI-Powered Blog Creation Wizard</h1>
                        <p className='text-xs xl:text-[18px] font-normal xl:leading-[140%]'>Experience the ease of blog creation with our AI-powered assistant. Simply input your preferences and let our intelligent system design your blog for you, saving you time and effort.</p>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide">
                <div className='relative w-full h-[320px] md:w-[280px] xl:w-[360px] xl:h-[480px] rounded-3xl xl:rounded-[40px] p-6 xl:p-8 flex flex-col gap-6 xl:gap-8 justify-start items-start bg-white-500/5 border border-white-500/20 overflow-hidden'>
                    <div className='absolute w-32 h-32 rounded-full top-14 right-4 bg-blueLight-500 blur-[100px]'></div>

                    {/* Content */}
                    <div className='p-1 border xl:p-2 rounded-2xl bg-white-500/10 border-white-500 font-nunito text-white-500'>
                        <img src="/icons/ai_generate.svg" alt="" className='w-11 h-11 xl:h-12 xl:w-12' />
                    </div>
                    <div className='flex flex-col gap-4 tracking-wide font-nunito text-white-500'>
                        <h1 className='text-2xl xl:text-3xl font-bold leading-[110%] xl:leading-[130%]'>AI-Powered Blog Creation Wizard</h1>
                        <p className='text-xs xl:text-[18px] font-normal xl:leading-[140%]'>Experience the ease of blog creation with our AI-powered assistant. Simply input your preferences and let our intelligent system design your blog for you, saving you time and effort.</p>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide">
                <div className='relative w-full h-[320px] md:w-[280px] xl:w-[360px] xl:h-[480px] rounded-3xl xl:rounded-[40px] p-6 xl:p-8 flex flex-col gap-6 xl:gap-8 justify-start items-start bg-white-500/5 border border-white-500/20 overflow-hidden'>
                    <div className='absolute w-32 h-32 rounded-full top-14 right-4 bg-blueLight-500 blur-[100px]'></div>

                    {/* Content */}
                    <div className='p-1 border xl:p-2 rounded-2xl bg-white-500/10 border-white-500 font-nunito text-white-500'>
                        <img src="/icons/ai_generate.svg" alt="" className='w-11 h-11 xl:h-12 xl:w-12' />
                    </div>
                    <div className='flex flex-col gap-4 tracking-wide font-nunito text-white-500'>
                        <h1 className='text-2xl xl:text-3xl font-bold leading-[110%] xl:leading-[130%]'>AI-Powered Blog Creation Wizard</h1>
                        <p className='text-xs xl:text-[18px] font-normal xl:leading-[140%]'>Experience the ease of blog creation with our AI-powered assistant. Simply input your preferences and let our intelligent system design your blog for you, saving you time and effort.</p>
                    </div>
                </div>
            </div>
            <div className="keen-slider__slide">
                <div className='relative w-full h-[320px] md:w-[280px] xl:w-[360px] xl:h-[480px] rounded-3xl xl:rounded-[40px] p-6 xl:p-8 flex flex-col gap-6 xl:gap-8 justify-start items-start bg-white-500/5 border border-white-500/20 overflow-hidden'>
                    <div className='absolute w-32 h-32 rounded-full top-14 right-4 bg-blueLight-500 blur-[100px]'></div>

                    {/* Content */}
                    <div className='p-1 border xl:p-2 rounded-2xl bg-white-500/10 border-white-500 font-nunito text-white-500'>
                        <img src="/icons/ai_generate.svg" alt="" className='w-11 h-11 xl:h-12 xl:w-12' />
                    </div>
                    <div className='flex flex-col gap-4 tracking-wide font-nunito text-white-500'>
                        <h1 className='text-2xl xl:text-3xl font-bold leading-[110%] xl:leading-[130%]'>AI-Powered Blog Creation Wizard</h1>
                        <p className='text-xs xl:text-[18px] font-normal xl:leading-[140%]'>Experience the ease of blog creation with our AI-powered assistant. Simply input your preferences and let our intelligent system design your blog for you, saving you time and effort.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardFeatureSlider