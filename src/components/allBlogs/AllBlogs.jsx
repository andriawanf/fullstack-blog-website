import Button from "../ui/Button"
import Card from "../ui/Card"
import Categories from "../ui/Categories"

function AllBlogs() {
    return (
        <div className="w-full pt-10 mt-10 pb-10 overflow-hidden">
            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center ">
                    <h1 className="text-3xl font-semibold font-dm">All Blogs</h1>
                    <div className="w-[0.08rem] h-6 bg-disableText/40"></div>
                    <Categories />
                </div>
                <div>
                    <a href="/" className="group text-disableText">
                        <span className="pr-2 text-base font-medium font-nunito group-hover:text-black">Explore more</span>
                        <i className="ri-arrow-right-line ri-lg group-hover:text-black "></i>
                    </a>
                </div>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-disableText/40 py-10 sm:mt-16 sm:py-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div>
                <Button title="See more" />
            </div>
        </div>
    )
}

export default AllBlogs