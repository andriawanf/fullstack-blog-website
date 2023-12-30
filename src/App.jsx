
import AllBlogs from "./components/allBlogs/AllBlogs"
import Featured from "./components/featured/Featured"
import Footers from "./components/footer/Footers"
// import LatestPosts from "./components/latestPosts/LatestPosts"
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Navbar from "./layouts/Navbar";
import PageContainer from "./layouts/PageContainer";
import ThemeProvider from "./providers/ThemeProvider";


function App() {

  return (
    <div className="w-screen h-full overflow-hidden">
      <ThemeContextProvider>
        <ThemeProvider>
          <PageContainer >

            <Navbar />
            <Featured />
            {/* <LatestPosts /> */}
            <AllBlogs />
            <Footers />
          </PageContainer>
        </ThemeProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
