/* eslint-disable react/prop-types */

function Card({ body, title }) {
    return (
        <article className="group ">
            <img
                alt="Lava"
                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div className="p-4">
                <time dateTime="2022-10-10" className="block text-xs font-nunito">
                    <span className="pr-4">10th Oct 2022</span>
                    <span
                        className="inline-flex items-center justify-center rounded-full bg-primary/20 px-2.5 py-0.5 text-black"
                    >
                        <i className="ri-at-line -ms-1 me-1.5"></i>
                        <p className="whitespace-nowrap">Technology</p>
                    </span>
                </time>
                <a href="#">
                    <h3 className="text-xl font-semibold font-dm line-clamp-2">{title}</h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed font-nunito text-disableText">
                    {body}
                </p>
            </div>
        </article>
    )
}

export default Card