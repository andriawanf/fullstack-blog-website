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
import productSlider from "../data/ProductSlider.js";

function HomePage() {
    // const { theme } = useContext(ThemeContext);

    return (
        <>
            <section
                className="relative bg-gradient-to-t from-white-500/5 via-transparent to-transparent border border-white-500/10 border-solid flex flex-col font-dm h-[272px] sm:h-[360px] md:h-[400px] lg:h-[450px] xl:h-[724px] items-center justify-start rounded-3xl w-full mt-20 md:mt-24 xl:mt-28 overflow-hidden py-6 sm:py-8 xl:py-14 gap-4 sm:gap-6 lg:gap-8 xl:gap-10"
            >
                <img src="/download (1).png" alt="bg-hero" className="absolute top-0 w-full h-full rounded-[3rem] left-0 opacity-55" />
                <div className="absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-64 lg:h-64 rounded-full -top-6 -right-6 sm:-top-10 sm:-right-10 lg:-top-16 lg:-right-16 bg-blueLight-500 blur-[80px] sm:blur-[100px] lg:blur-[200px]"></div>

                <h1 className="xl:leading-[4rem] leading-5 mx-auto px-6 text-lg sm:px-8 sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center text-white-500 font-bold xl:max-w-6xl sm:max-w-md md:max-w-3xl lg:max-w-4xl">
                    Empower Your Ideas with AI-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blueDark-500 to-blueLight-500">Blogging Solutions</span>
                </h1>
                <button type="button" className="flex items-center justify-center py-2 px-3 md:py-3 md:pr-[18px] md:pl-4 rounded-xl cursor-pointer bg-gradient-to-r from-blueDark-500 to-blueLight-500 hover:bg-gradient-to-l hover:to-blueDark-500 hover:from-blueLight-500 gap-2 z-20" >
                    <p className="text-xs font-semibold tracking-wide text-center text-black-500 font-nunito sm:text-sm md:text-md">
                        Start for free
                    </p>
                    <i className="ri-arrow-right-line ri-sm sm:ri-1 md:ri-lg"></i>
                </button>
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