import PageContainer from "../../layouts/PageContainer";
import Navbar from "../../layouts/Navbar";
import Footers from "../../components/footer/Footers";
import Card from "../../components/ui/Card";
import { useContext } from "react";
import { AllBlogsContext } from "../../contexts/BlogsContext";
import Pagination from "../../components/ui/Pagination";
import { ThemeContext } from "../../contexts/ThemeContext";
import { format } from 'date-fns';

export default function Index() {
    const { currentPosts, howManyPages, setCurrentPage } = useContext(AllBlogsContext);
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <PageContainer>
                <Navbar />
                <section>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                        <header className="flex flex-col items-center justify-center">
                            <h2 className="text-xl font-bold sm:text-4xl font-dm">Blogs Collections</h2>

                            <p className={theme === 'bg-primaryBackground text-primaryContent' ? "max-w-2xl mt-4 text-center text-primaryContent/60 font-nunito" : "max-w-2xl mt-4 text-center text-primaryBackground/60 font-nunito"}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla eligendi sunt velit, tenetur tempore eos sequi quod, omnis vitae voluptates officiis quis iure consectetur.
                            </p>
                        </header>

                        <div className="flex items-center justify-between mt-8">
                            <div className={theme === 'bg-primaryBackground text-primaryContent' ? "flex border rounded border-primaryContent/10" : "flex border rounded border-primaryBackground/20"}>
                                <button
                                    className={theme === 'bg-primaryBackground text-primaryContent' ? "inline-flex items-center justify-center w-10 h-10 transition rounded text-primaryContent border-e border-primaryContent/10 hover:bg-foreground hover:text-primaryContent" : "inline-flex items-center justify-center w-10 h-10 transition rounded text-primaryBackground border-e border-primaryBackground/10 hover:bg-foreground hover:text-primaryContent"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                        />
                                    </svg>
                                </button>

                                <button
                                    className={theme === 'bg-primaryBackground text-primaryContent' ? "inline-flex items-center justify-center w-10 h-10 transition rounded text-primaryContent border-e border-primaryContent/10 hover:bg-foreground hover:text-primaryContent" : "inline-flex items-center justify-center w-10 h-10 transition rounded text-primaryBackground border-e border-primaryBackground/10 hover:bg-foreground hover:text-primaryContent"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div>
                                <label htmlFor="SortBy" className="sr-only">SortBy</label>

                                <select id="SortBy" className="h-10 px-2 text-sm border-gray-300 rounded font-nunito text-primaryContent">
                                    <option>Sort By</option>
                                    <option value="Title, DESC">Title, DESC</option>
                                    <option value="Title, ASC">Title, ASC</option>
                                    <option value="Price, DESC">Price, DESC</option>
                                    <option value="Price, ASC">Price, ASC</option>
                                </select>
                            </div>
                        </div>

                        <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                            {currentPosts.map((post) => {
                                return <Card body={post.description} title={post.title} key={post.id} image={post.urlToImage} publishedAt={format(new Date(post.publishedAt), "do MMM yyyy")} />
                            })}
                        </ul>
                        <div className="mt-10">
                            <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
                        </div>
                    </div>
                </section>
                <Footers />
            </PageContainer>
        </>
    )
}
