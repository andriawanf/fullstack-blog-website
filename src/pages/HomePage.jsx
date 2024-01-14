import PageContainer from "../layouts/PageContainer";
import Navbar from "../layouts/Navbar.jsx";
import Featured from "../components/featured/Featured";
import AllBlogs from "../components/allBlogs/AllBlogs";
import Footers from "../components/footer/Footers";
import CategoriesSection from "../components/CategoriesSection";
import BlogsGrid from "../components/allBlogs/blogsgrid";
import ContactUs from "../components/ContactUs";
// import InfiniteSlider from "../components/ui/InfiniteSlider";

function HomePage() {
    return (
        <>
            <PageContainer >
                <Navbar />
                <Featured />
                <div className="py-40 ">
                    <AllBlogs />
                </div>
                <div className="px-5 py-10 border shadow-lg shadow-border border-border bg-foreground rounded-3xl">
                    <CategoriesSection />
                </div>
                <div className="py-40">
                    <BlogsGrid />
                </div>
                <div>
                    <ContactUs />
                </div>
                    <Footers />
            </PageContainer>
        </>
    )
}

export default HomePage