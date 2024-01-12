import Editor from "../../features/editors/Editor"
// import Footers from "../../components/footer/Footers"
import Navbar from "../../layouts/Navbar"
import PageContainer from "../../layouts/PageContainer"

function WriteBlog() {
  return (
    <PageContainer>
      <Navbar />
      <div className="font-medium font-nunito">
        <Editor/>
      </div>
      {/* <Footers /> */}
    </PageContainer>
  )
}

export default WriteBlog