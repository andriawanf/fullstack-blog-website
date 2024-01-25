import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Button from "../ui/Button";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { format } from 'date-fns';
import { Link } from "react-router-dom";

function BlogsGrid() {
    const [dataPosts, setDataPosts] = useState([]);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const respones = await axios.get('/api/post/getPosts');
                const dataPost = respones.data.posts.slice(0,1);
                setDataPosts(dataPost);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPost();
    }, [dataPosts]);
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
                    {
                        dataPosts.map((post) => 
                            <div className="w-full mb-12 lg:mb-0 lg:w-1/2" key={post.id}>
                                <Link to={`/blog/${post.slug}`} className="block w-full group" >
                                    <img
                                        className="block object-cover w-full mb-5 rounded-3xl"
                                        src={post.imageContent}
                                        alt=""
                                    />
                                    <span className="block mb-5 text-primaryContent/60 font-nunito">{format(new Date(post.createdAt), "do MMM yyyy")}</span>
                                    <h4 className="mb-5 text-3xl font-semibold font-dm">
                                        {post.title}
                                    </h4>
                                    <div className={theme === 'bg-primaryBackground text-primaryContent' ? "max-w-xl text-lg text-primaryContent/60 font-nunito line-clamp-3 post-content" : "max-w-xl text-lg text-primaryBackground/60 font-nunito line-clamp-3"} dangerouslySetInnerHTML={{__html: post && post.content}}>
                                        
                                    </div>
                                </Link>
                            </div>
                        )
                    }
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