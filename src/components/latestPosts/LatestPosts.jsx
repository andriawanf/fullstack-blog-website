import Card from "../ui/Card"

function LatestPosts() {
    return (
        <div className="w-full pt-10 overflow-hidden">
            {/* <div className="flex items-end justify-between">
                <h1 className="text-3xl font-semibold font-dm">Latest Posts</h1>
                <a href="/" className="group text-disableText">
                    <span className="pr-2 text-base font-medium font-nunito group-hover:text-black">Explore more</span>
                    <i className="ri-arrow-right-line ri-lg group-hover:text-black "></i>
                </a>
            </div> */}
            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between gap-6 pt-10">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default LatestPosts