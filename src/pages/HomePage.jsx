import PageContainer from "../layouts/PageContainer";
import Navbar from "../layouts/Navbar.jsx";
import Featured from "../components/featured/Featured";
import AllBlogs from "../components/allBlogs/AllBlogs";
import Footers from "../components/footer/Footers";
import CategoriesSection from "../components/CategoriesSection";

function HomePage() {
    return (
        <>
            <PageContainer >
                <Navbar />
                <Featured />
                <AllBlogs />
                <CategoriesSection />
                <Footers />
            </PageContainer>
        </>
    )
}

export default HomePage