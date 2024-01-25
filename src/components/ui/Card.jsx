/* eslint-disable react/prop-types */
import imageNotFound from '../../assets/images/norbert-kowalczyk-uEyejonvHoI-unsplash.jpg';
import { Link } from 'react-router-dom';


function Card({ description, title, image, createdAt, category, slug }) {
    return (
        <article className=" group">
            <img
                alt="Lava"
                src={image ? image : imageNotFound}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div className="p-4">
                <div className="block mb-2 text-xs font-nunito">
                    <span className="pr-2">{createdAt}</span>
                    <span
                        className="inline-flex items-center justify-center rounded-full bg-primary/40 px-2.5 py-0.5 text-primaryContent"
                    >
                        <p className="whitespace-nowrap">{category}</p>
                    </span>
                </div>
                <Link to={`/blog/${slug}`} >
                    <h3 className="text-xl font-semibold font-dm line-clamp-2">{title}</h3>
                </Link>

                <p className="mt-2 text-justify line-clamp-3 text-sm/relaxed font-nunito text-primaryContent/60 ">
                    {description}
                </p>
            </div>
        </article>
    )
}

export default Card