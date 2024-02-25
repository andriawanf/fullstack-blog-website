import { cn } from "../../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import Card from "./Card";
import { useContext } from "react";
import { AllBlogsContext } from "../../../contexts/BlogsContext";

export const CardBlogs = ({
    className,
}) => {
    const {blogs} = useContext(AllBlogsContext);
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="py-8">
            <header className="flex flex-col items-end justify-between w-full gap-2 xl:flex-row">
                <div>
                    <h2 className="xl:max-w-3xl text-3xl md:text-4xl md:max-w-lg xl:text-6xl font-bold xl:leading-[4.5rem] font-dm text-white-500">Discover Blogs</h2>

                    <p className="max-w-md mt-4 font-light text-white-700">
                        Unearth captivating content and stay in the loop with the latest trends. Your favorite blogs, all in one place.
                    </p>
                </div>
                <Button variant="filled" size="lg" className="flex items-center justify-center w-full gap-2 font-semibold border-t border-l rounded-full xl:w-fit text-white-500 font-nunito bg-black-500 border-white-500/10 hover:bg-black-400/25 hover:backdrop-blur-xl">
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
            <div
                className={cn(
                    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  pt-12",
                    className
                )}
            >
                {blogs.map((item, idx) => (
                    <Link
                        to="/"
                        key={item?.slug}
                        className="relative block w-full h-full p-2 group"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-black-400/20 block rounded-[2rem]"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card item={item} />
                    </Link>
                ))}
            </div>
        </div >
    );
};

// export const Card = ({
//     className,
//     children,
//     item
// }) => {
//     return (
//         <div
//             className={cn(
//                 "rounded-2xl xl:rounded-[2rem] h-full w-full p-4 overflow-hidden bg-white-500/5 border border-white-500/15 backdrop-blur-xl  relative z-20",
//                 className
//             )}
//         >
//             <div className="w-full ">
//                 <img src="/src/assets/images/image-(1).png" alt="" className="object-cover w-full h-56 rounded-xl xl:rounded-3xl" />
//             </div>
//             <div className="relative z-50">
//                 <h4 className={cn("text-white-500 font-bold font-dm text-2xl line-clamp-2 tracking-wide mt-4", className)}>
//                     {item.title}
//                 </h4>
//                 <p
//                     className={cn(
//                         "mt-4 text-white-500 tracking-wide leading-relaxed text-sm font-nunito",
//                         className
//                     )}
//                 >
//                     {item?.description}
//                 </p>
//             </div>
//         </div>
//     );
// };
// export const CardTitle = ({
//     className,
//     children,
// }) => {
//     return (
//         <h4 className={cn("text-white-500 font-bold font-dm text-2xl line-clamp-2 tracking-wide mt-4", className)}>
//             {children}
//         </h4>
//     );
// };
// export const CardDescription = ({
//     className,
//     children,
// }) => {
//     return (
//         <p
//             className={cn(
//                 "mt-2 text-white-500 tracking-wide leading-relaxed text-sm font-nunito",
//                 className
//             )}
//         >
//             {children}
//         </p>
//     );
// };
// export const CardFooter = ({
//     className,
//     children,
// }) => {
//     return (
//         <div
//             className={cn(
//                 "mt-4 text-white-500 tracking-wide leading-relaxed text-sm font-nunito",
//                 className
//             )}
//         >
//             {children}
//         </div>
//     );
// };