/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Categories from "../ui/Categories";
import axios from "axios";
import { useState } from "react";
import Pagination from "../ui/Pagination";

function AllBlogs() {
    const BASE_URL = "https://jsonplaceholder.typicode.com";

    const [blogs, setBlogs] = useState([]);
    const [isLodaing, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6)
    
    useEffect(() => {
        const fetchPosts = async() => {
            setIsLoading(true);
            try {
                await axios.get(`${BASE_URL}/posts`)
                    .then(data => setBlogs(data.data))
            } catch (error) {
                console.log(error.message)
            }
            setIsLoading(false);
        }
        fetchPosts();
    }, []);

    if(isLodaing && blogs.length === 0){
        return <div>Loading...</div>;
    }

    // Get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPage, indexOfLastPost);
    const howManyPages = Math.ceil(blogs.length/postsPerPage);

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
            <div>
                <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
            </div>
        </section>
    )
}

export default AllBlogs