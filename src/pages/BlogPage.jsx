import React from 'react'
import PageContainer from '../layouts/PageContainer'
import Navbar from '../layouts/Navbar'
import Footers from '../components/footer/Footers'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dompurify from "dompurify";
import Card from '../components/ui/Card';
import { format } from 'date-fns';
import { FormatDates } from '../lib/FormatDates';
import {
    Chip,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
    Button,
} from "@material-tailwind/react";

function BlogPage() {
    const { blogSlug } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`/api/post/getposts?slug=${blogSlug}`)
                    .then(data => setPost(data.data.posts[0]));
                if (!res.ok) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                if (res.ok) {
                    setLoading(false);
                    setError(false);
                }
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchPost();
    }, [blogSlug]);

    useEffect(() => {
        try {
            const fetchRecentPosts = async () => {
                const res = await axios.get(`/api/post/getposts?limit=3`)
                    .then(data => setRecentPosts(data.data.posts));
                // if (res.ok) {
                //     setRecentPosts(data.data.posts);
                // }
            };
            fetchRecentPosts();
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    const cleanHTML = (html) => {
        return dompurify.sanitize(html);
    };

    return (
        <section className="w-full min-h-screen px-2 py-8 lg:px-8 xl:px-16 lg:py-16 bg-black-500">
            <div className='flex flex-col text-start'>
                <div className='flex gap-2 items-center'>
                    <p className="font-nunito bg-white-500/10 text-xs md:text-sm font-medium leading-[110%] text-white-700 capitalize rounded-full w-fit px-3 py-1.5">{post && <FormatDates createdAt={post.createdAt} />}</p>
                    <div className="w-2 h-2 bg-white-700 rounded-full"></div>
                    <Chip size="sm" value={post && post?.category} className="font-nunito bg-white-500/10 text-xs md:text-sm font-medium leading-[110%] text-white-700 capitalize rounded-full w-fit px-3 py-1.5" />
                </div>
                <h1 className="mt-4 text-3xl max-w-screen-md lg:text-5xl xl:text-6xl font-bold leading-[120%] font-dm text-white-500">{post && post.title}</h1>
            </div>
            <>
                <img
                    className="h-96 w-full object-cover object-center rounded-3xl mt-8 md:mt-12"
                    src={post && post.imageContent}
                    alt="nature image"
                />
            </>
            <div className='mt-8 pb-8 md:mt-12 md:pb-12 border-b border-b-white-500/15 flex flex-row justify-between items-end'>
                <div className="flex items-center gap-2 md:gap-3">
                    <img src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="user-profile" className='h-9 w-9 md:w-12 md:h-12 object-cover object-center rounded-3xl' />
                    <div>
                        <h1 className='text-white-500 font-nunito font-medium text-sm md:text-lg'>{post && post.author}</h1>
                        <p className='text-xs md:text-base font-nunito font-normal text-white-800'>email@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <IconButton className='rounded-full bg-white-500/10'>
                        <i className="ri-heart-3-fill ri-xl text-red-600"></i>
                    </IconButton>
                    <>
                        <Button ripple={true} size='sm' className='hidden md:block capitalize text-sm font-nunito font-medium text-white-500 bg-white-500/10 rounded-full'>Copy link</Button>
                        <IconButton className='rounded-full bg-white-500/10 block md:hidden'>
                            <i className="ri-file-copy-fill ri-xl text-white-600"></i>
                        </IconButton>
                    </>
                </div>
            </div>
            <div className='mt-12 w-full'>
                <article className="prose-base md:prose-xl prose-ol:list-decimal prose-ul:list-disc text-white-700 font-nunito font-light leading-[160%] prose-h1:font-semibold prose-h1:text-white-500 prose-h2:font-semibold prose-h2:text-white-500 prose-h3:font-medium prose-h3:text-white-500 prose-h4:font-medium prose-h4:text-white-500 prose-h5:font-medium prose-h5:text-white-500 prose-h6:font-medium prose-h6:text-white-500 prose-strong:font-bold prose-strong:text-white-500 prose-blockquote:border-l-2 prose-blockquote:border-l-white-500 prose-pre:bg-white-500/10 prose-pre:rounded-3xl prose-pre:text-sm md:prose-pre:text-base prose-code:text-white-500 prose-em:italic prose-a:underline prose-a:text-blueDark-500 prose-hr:bg-white-500/5 prose-figure:w-full prose-figure:h-96 prose-figcaption:text-sm md:prose-figcaption:text-base prose-p:indent-8">
                    <div dangerouslySetInnerHTML={{ __html: cleanHTML(post.content) }}></div>
                </article>
            </div>
        </section>
    )
}

export default BlogPage