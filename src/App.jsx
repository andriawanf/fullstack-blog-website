

// import LatestPosts from "./components/latestPosts/LatestPosts"
import { ThemeContextProvider } from "./contexts/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from './pages/blog/Index.jsx';
import HomePage from "./pages/HomePage";
import WriteBlog from "./pages/writeBlog/WriteBlog";

function App() {

  return (
    <div className="w-screen h-full overflow-hidden">
      <ThemeContextProvider>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<Index />} />
              <Route path="/blog/write" element={<WriteBlog />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
