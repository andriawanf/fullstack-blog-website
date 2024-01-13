/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Categories from "../ui/Categories";
import axios from "axios";
import { useState } from "react";
import Pagination from "../ui/Pagination";
import { useContext } from "react";
import { AllBlogsContext } from "../../contexts/BlogsContext";

function AllBlogs() {
    const {currentPosts} = useContext(AllBlogsContext);

    return (
        <section id="all-blogs" className="w-full pt-10 pb-10 mt-10 overflow-hidden">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 ">
                    <h1 className="text-3xl font-semibold font-dm">All Blogs</h1>
                    <div className="w-[0.08rem] h-6 bg-disableText/40"></div>
                    <Categories />
                </div>
                <div>
                    <Button title="Explore more" icon="ri-arrow-right-line" bgColor={"bg-disableText/10"}/>
                </div>
            </div>
            <div className="grid max-w-2xl grid-cols-1 py-10 mx-auto mt-10 border-t gap-x-8 gap-y-16 border-disableText/40 sm:mt-16 sm:py-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {currentPosts.map((post) => {
                    return <Card body={post.body} title={post.title} key={post.id}/>
                })}
            </div>
        </section>
    )
}

export default AllBlogs