import PageContainer from "../../layouts/PageContainer";
import Navbar from "../../layouts/Navbar";
import Footers from "../../components/footer/Footers";

export default function Index() {
    return (
        <>
            <PageContainer>
                <Navbar />
                <section>
                    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                        <header className="flex flex-col items-center justify-center">
                            <h2 className="text-xl font-bold text-gray-900 sm:text-4xl font-dm">Blogs Collections</h2>

                            <p className="max-w-2xl mt-4 text-center text-gray-500 font-nunito">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla eligendi sunt velit, tenetur tempore eos sequi quod, omnis vitae voluptates officiis quis iure consectetur.
                            </p>
                        </header>

                        <div className="flex items-center justify-between mt-8">
                            <div className="flex border border-gray-100 rounded">
                                <button
                                    className="inline-flex items-center justify-center w-10 h-10 text-gray-600 transition border-e hover:bg-gray-50 hover:text-gray-700"
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
                                    className="inline-flex items-center justify-center w-10 h-10 text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
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

                                <select id="SortBy" className="h-10 text-sm border-gray-300 rounded">
                                    <option>Sort By</option>
                                    <option value="Title, DESC">Title, DESC</option>
                                    <option value="Title, ASC">Title, ASC</option>
                                    <option value="Price, DESC">Price, DESC</option>
                                    <option value="Price, ASC">Price, ASC</option>
                                </select>
                            </div>
                        </div>

                        <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                            Basic Tee
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                            Basic Tee
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                            Basic Tee
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        alt=""
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                            Basic Tee
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>

                                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <Footers />
            </PageContainer>
        </>
    )
}
