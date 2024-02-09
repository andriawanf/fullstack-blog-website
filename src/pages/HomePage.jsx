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
            <section className="flex flex-col gap-8 pt-7 md:pt-10 md:gap-14 xl:gap-24 lg:gap-16 lg:pt-20">
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
            <section className="flex flex-col pt-0 xl:pt-52 lg:pt-40">
                <img src="/images/Section-3.png" alt="" className="w-full h-full" />
            </section>

            {/* Section 4 */}
            <section className="flex flex-col gap-10 py-6 xl:py-24 lg:py-20 md:py-10">
                <header className="flex flex-col items-end justify-between w-full gap-2 xl:flex-row">
                    <div>
                        <h2 className="xl:max-w-3xl text-3xl md:text-4xl md:max-w-lg xl:text-6xl font-bold xl:leading-[4.5rem] font-dm text-white-500">Discover Blogs</h2>

                        <p className="max-w-md mt-4 font-light text-white-700">
                            Unearth captivating content and stay in the loop with the latest trends. Your favorite blogs, all in one place.
                        </p>
                    </div>
                    <Button variant="text" className="flex items-center justify-center w-full gap-2 xl:w-fit text-white-500 bg-white-500/5 hover:bg-white-500 hover:text-black-500">
                        Read More
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

                <ul className="grid justify-between grid-cols-1 gap-5 xl:gap-10 lg:grid-cols-2 xl:grid-cols-3">
                    <li>
                        <article className="w-full overflow-hidden border bg-white-500/5 border-white-500/20 rounded-3xl">
                            <div>
                                <img src="/src/assets/images/norbert-kowalczyk-uEyejonvHoI-unsplash.jpg" alt="" className="object-cover w-full h-56 transition duration-500 rounded-t-3xl" />
                            </div>
                            <div className="flex flex-col gap-3 p-4 font-nunito">
                                <p className="text-sm tracking-wide leading-[110%] text-white-700 font-light">Thursday, Feb 01 2024</p>
                                <title className="text-xl font-bold font-dm leading-[130%] line-clamp-3 text-white-500 tracking-wide">Unveiling the Power of AI: Exploring Possibilities and Real-world Applications</title>
                                <p className="line-clamp-2 text-sm tracking-wide leading-[130%] text-white-700 font-light">Artificial Intelligence (AI) stands at the forefront of technological innovation, reshaping the way we live, work, and interact. In this blog post, we embark on a journey to unravel the diverse facets of AI, exploring its limitless possibilities and real-world applications.</p>
                            </div>
                            <div className="flex flex-row items-center justify-between p-4">
                                <div className="flex flex-row items-center gap-4">
                                    <img src="/src/assets/images/norbert-kowalczyk-uEyejonvHoI-unsplash.jpg" alt="" className="object-cover w-10 h-10 rounded-full" />
                                    <div className="flex flex-col gap-2 font-nunito">
                                        <p className="text-sm tracking-wide leading-[110%] text-white-700 font-light">Written by</p>
                                        <h1 className="text-base tracking-wide leading-[110%] text-white-500 font-semibold">Darrel Steward</h1>
                                    </div>
                                </div>
                                <Menu placement="top-end">
                                    <MenuHandler>
                                        <IconButton className="text-white-500 bg-white-500/5">
                                            <i className="ri-share-line ri-xl"></i>
                                        </IconButton>
                                    </MenuHandler>
                                    <MenuList className="flex flex-col gap-2 shadow-md text-black-500 bg-white-500 rounded-xl">
                                        <a href="#">
                                            <Button className="flex items-center w-full gap-2 text-white-500">
                                                <i className="ri-link ri-lg"></i>
                                                <p>Copy link</p>
                                            </Button>
                                        </a>
                                        <div className="flex items-center justify-between">
                                            <a href="#">
                                                <Tooltip
                                                    content="Share with Facebook"
                                                    placement="bottom"
                                                    animate={{
                                                        mount: { scale: 1, y: 0 },
                                                        unmount: { scale: 0, y: -15 },
                                                    }}
                                                    className="bg-white-500 text-black-500"
                                                >
                                                    <IconButton className=" text-white-500">
                                                        <i className="ri-facebook-fill ri-lg"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                            <a href="#">
                                                <Tooltip
                                                    content="Share with Instagram"
                                                    placement="bottom"
                                                    animate={{
                                                        mount: { scale: 1, y: 0 },
                                                        unmount: { scale: 0, y: -15 },
                                                    }}
                                                    className="bg-white-500 text-black-500"
                                                >
                                                    <IconButton className=" text-white-500">
                                                        <i className="ri-instagram-fill ri-lg"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                            <a href="#">
                                                <Tooltip
                                                    content="Share with Twitter"
                                                    placement="bottom"
                                                    animate={{
                                                        mount: { scale: 1, y: 0 },
                                                        unmount: { scale: 0, y: -15 },
                                                    }}
                                                    className="bg-white-500 text-black-500"
                                                >
                                                    <IconButton className=" text-white-500">
                                                        <i className="ri-twitter-fill ri-lg"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                        </div>
                                    </MenuList>
                                </Menu>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article className="w-full overflow-hidden border bg-white-500/5 border-white-500/20 rounded-3xl">
                            <div>
                                <img src="/src/assets/images/norbert-kowalczyk-uEyejonvHoI-unsplash.jpg" alt="" className="object-cover w-full h-56 transition duration-500 rounded-t-3xl" />
                            </div>
                            <div className="flex flex-col gap-3 p-4 font-nunito">
                                <p className="text-sm tracking-wide leading-[110%] text-white-700 font-light">Thursday, Jan 30 2024</p>
                                <title className="text-xl font-bold font-dm leading-[130%] line-clamp-3 text-white-500 tracking-wide">Augmented Reality: Transforming How We Interact with the Digital World</title>
                                <p className="line-clamp-2 text-sm tracking-wide leading-[130%] text-white-700 font-light">Step into the realm of augmented reality (AR) and discover how this cutting-edge technology is reshaping our everyday experiences. Learn about the latest AR applications, from gaming to education, and envision a future where the digital and physical worlds seamlessly coexist.</p>
                            </div>
                            <div className="flex flex-row items-center justify-between p-4">
                                <div className="flex flex-row items-center gap-4">
                                    <img src="/src/assets/images/norbert-kowalczyk-uEyejonvHoI-unsplash.jpg" alt="" className="object-cover w-10 h-10 rounded-full" />
                                    <div className="flex flex-col gap-2 font-nunito">
                                        <p className="text-sm tracking-wide leading-[110%] text-white-700 font-light">Written by</p>
                                        <h1 className="text-base tracking-wide leading-[110%] text-white-500 font-semibold">Kate Tanner</h1>
                                    </div>
                                </div>
                                <Menu placement="top-end">
                                    <MenuHandler>
                                        <IconButton className="text-white-500 bg-white-500/5">
                                            <i className="ri-share-line ri-xl"></i>
                                        </IconButton>
                                    </MenuHandler>
                                    <MenuList className="flex flex-col gap-2 shadow-md text-black-500 bg-white-500 rounded-xl">
                                        <a href="#">
                                            <Button className="flex items-center w-full gap-2 text-white-500">
                                                <i className="ri-link ri-lg"></i>
                                                <p>Copy link</p>
                                            </Button>
                                        </a>
                                        <div className="flex items-center justify-between">
                                            <a href="#">
                                                <Tooltip
                                                    content="Share with Facebook"
                                                    placement="bottom"
                                                    animate={{
                                                        mount: { scale: 1, y: 0 },
                                                        unmount: { scale: 0, y: -15 },
                                                    }}
                                                    className="bg-white-500 text-black-500"
                                                >
                                                    <IconButton className=" text-white-500">
                                                        <i className="ri-facebook-fill ri-lg"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                            <a href="#">
                                                <Tooltip
                                                    content="Share with Instagram"
                                                    placement="bottom"
                                                    animate={{
                                                        mount: { scale: 1, y: 0 },
                                                        unmount: { scale: 0, y: -15 },
                                                    }}
                                                    className="bg-white-500 text-black-500"
                                                >
                                                    <IconButton className=" text-white-500">
                                                        <i className="ri-instagram-fill ri-lg"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                            <a href="#">
                                                <Tooltip
                                                    content="Share with Twitter"
                                                    placement="bottom"
                                                    animate={{
                                                        mount: { scale: 1, y: 0 },
                                                        unmount: { scale: 0, y: -15 },
                                                    }}
                                                    className="bg-white-500 text-black-500"
                                                >
                                                    <IconButton className=" text-white-500">
                                                        <i className="ri-twitter-fill ri-lg"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                        </div>
                                    </MenuList>
                                </Menu>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article className="w-full overflow-hidden border bg-white-500/5 border-white-500/20 rounded-3xl">
                            <div>
                                <img src="/src/assets/images/norbert-kowalczyk-uEyejonvHoI-unsplash.jpg" alt="" className="object-cover w-full h-56 transition duration-500 rounded-t-3xl" />
                            </div>
                            <div className="flex flex-col gap-3 p-4 font-nunito">
                                <p className="text-sm tracking-wide leading-[110%] text-white-700 font-light">Thursday, Jan 26 2024</p>
                                <title className="text-xl font-bold font-dm leading-[130%] line-clamp-3 text-white-500 tracking-wide">Blockchain Beyond Cryptocurrency: Exploring the Diverse Applications of Distributed Ledger Technology</title>
                                <p className="line-clamp-2 text-sm tracking-wide leading-[130%] text-white-700 font-light">Beyond Bitcoin, blockchain technology is disrupting industries such as finance, healthcare, and supply chain management. Uncover the diverse applications of decentralized and secure ledgers, and understand how blockchain is reshaping the way we handle transactions and data.</p>
                            </div>
                            <div className="flex flex-row items-center justify-between p-4">
                                <div className="flex flex-row items-center gap-4">
                                    <img src="/src/assets/images/norbert-kowalczyk-uEyejonvHoI-unsplash.jpg" alt="" className="object-cover w-10 h-10 rounded-full" />
                                    <div className="flex flex-col gap-2 font-nunito">
                                        <p className="text-sm tracking-wide leading-[110%] text-white-700 font-light">Written by</p>
                                        <h1 className="text-base tracking-wide leading-[110%] text-white-500 font-semibold">Peter Thornton</h1>
                                    </div>
                                </div>
                                <Menu placement="top-end">
                                    <MenuHandler>
                                        <IconButton className="text-white-500 bg-white-500/5">
                                            <i className="ri-share-line ri-xl"></i>
                                        </IconButton>
                                    </MenuHandler>
                                    <MenuList className="flex flex-col gap-2 shadow-md text-black-500 bg-white-500 rounded-xl">
                                        <a href="#">
                                            <Button className="flex items-center w-full gap-2 text-white-500">
                                                <i className="ri-link ri-lg"></i>
                                                <p>Copy link</p>
                                            </Button>
                                        </a>
                                        <div className="flex items-center justify-between">
                                            <a href="#">
                                                <Tooltip
                                                    content="Share with Facebook"
                                                    placement="bottom"
                                                    animate={{
                                                        mount: { scale: 1, y: 0 },
                                                        unmount: { scale: 0, y: -15 },
                                                    }}
                                                    className="bg-white-500 text-black-500"
                                                >
                                                    <IconButton className=" text-white-500">
                                                        <i className="ri-facebook-fill ri-lg"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                            <a href="#">
                                                <Tooltip
                                                    content="Share with Instagram"
                                                    placement="bottom"
                                                    animate={{
                                                        mount: { scale: 1, y: 0 },
                                                        unmount: { scale: 0, y: -15 },
                                                    }}
                                                    className="bg-white-500 text-black-500"
                                                >
                                                    <IconButton className=" text-white-500">
                                                        <i className="ri-instagram-fill ri-lg"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                            <a href="#">
                                                <Tooltip
                                                    content="Share with Twitter"
                                                    placement="bottom"
                                                    animate={{
                                                        mount: { scale: 1, y: 0 },
                                                        unmount: { scale: 0, y: -15 },
                                                    }}
                                                    className="bg-white-500 text-black-500"
                                                >
                                                    <IconButton className=" text-white-500">
                                                        <i className="ri-twitter-fill ri-lg"></i>
                                                    </IconButton>
                                                </Tooltip>
                                            </a>
                                        </div>
                                    </MenuList>
                                </Menu>
                            </div>
                        </article>
                    </li>
                </ul>
            </section>

            {/* Section 5 */}
            <section className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <InfiniteSlider />
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