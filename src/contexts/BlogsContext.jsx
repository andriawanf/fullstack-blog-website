/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";



export const AllBlogsContext = createContext();

export default function BlogsContext({ children }){
    const BASE_URL = import.meta.env.VITE_URL_API_JSONPLACEHOLDER;

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6)

    useEffect(() => {
        const fetchPosts = async () => {
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

    if (isLoading && blogs.length === 0) {
        return <div>Loading...</div>;
    }
    // Get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPage, indexOfLastPost);
    const howManyPages = Math.ceil(blogs.length / postsPerPage);
    return (
        <AllBlogsContext.Provider value={{currentPosts, howManyPages, setCurrentPage}} >{children}</AllBlogsContext.Provider>
    )
}
