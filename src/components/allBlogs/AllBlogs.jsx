/* eslint-disable no-unused-vars */
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useContext } from "react";
import { AllBlogsContext } from "../../contexts/BlogsContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { format } from 'date-fns';

function AllBlogs() {
    const {currentPosts} = useContext(AllBlogsContext);
    const {theme} = useContext(ThemeContext);

    return (
        <section id="all-blogs" className="w-full overflow-hidden">
            <div className="flex items-end justify-between">
                <div className="flex flex-col gap-6 ">
                    <h1 className="max-w-md text-3xl font-bold leading-relaxed tracking-tight md:text-4xl lg:text-6xl font-dm">Our most popular articles</h1>
                    <p className={theme === 'bg-primaryBackground text-primaryContent' ? "max-w-md text-lg text-primaryContent/60 font-nunito" : "max-w-md text-lg text-primaryBackground/60 font-nunito"}>The popular news to help you dive headfirst into the vast ocean of limitless knowledge with less fuss</p>
                </div>
                <div>
                    <Button title="Explore more" icon="ri-arrow-right-line" bgColor={"bg-border"}/>
                </div>
            </div>
            <div className="grid max-w-2xl grid-cols-1 mx-auto mt-10 gap-x-5 gap-y-5 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {currentPosts.map((post, index) => {
                    return <Card description={post.description} title={post.title} key={index} image={post.imageContent} createdAt={format(new Date(post.createdAt), "do MMM yyyy")} slug={post.slug}  />
                })}
            </div>
        </section>
    )
}

export default AllBlogs