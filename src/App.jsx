

// import LatestPosts from "./components/latestPosts/LatestPosts"
import { ThemeContextProvider } from "./contexts/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/blog/Index.jsx';
import HomePage from "./pages/HomePage";
import WriteBlog from "./pages/writeBlog/WriteBlog";
import BlogsContext  from "./contexts/BlogsContext.jsx";
import PageNotFound404 from "./components/PageNotFound404"

function App() {

  return (
    <main className="w-screen h-full overflow-hidden">
      <ThemeContextProvider>
        <ThemeProvider>
          <BlogsContext>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<Index />} />
                <Route path="/blog/write" element={<WriteBlog />} />
                <Route path="*" element={<PageNotFound404 />} />
              </Routes>
            </Router>
          </BlogsContext>
        </ThemeProvider>
      </ThemeContextProvider>
    </main>
  )
}

export default App
