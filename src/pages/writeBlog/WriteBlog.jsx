import FormPost from "../../features/formPost/FormPost";
import Footers from "../../components/footer/Footers";
import Navbar from "../../layouts/Navbar";
import PageContainer from "../../layouts/PageContainer";
import TipTapContext from "../../contexts/TipTapContext";

function WriteBlog() {
  return (
    <div className="max-w-5xl min-h-screen py-8 mx-auto md:py-24 lg:py-16">
      <h1 className="text-3xl font-bold leading-relaxed tracking-tight text-center md:text-4xl lg:text-6xl font-dm text-white-500">Create Blog</h1>
      <div className="py-14">
        <TipTapContext>
          <FormPost />
        </TipTapContext>
      </div>
    </div>
  )
}

export default WriteBlog