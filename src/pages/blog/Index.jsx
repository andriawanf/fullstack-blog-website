import PageContainer from "../../layouts/PageContainer";
import Navbar from "../../layouts/Navbar";
import Footers from "../../components/footer/Footers";
import Card from "../../components/ui/Card"

export default function Index() {
    return (
        <>
            <PageContainer>
                <Navbar />
                <div className="">
                    <div>
                        <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 bg-black bg-opacity-25"></div>

                            <div className="fixed inset-0 z-40 flex">
                                <div className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button type="button" className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md">
                                            <span className="sr-only">Close menu</span>
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                     {/* Filters  */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            <li>
                                                <a href="#" className="block px-2 py-3">Totes</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-2 py-3">Backpacks</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-2 py-3">Travel Bags</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-2 py-3">Hip Bags</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-2 py-3">Laptop Sleeves</a>
                                            </li>
                                        </ul>

                                        <div className="px-4 py-6 border-t border-gray-200">
                                            <h3 className="flow-root -mx-2 -my-3">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button type="button" className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                                    <span className="font-medium text-gray-900">Color</span>
                                                    <span className="flex items-center ml-6">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div className="pt-6" id="filter-section-mobile-0">
                                                <div className="space-y-6">
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">White</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">Beige</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">Blue</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">Brown</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">Green</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">Purple</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-6 border-t border-gray-200">
                                            <h3 className="flow-root -mx-2 -my-3">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button type="button" className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                                    <span className="font-medium text-gray-900">Category</span>
                                                    <span className="flex items-center ml-6">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div className="pt-6" id="filter-section-mobile-1">
                                                <div className="space-y-6">
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">New Arrivals</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">Sale</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">Travel</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">Organization</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">Accessories</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-6 border-t border-gray-200">
                                            <h3 className="flow-root -mx-2 -my-3">
                                                {/* <!-- Expand/collapse section button --> / */}
                                                <button type="button" className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                                                    <span className="font-medium text-gray-900">Size</span>
                                                    <span className="flex items-center ml-6">
                                                        {/* <!-- Expand icon, show/hide based on section  /open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on s /ection open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section / state. --> */}
                                            <div className="pt-6" id="filter-section-mobile-2">
                                                <div className="space-y-6">
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">2L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">6L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">12L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">18L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">20L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="flex-1 min-w-0 ml-3 text-gray-500">40L</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <main className="w-full mx-auto">
                            <div className="flex items-baseline justify-between pt-24 pb-6 border-b border-disableText/40">
                                <h1 className="text-4xl font-bold tracking-tight font-dm">New Arrivals</h1>

                                <div className="flex items-center font-nunito">
                                    <div className="relative inline-block text-left">
                                        <div>
                                            <button type="button" className="inline-flex justify-center text-sm font-medium text-disableText group" id="menu-button" aria-expanded="false" aria-haspopup="true">
                                                Sort
                                                <svg className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                            <div className="py-1" role="none">
                                                <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-0">Most Popular</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex="-1" id="menu-item-1">Most Views</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex="-1" id="menu-item-2">Newest</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex="-1" id="menu-item-3">Older</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-500" role="menuitem" tabIndex="-1" id="menu-item-4">Price: High to Low</a>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="button" className="p-2 ml-5 -m-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                        <span className="sr-only">View grid</span>
                                        <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <button type="button" className="p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                                        <span className="sr-only">Filters</span>
                                        <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <section aria-labelledby="products-heading" className="pt-6 pb-24 font-nunito">
                                <h2 id="products-heading" className="sr-only">Products</h2>

                                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                    {/* <!-- Filters --> */}
                                    <form className="hidden border-r border-disableText/40 lg:block">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="pb-6 space-y-4 text-sm font-medium border-b border-disableText/40">
                                            <li>
                                                <a href="#">Totes</a>
                                            </li>
                                            <li>
                                                <a href="#">Backpacks</a>
                                            </li>
                                            <li>
                                                <a href="#">Travel Bags</a>
                                            </li>
                                            <li>
                                                <a href="#">Hip Bags</a>
                                            </li>
                                            <li>
                                                <a href="#">Laptop Sleeves</a>
                                            </li>
                                        </ul>

                                        <div className="py-6 border-b border-disableText/40">
                                            <h3 className="flow-root -my-3">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button type="button" className="flex items-center justify-between w-full py-3 text-sm " aria-controls="filter-section-0" aria-expanded="false">
                                                    <span className="font-medium">Color</span>
                                                    <span className="flex items-center mr-6">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div className="pt-6" id="filter-section-0">
                                                <div className="space-y-4">
                                                    <div className="flex items-center">
                                                        <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">White</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">Beige</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label className="ml-3 text-sm text-gray-600">Blue</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">Brown</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-color-4" name="color[]" value="green" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">Green</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">Purple</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-6 border-b border-disableText/40">
                                            <h3 className="flow-root -my-3">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button type="button" className="flex items-center justify-between w-full py-3 text-sm" aria-controls="filter-section-1" aria-expanded="false">
                                                    <span className="font-medium">Category</span>
                                                    <span className="flex items-center mr-6">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div className="pt-6" id="filter-section-1">
                                                <div className="space-y-4">
                                                    <div className="flex items-center">
                                                        <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">New Arrivals</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">Sale</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">Travel</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-category-3" name="category[]" value="organization" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">Organization</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">Accessories</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-6">
                                            <h3 className="flow-root -my-3">
                                                {/* <!-- Expand/collapse section button --> */}
                                                <button type="button" className="flex items-center justify-between w-full py-3 text-sm" aria-controls="filter-section-2" aria-expanded="false">
                                                    <span className="font-medium ">Size</span>
                                                    <span className="flex items-center mr-6">
                                                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                        </svg>
                                                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </h3>
                                            {/* <!-- Filter section, show/hide based on section state. --> */}
                                            <div className="pt-6" id="filter-section-2">
                                                <div className="space-y-4">
                                                    <div className="flex items-center">
                                                        <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">2L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">6L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">12L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">18L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">20L</label>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <input id="filter-size-5" name="size[]" value="40l" type="checkbox" checked className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                                                            <label  className="ml-3 text-sm text-gray-600">40L</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    {/* <!-- Product grid --> */}
                                    <div className="grid grid-cols-2 gap-8 lg:col-span-3 h-fit">
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
                <Footers />
            </PageContainer>
        </>
    )
}
