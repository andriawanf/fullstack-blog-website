import React from 'react'
import PageContainer from '../layouts/PageContainer'
import Navbar from '../layouts/Navbar'
import Footers from '../components/footer/Footers'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Card from '../components/ui/Card';
import { format } from 'date-fns';

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

    return (
        <main className="mt-10">
            <div className="relative w-full mx-auto mb-4 md:mb-0">
                <div className="flex flex-col items-center justify-center w-full px-4 lg:px-0 ">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center mb-3 text-primaryDark font-dm"
                    >
                        {post && post.category}
                    </a>
                    <h2 className="max-w-5xl mb-12 text-4xl font-bold leading-tight text-center font-dm">
                        {post && post.title}
                    </h2>
                </div>

                <img src={post && post.imageContent} className="object-cover w-full lg:rounded-2xl h-80" />
            </div>

            <div className="flex flex-col font-medium lg:flex-row lg:space-x-12 font-nunito">

                <div className="w-full px-4 mt-12  leading-relaxed lg:px-0 lg:w-3/4">
                    <div className="pb-6 text-lg text-justify prose max-w-7xl leading-relaxed" dangerouslySetInnerHTML={{ __html: post && post.content }}></div>
                </div>

                <div className="w-full max-w-screen-sm m-auto mt-12 lg:w-1/4">
                    <div className="p-4 border-t border-b md:border md:rounded">
                        <div className="flex py-2">
                            <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                className="object-cover w-10 h-10 mr-2 rounded-full" />
                            <div>
                                <p className="text-sm font-semibold text-gray-700"> Mike Sullivan </p>
                                <p className="text-xs font-semibold text-gray-600"> Editor </p>
                            </div>
                        </div>
                        <p className="py-3 text-gray-700">
                            Mike writes about technology
                            Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
                        </p>
                        <button className="flex items-center justify-center w-full px-2 py-1 text-gray-100 bg-green-700 rounded">
                            Follow
                            <i className='ml-2 bx bx-user-plus' ></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center mb-5'>
                <h1 className='mt-5 text-xl font-semibold font-dm'>Recent articles</h1>
                <div className="grid gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-3">
                    {recentPosts &&
                        recentPosts.map((post) =>
                            <div key={post.id}>
                                <Card description={post.description} title={post.title} image={post.imageContent} createdAt={format(new Date(post.createdAt), "do MMM yyyy")} category={post.category} slug={post.slug} />
                            </div>
                        )
                    }
                </div>
            </div>
        </main>
    )
}

export default BlogPage