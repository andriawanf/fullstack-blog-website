import Button from "../ui/Button";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Card from "../ui/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Featured() {
    const [blogsSlider, setBlogsSlider] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 5,
        },
    })

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const respones = await axios.get(`${import.meta.env.VITE_URL_API_JSONPLACEHOLDER}/posts`);
                const sliceBlogs = respones.data.slice(0, 6);
                setBlogsSlider(sliceBlogs);
            } catch (error) {
                console.log(error.message)
            }
            setIsLoading(false);
        }
        fetchPosts();
    }, []);

    if (isLoading) {
        return <div>loading....</div>
    }


    return (
        <div className="relative w-full">
            <div className="mx-auto">
                <div className="flex flex-col justify-center py-10 ">
                    <h1 className="max-w-4xl mt-8 text-3xl font-bold leading-relaxed tracking-tight md:text-4xl lg:text-6xl font-dm">
                        Transforming Minds, One Insight at a Time.
                    </h1>
                    <p className="max-w-3xl mt-8 text-lg text-disableText font-nunito">
                        Dive headfirst into the vast ocean of limitless knowledge, where every wave of information propels you forward. Emerge not just as an individual but as the trendsetting ambassador of wisdom within the dynamic youth brigade.
                    </p>
                    <div className="mt-8">
                        <Link to="/blog">
                            <Button title="Readmore" icon="ri-arrow-right-line" bgColor="bg-primary" />
                        </Link>
                    </div>
                </div>
                <div className="p-4 bg-gray-200 rounded-2xl">
                    <div ref={sliderRef} className="keen-slider">
                        {blogsSlider.map((blog) => {
                            return (
                                <div key={blog.id} className="keen-slider__slide">
                                    <Card title={blog.title} body={blog.body} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured