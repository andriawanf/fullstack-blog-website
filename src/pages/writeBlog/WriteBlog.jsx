import Editor from "../../features/editors/Editor";
import Footers from "../../components/footer/Footers";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";

function WriteBlog() {
  return (
    <PageContainer>
      <Navbar />
      <div className="min-h-screen pt-10">
        <h1 className="text-3xl font-bold leading-relaxed tracking-tight text-center md:text-4xl lg:text-6xl font-dm">Create Blog</h1>
        <Editor />
      </div>
      <Footers />
    </PageContainer>
  )
}

export default WriteBlog