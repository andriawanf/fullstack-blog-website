import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Button from "../ui/Button";

function BlogsGrid() {
    const {theme} = useContext(ThemeContext);
    return (
        <section className="w-full overflow-hidden">
            <div className="relative">
                <div className="flex items-end justify-between mb-16">
                    <div className="flex flex-col gap-6 ">
                        <h1 className="max-w-md text-3xl font-bold leading-relaxed tracking-tight md:text-4xl lg:text-6xl font-dm">Our most popular articles</h1>
                        <p className={theme === 'bg-primaryBackground text-primaryContent' ? "max-w-md text-lg text-primaryContent/60 font-nunito" : "max-w-md text-lg text-primaryBackground/60 font-nunito"}>The latest news to help you dive headfirst into the vast ocean of limitless knowledge with less fuss</p>
                    </div>
                    <div>
                        <Button title="Explore more" icon="ri-arrow-right-line" bgColor={"bg-border"} />
                    </div>
                </div>
                <div className="flex flex-wrap px-4 -mx-4 my-18">
                    <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
                        <a className="block w-full group" href="#">
                            <img
                                className="block object-cover w-full mb-5 rounded-3xl"
                                src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                                alt=""
                            />
                            <span className="block mb-5 text-primaryContent/60 font-nunito">Jul 20, 2023</span>
                            <h4 className="mb-5 text-3xl font-semibold font-dm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h4>
                            <p className={theme === 'bg-primaryBackground text-primaryContent' ? "max-w-xl text-lg text-primaryContent/60 font-nunito" : "max-w-xl text-lg text-primaryBackground/60 font-nunito"}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                                officia consequat duis enim velit mollit xercitation veniam consequat sunt
                                nostrud amet.
                            </p>
                        </a>
                    </div>
                    <div className="w-full pl-6 lg:w-1/2">
                        <a className="mb-6 group md:flex" href="#">
                            <img
                                className="object-cover w-48 h-40 rounded-xl"
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />
                            <div className="pt-2 my-4 md:ml-6 md:mt-0">
                                <span className={theme === 'bg-primaryBackground text-primaryContent' ? "block mb-2 text-primaryContent/60 font-nunito" : "block mb-2 text-primaryBackground/60 font-nunito"}>Jul 20, 2022</span>
                                <h4 className="text-xl font-semibold font-dm">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </h4>
                            </div>
                        </a>
                        <a className="mb-6 group md:flex" href="#">
                            <img
                                className="object-cover w-48 h-40 rounded-xl"
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />
                            <div className="pt-2 my-4 md:ml-6 md:mt-0">
                                <span className={theme === 'bg-primaryBackground text-primaryContent' ? "block mb-2 text-primaryContent/60 font-nunito" : "block mb-2 text-primaryBackground/60 font-nunito"}>Jul 20, 2022</span>
                                <h4 className="text-xl font-semibold font-dm">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </h4>
                            </div>
                        </a>
                        <a className="mb-6 group md:flex" href="#">
                            <img
                                className="object-cover w-48 h-40 rounded-xl"
                                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />
                            <div className="pt-2 my-4 md:ml-6 md:mt-0">
                                <span className={theme === 'bg-primaryBackground text-primaryContent' ? "block mb-2 text-primaryContent/60 font-nunito" : "block mb-2 text-primaryBackground/60 font-nunito"}>Jul 20, 2022</span>
                                <h4 className="text-xl font-semibold font-dm">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsGrid