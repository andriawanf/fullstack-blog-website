import PageContainer from "../layouts/PageContainer";
import Navbar from "../layouts/Navbar.jsx";
import Featured from "../components/featured/Featured";
import AllBlogs from "../components/allBlogs/AllBlogs";
import Footers from "../components/footer/Footers";
import CategoriesSection from "../components/CategoriesSection";
import BlogsGrid from "../components/allBlogs/blogsgrid";
import ContactUs from "../components/ContactUs";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import InfinityScrollHorizontal from "../components/InfinityScrollHorizontal";
import productSlider from "../data/data.js";
import CardFeatureSlider from "../components/CardFeatureSlider";
import { Button } from "@material-tailwind/react";

function HomePage() {
    // const { theme } = useContext(ThemeContext);


    return (
        <>
            {/* Section 1 */}
            <section
                className="relative bg-gradient-to-t from-white-500/5 via-transparent to-transparent border border-white-500/10 border-solid flex flex-col font-dm h-[272px] sm:h-[360px] md:h-[400px] lg:h-[450px] xl:h-[724px] items-center justify-start rounded-3xl w-full mt-20 md:mt-24 xl:mt-28 overflow-hidden py-6 sm:py-8 xl:py-14 gap-4 sm:gap-6 lg:gap-8 xl:gap-10"
            >
                <img src="/download (1).png" alt="bg-hero" className="absolute top-0 w-full h-full rounded-[3rem] left-0 opacity-55" />
                <div className="absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-64 lg:h-64 rounded-full -top-6 -right-6 sm:-top-10 sm:-right-10 lg:-top-16 lg:-right-16 bg-blueLight-500 blur-[80px] sm:blur-[100px] lg:blur-[200px]"></div>

                <h1 className="xl:leading-[4rem] leading-5 mx-auto px-6 text-lg sm:px-8 sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center text-white-500 font-bold xl:max-w-6xl sm:max-w-md md:max-w-3xl lg:max-w-4xl">
                    Empower Your Ideas with AI-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blueDark-500 to-blueLight-500">Blogging Solutions</span>
                </h1>
                <Button className="flex items-center justify-center py-2 px-3 md:py-3 md:pr-[18px] md:pl-4 rounded-xl cursor-pointer bg-gradient-to-r from-blueDark-500 to-blueLight-500 hover:bg-gradient-to-l hover:to-blueDark-500 hover:from-blueLight-500 gap-2 z-20" >
                    <p className="text-xs font-semibold tracking-wide text-center text-black-500 font-nunito sm:text-sm md:text-md">
                        Start for free
                    </p>
                </Button>
                <img
                    className="absolute justify-center object-contain mx-auto max-w-80 sm:max-w-96 md:max-w-xl lg:max-w-2xl h-fit xl:max-w-7xl sm:-bottom-7 md:-bottom-20 lg:-bottom-28 xl:-bottom-20 -bottom-6"
                    src="/img-hero.png"
                    alt="img-hero"
                />
            </section>
            <div className="flex flex-col gap-5 pt-8 md:pt-12 lg:gap-7 xl:pt-16 xl:gap-10">
                <p className="text-[8px] md:text-xs xl:text-lg text-center font-nunito text-white-500 font-light leading-relaxed">Crafting a masterpiece requires wielding more than 10 captivating tools of creativity.</p>
                <div className="w-full mx-auto">
                    <div className="text-center">
                        <InfinityScrollHorizontal>
                            <ul x-ref="logos" className="flex items-center justify-start md:justify-start gap-8 md:gap-16 xl:gap-24 [&_img]:max-w-none animate-infinite-scroll ">
                                {productSlider.map((product, index) => (
                                    <li key={index} className="flex items-center gap-1 md:gap-2">
                                        <img src={product.image} alt={product.name} className="object-cover w-4 h-4 md:h-5 md:w-5 xl:w-9 xl:h-9" />
                                        <p className="text-xs font-semibold md:text-lg xl:text-2xl text-white-500 font-nunito">{product.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </InfinityScrollHorizontal>
                    </div>

                </div>
            </div>

            {/* Section 2 */}
            <section className="flex flex-col gap-16 mt-20 md:mt-36 xl:gap-24 xl:mt-44">
                <div className="flex flex-col items-center justify-center gap-6 xl:gap-9">
                    <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-blueLight-500 w-fit text-blueDark-500">
                        <i className="ri-bard-fill ri-1"></i>
                        <p className="text-xs font-nunito">Introducing OutoftheBoys Website</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 ">
                        <h1 className="justify-center block xl:max-w-3xl text-3xl md:text-4xl md:max-w-lg xl:text-6xl font-bold xl:leading-[4.5rem] text-center font-dm text-white-500">Your Blog, Your Rules: <span className="font-medium text-transparent font-nunito bg-clip-text bg-gradient-to-r from-blueDark-500 to-blueLight-500">Trailblazing with AI</span></h1>
                        <p className="text-xs font-normal text-center xl:max-w-4xl md:max-w-xl xl:text-lg font-nunito text-white-700">Empower your online presence with 'Your Blog, Your Rules: Trailblazing with AI,' where creativity meets technology, offering unparalleled control and innovation in the dynamic world of blogging.</p>
                    </div>
                </div>
                <CardFeatureSlider />
            </section>

            {/* Section 3 */}
            <section className="flex flex-col gap-16 mt-20 md:mt-36 xl:gap-24 xl:mt-44 xl:py-24 xl:px-6 ">
                <img src="/images/Section-3.png" alt="" className="w-full h-full" />
            </section>

            {/* Section 4 */}
            <section className="mt-40">
                <header className="flex flex-row items-end justify-between w-full">
                    <div>
                        <h2 className="xl:max-w-3xl text-3xl md:text-4xl md:max-w-lg xl:text-6xl font-bold xl:leading-[4.5rem] font-dm text-white-500">Discover Blogs</h2>

                        <p className="max-w-md mt-4 font-light text-white-700">
                            Unearth captivating content and stay in the loop with the latest trends. Your favorite blogs, all in one place.
                        </p>
                    </div>
                    <Button variant="text" className="flex items-center gap-2 text-white-500 bg-white-500/5 hover:bg-white-500 hover:text-black-500">
                        Read More{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </header>

                <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    <li>
                        <a href="#" className="block overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt=""
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div className="relative pt-3 bg-white">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt=""
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div className="relative pt-3 bg-white">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt=""
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div className="relative pt-3 bg-white">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="block overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt=""
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />

                            <div className="relative pt-3 bg-white">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                    Basic Tee
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
            {/* <Featured />
            <div className="py-40 ">
                <AllBlogs />
            </div>
            <div className={theme === 'bg-primaryBackground text-primaryContent' ? "px-5 py-10 border shadow-lg shadow-border border-border bg-foreground rounded-3xl" : "px-5 py-10 border shadow-lg border-border bg-foreground rounded-3xl"}>
                <CategoriesSection />
            </div>
            <div className="py-40">
                <BlogsGrid />
            </div>
            <div>
                <ContactUs />
            </div> */}
        </>
    )
}

export default HomePage