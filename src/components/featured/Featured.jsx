import Button from "../ui/Button";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Card from "../ui/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Loader from "../ui/Loader";
import { format } from 'date-fns';

function Featured() {
    const {theme} = useContext(ThemeContext)
    const [blogsSlider, setBlogsSlider] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 15,
        },
    })

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const respones = await axios.get(`${import.meta.env.VITE_NEWSAPI_URL}/top-headlines?country=us&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWSAPI_KEY}`);
                const sliceBlogs = respones.data.articles.filter(item => item.urlToImage !== null).slice(0, 6);
                setBlogsSlider(sliceBlogs);
            } catch (error) {
                console.log(error.message)
            }
            setIsLoading(false);
        }
        fetchPosts();
    }, []);

    if (isLoading) {
        return <Loader />;
    }



    return (
        <div className="relative w-full">
            <div className="relative z-10 mx-auto">
                <div className="flex flex-col justify-center py-10 ">
                    <h1 className="max-w-4xl mt-8 text-3xl font-bold leading-relaxed tracking-tight md:text-4xl lg:text-6xl font-dm">
                        Transforming Minds, One Insight at a Time.
                    </h1>
                    <p className={theme === 'bg-primaryBackground text-primaryContent' ? "max-w-3xl mt-8 text-lg text-primaryContent/60 font-nunito" : "max-w-3xl mt-8 text-lg text-primaryBackground/60 font-nunito"}>
                        Dive headfirst into the vast ocean of limitless knowledge, where every wave of information propels you forward. Emerge not just as an individual but as the trendsetting ambassador of wisdom within the dynamic youth brigade.
                    </p>
                    <div className="mt-8">
                        <Link to="/blog">
                            <Button title="Readmore" icon="ri-arrow-right-line" bgColor="bg-primary" />
                        </Link>
                    </div>
                </div>
                <div className="p-4 border bg-foreground rounded-2xl border-border">
                    <div ref={sliderRef} className="keen-slider">
                        {blogsSlider.map((blog, index) => {
                            return (
                                <div key={index} className={theme === 'bg-primaryBackground text-primaryContent' ? "keen-slider__slide text-primaryContent" : "keen-slider__slide text-primaryContent"}>
                                    <Card title={blog.title} body={blog.description} image={blog.urlToImage} publishedAt={format(new Date(blog.publishedAt), "do MMM yyyy")} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* <div className={theme === 'bg-primaryBackground text-primaryContent' ? "absolute top-0 z-0 w-full h-screen bg-primaryBackground blur-3xl" : "absolute top-0 z-0 w-full h-screen bg-primaryContent blur-3xl"}>
                <div className={theme === 'bg-primaryBackground text-primaryContent' ? "absolute right-0 rounded-full blur-3xl bg-primaryDark/40 w-96 h-96 top-20 opacity-80" : " "}></div>
                <div className={theme === 'bg-primaryBackground text-primaryContent' ? "absolute rounded-full bg-primary/40 opacity-80 right-56 w-96 h-96" : " "}></div>
            </div> */}
        </div>
    )
}

export default Featured