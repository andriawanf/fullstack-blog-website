

// import LatestPosts from "./components/latestPosts/LatestPosts"
import { ThemeContextProvider } from "./contexts/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/blogs/Index.jsx';
import HomePage from "./pages/HomePage";
import WriteBlog from "./pages/writeBlog/WriteBlog";
import BlogsContext from "./contexts/BlogsContext.jsx";
import PageNotFound404 from "./components/PageNotFound404"
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import BlogPage from "./pages/BlogPage";
import Settings from "./pages/Settings";
import Navbar from "./layouts/Navbar";
import Footers from "./components/footer/Footers";
import PageContainer from "./layouts/PageContainer";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import { AnimatePresence } from "framer-motion";
import Header from "./components/header/Header";
import Blogs from "./pages/Blogs";

function App() {

  return (
    <main className="bg-black-500">
      <AnimatePresence mode="wait">
        <BlogsContext>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blog" element={<Index />} />
              <Route path="/blog/write" element={<WriteBlog />} />
              <Route path="/blog/:blogSlug" element={<BlogPage />} />
            </Routes>
            <Footers />
            {/* <PageContainer>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/blog" element={<Index />} />
                <Route element={<OnlyAdminPrivateRoute />} >
                  <Route path="/blog/write" element={<WriteBlog />} />
                </Route>
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<PageNotFound404 />} />
              </Routes>
            </PageContainer> */}
          </Router>
        </BlogsContext>
      </AnimatePresence>
      {/* <ThemeContextProvider>
        <ThemeProvider>
        </ThemeProvider>
      </ThemeContextProvider> */}
    </main>
  )
}

export default App
