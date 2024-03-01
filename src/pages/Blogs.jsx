import React from 'react';
import { IconButton, Select, Option } from '@material-tailwind/react';
import { useContext, useState, Fragment, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { AllBlogsContext } from '../contexts/BlogsContext';
import Card from '../components/blogs/components/Card';
import { AnimatePresence, motion } from 'framer-motion';
import Pagination from '../components/ui/Pagination';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Newest', href: '#', current: false },
    { name: 'Latest', href: '#', current: false },
]
const categoriesBlog = [
    { name: 'All Blogs', label: 'all', current: true },
    { name: 'Technology', label: 'tech', current: false },
    { name: 'Healthy', label: 'heal', current: false },
    { name: 'Education', label: 'edu', current: false },
    { name: 'Sport', label: 'sport', current: false },
    { name: 'Programming', label: 'program', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Blogs() {
    const { blogs, howManyPages, setCurrentPage } = useContext(AllBlogsContext);
    var [hoveredIndex, setHoveredIndex] = useState(null);
    const [searchResult, setSearchResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const filteredPost = blogs.filter(post =>
                    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.content.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setSearchResult(filteredPost);
            } catch (error) {
                console.log(error.message)
            }
            setIsLoading(false);
        };

        fetchPosts();
    }, [searchTerm]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/blogs');
    };

    return (
        // <div className="bg-black-500">
        //     <div>
        //         {/* Mobile filter dialog */}
        //         <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        //             <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
        //                 <Transition.Child
        //                     as={Fragment}
        //                     enter="transition-opacity ease-linear duration-300"
        //                     enterFrom="opacity-0"
        //                     enterTo="opacity-100"
        //                     leave="transition-opacity ease-linear duration-300"
        //                     leaveFrom="opacity-100"
        //                     leaveTo="opacity-0"
        //                 >
        //                     <div className="fixed inset-0 bg-black bg-opacity-25" />
        //                 </Transition.Child>

        //                 <div className="fixed inset-0 z-40 flex">
        //                     <Transition.Child
        //                         as={Fragment}
        //                         enter="transition ease-in-out duration-300 transform"
        //                         enterFrom="translate-x-full"
        //                         enterTo="translate-x-0"
        //                         leave="transition ease-in-out duration-300 transform"
        //                         leaveFrom="translate-x-0"
        //                         leaveTo="translate-x-full"
        //                     >
        //                         <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
        //                             <div className="flex items-center justify-between px-4">
        //                                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
        //                                 <button
        //                                     type="button"
        //                                     className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
        //                                     onClick={() => setMobileFiltersOpen(false)}
        //                                 >
        //                                     <span className="sr-only">Close menu</span>
        //                                     <i className="w-6 h-6 ri-close-line"></i>
        //                                 </button>
        //                             </div>

        //                             {/* Filters */}
        //                             <form className="mt-4 border-t border-gray-200">
        //                                 <h3 className="sr-only">Categories</h3>
        //                                 <ul role="list" className="px-2 py-3 font-medium text-gray-900">
        //                                     {subCategories.map((category) => (
        //                                         <li key={category.name}>
        //                                             <a href={category.href} className="block px-2 py-3">
        //                                                 {category.name}
        //                                             </a>
        //                                         </li>
        //                                     ))}
        //                                 </ul>

        //                                 {filters.map((section) => (
        //                                     <Disclosure as="div" key={section.id} className="px-4 py-6 border-t border-gray-200">
        //                                         {({ open }) => (
        //                                             <>
        //                                                 <h3 className="flow-root -mx-2 -my-3">
        //                                                     <Disclosure.Button className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
        //                                                         <span className="font-medium text-gray-900">{section.name}</span>
        //                                                         <span className="flex items-center ml-6">
        //                                                             {open ? (
        //                                                                 <i className="w-5 h-5 ri-subtract-line"></i>
        //                                                             ) : (
        //                                                                 <i className="w-5 h-5 ri-add-line"></i>
        //                                                             )}
        //                                                         </span>
        //                                                     </Disclosure.Button>
        //                                                 </h3>
        //                                                 <Disclosure.Panel className="pt-6">
        //                                                     <div className="space-y-6">
        //                                                         {section.options.map((option, optionIdx) => (
        //                                                             <div key={option.value} className="flex items-center">
        //                                                                 <input
        //                                                                     id={`filter-mobile-${section.id}-${optionIdx}`}
        //                                                                     name={`${section.id}[]`}
        //                                                                     defaultValue={option.value}
        //                                                                     type="checkbox"
        //                                                                     defaultChecked={option.checked}
        //                                                                     className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        //                                                                 />
        //                                                                 <label
        //                                                                     htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
        //                                                                     className="flex-1 min-w-0 ml-3 text-gray-500"
        //                                                                 >
        //                                                                     {option.label}
        //                                                                 </label>
        //                                                             </div>
        //                                                         ))}
        //                                                     </div>
        //                                                 </Disclosure.Panel>
        //                                             </>
        //                                         )}
        //                                     </Disclosure>
        //                                 ))}
        //                             </form>
        //                         </Dialog.Panel>
        //                     </Transition.Child>
        //                 </div>
        //             </Dialog>
        //         </Transition.Root>

        //         <main className="w-full min-h-screen px-2 lg:px-8 xl:px-16 ">
        //             <div className="flex items-end justify-between pt-24 pb-6 border-b border-white-500/25">
        //                 <div className='flex flex-col items-center text-center lg:items-start lg:text-start'>
        //                     <h1 className="lg:max-w-3xl text-3xl max-w-lg lg:text-5xl xl:text-6xl font-bold lg:leading-[120%] font-dm text-white-500">Discover Blogs</h1>
        //                     <p className="mt-2 text-base font-light leading-[110%] lg:text-lg md:max-w-sm lg:max-w-md lg:mt-4 text-white-700">
        //                         All the blogs and contents of the site have been updated today and you can find your blogs or contents quickly and without any problems.
        //                     </p>
        //                 </div>

        //                 <div className="flex items-center">
        //                     <Menu as="div" className="relative inline-block text-left">
        //                         <div>
        //                             <Menu.Button className="inline-flex justify-center text-sm font-medium font-nunito text-white-500 group hover:text-white-700">
        //                                 Sort
        //                                 <i className="w-5 h-5 ml-1 -mr-1 text-gray-400 ri-arrow-down-s-line group-hover:text-gray-500" aria-hidden="true"></i>
        //                             </Menu.Button>
        //                         </div>

        //                         <Transition
        //                             as={Fragment}
        //                             enter="transition ease-out duration-100"
        //                             enterFrom="transform opacity-0 scale-95"
        //                             enterTo="transform opacity-100 scale-100"
        //                             leave="transition ease-in duration-75"
        //                             leaveFrom="transform opacity-100 scale-100"
        //                             leaveTo="transform opacity-0 scale-95"
        //                         >
        //                             <Menu.Items className="absolute right-0 z-10 w-40 mt-2 origin-top-right shadow-2xl bg-white-500 rounded-3xl focus:outline-none font-nunito">
        //                                 <div className="py-1">
        //                                     {sortOptions.map((option) => (
        //                                         <Menu.Item key={option.name}>
        //                                             {({ active }) => (
        //                                                 <a
        //                                                     href={option.href}
        //                                                     className={classNames(
        //                                                         option.current ? 'font-medium text-black-500' : 'text-white-700',
        //                                                         active ? 'bg-black-500/5 rounded-xl' : '',
        //                                                         'block px-4 py-2 text-sm rounded-xl'
        //                                                     )}
        //                                                 >
        //                                                     {option.name}
        //                                                 </a>
        //                                             )}
        //                                         </Menu.Item>
        //                                     ))}
        //                                 </div>
        //                             </Menu.Items>
        //                         </Transition>
        //                     </Menu>

        //                     <button type="button" className="p-2 ml-4 -m-2 text-white-500 hover:text-white-700">
        //                         <span className="sr-only">View grid</span>
        //                         <i className="w-5 h-5 ri-layout-grid-fill" aria-hidden="true"></i>
        //                     </button>
        //                     <button
        //                         type="button"
        //                         className="p-2 ml-4 -m-2 text-white-500 hover:text-white-700 sm:ml-6 lg:hidden"
        //                         onClick={() => setMobileFiltersOpen(true)}
        //                     >
        //                         <span className="sr-only">Filters</span>
        //                         <i className="w-5 h-5 ri-filter-2-fill" aria-hidden="true"></i>
        //                     </button>
        //                 </div>
        //             </div>

        //             <section aria-labelledby="products-heading" className="pt-6 pb-24">
        //                 <h2 id="products-heading" className="sr-only">
        //                     Products
        //                 </h2>

        //                 <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        //                     {/* Filters */}
        //                     <form className="hidden lg:block">
        //                         <h3 className="sr-only">Categories</h3>
        //                         <ul role="list" className="pb-6 space-y-4 text-sm font-medium text-gray-900 border-b border-gray-200">
        //                             {subCategories.map((category) => (
        //                                 <div key={category.name} className="flex items-center">
        //                                     <input
        //                                         defaultValue={category.name}
        //                                         type="checkbox"
        //                                         className="w-4 h-4 rounded text-white-500 border-white-500/50 focus:ring-white-500"
        //                                     />
        //                                     <label
        //                                         htmlFor={category.name}
        //                                         className="ml-3 text-base font-medium text-white-500 font-nunito"
        //                                     >
        //                                         {category.name}
        //                                     </label>
        //                                 </div>
        //                             ))}
        //                         </ul>

        //                         {filters.map((section) => (
        //                             <Disclosure as="div" key={section.id} className="py-6 border-b border-gray-200">
        //                                 {({ open }) => (
        //                                     <>
        //                                         <h3 className="flow-root -my-3">
        //                                             <Disclosure.Button className="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
        //                                                 <span className="font-medium text-gray-900">{section.name}</span>
        //                                                 <span className="flex items-center ml-6">
        //                                                     {open ? (
        //                                                         <i className="w-5 h-5 ri-subtract-line" aria-hidden="true"></i>
        //                                                     ) : (
        //                                                         <i className="w-5 h-5 ri-add-line" aria-hidden="true"></i>
        //                                                     )}
        //                                                 </span>
        //                                             </Disclosure.Button>
        //                                         </h3>
        //                                         <Disclosure.Panel className="pt-6">
        //                                             <div className="space-y-4">
        //                                                 {section.options.map((option, optionIdx) => (
        //                                                     <div key={option.value} className="flex items-center">
        //                                                         <input
        //                                                             id={`filter-${section.id}-${optionIdx}`}
        //                                                             name={`${section.id}[]`}
        //                                                             defaultValue={option.value}
        //                                                             type="checkbox"
        //                                                             defaultChecked={option.checked}
        //                                                             className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        //                                                         />
        //                                                         <label
        //                                                             htmlFor={`filter-${section.id}-${optionIdx}`}
        //                                                             className="ml-3 text-sm text-gray-600"
        //                                                         >
        //                                                             {option.label}
        //                                                         </label>
        //                                                     </div>
        //                                                 ))}
        //                                             </div>
        //                                         </Disclosure.Panel>
        //                                     </>
        //                                 )}
        //                             </Disclosure>
        //                         ))}
        //                     </form>

        //                     {/* Product grid */}
        //                     <div className="lg:col-span-3">{/* Your content */}</div>
        //                 </div>
        //             </section>
        //         </main>
        //     </div>
        // </div>
        <div className='w-full min-h-screen px-2 py-8 lg:px-8 xl:px-16 lg:py-16 bg-black-500'>
            <div className='grid items-start grid-cols-1 grid-rows-2 gap-10 border-b border-white-500/10'>
                {/* Headline */}
                <div className='flex flex-col text-start'>
                    <h1 className="lg:max-w-3xl text-3xl max-w-lg lg:text-5xl xl:text-6xl font-bold lg:leading-[120%] font-dm text-white-500">Discover Blogs</h1>
                    <p className="mt-2 text-base font-light leading-[110%] lg:text-lg md:max-w-sm lg:max-w-md lg:mt-4 text-white-700">
                        Discover the latest news, tips, and user stories  insights. Thoughts, stories and ideas from the authors.
                    </p>
                </div>
                {/* Search and Filter input */}
                <div className='flex flex-row-reverse items-center justify-between gap-2 md:items-start md:flex-row h-fit'>
                    <>
                        <div className='hidden md:block md:max-w-1/2'>
                            <label htmlFor="filter" className='hidden mb-2 ml-1 text-base font-medium font-nunito text-white-700 md:block'>Filter</label>
                            <ul className='flex flex-wrap items-center gap-3 '>
                                {categoriesBlog.map((cat, idx) => (
                                    <li key={idx}>
                                        <input type="checkbox" id={cat.label} value="" className="hidden peer" required="" />
                                        <label htmlFor={cat.label} className="inline-flex items-center justify-between w-full px-3 py-1.5 text-white-500 bg-white-500/5 backdrop-blur-xl border-2 border-white-500/25 rounded-full cursor-pointer peer-checked:border-white-500 hover:text-white-700 peer-checked:text-white-500 peer-checked:bg-white-500/10 hover:bg-white-500/10">
                                            <div className="w-full text-base font-medium font-nunito">{cat.name}</div>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='block md:hidden'>
                            <Menu as="div" className="relative inline-block">
                                <div>
                                    <Menu.Button className="text-sm font-medium font-nunito text-white-500 group hover:text-white-700">
                                        <IconButton className='rounded-full'>
                                            <i className="text-gray-400 ri-lg ri-filter-2-fill group-hover:text-gray-500"></i>
                                        </IconButton>
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-40 w-40 mt-2 origin-top-right shadow-2xl bg-white-500 rounded-3xl focus:outline-none font-nunito">
                                        <div className="py-1">
                                            {categoriesBlog.map((cat) => (
                                                <Menu.Item key={cat.label}>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                cat.current ? 'font-medium text-black-500' : 'text-white-800',
                                                                active ? 'bg-black-500/5 rounded-xl' : '',
                                                                'block px-4 py-2 text-sm rounded-xl'
                                                            )}
                                                        >
                                                            {cat.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </>
                    <form className='relative flex flex-col w-full gap-2 md:w-fit' onSubmit={handleSearch}>
                        <label htmlFor="search" className='hidden ml-1 text-base font-medium font-nunito text-white-700 md:block'>Search</label>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder='Search blogs here...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='px-4 py-2.5 text-sm border-0 rounded-full w-full md:w-72 bg-white-500/10 backdrop-blur-xl text-white-500 placeholder:text-white-700 focus:ring-0 font-nunito'
                        />
                        <button
                            type='submit'
                            className='absolute bottom-0 right-0 z-10'
                        >
                            <IconButton size='md' variant='text' className='rounded-full'><i className="ri-search-2-line ri-lg text-white-500"></i></IconButton>
                        </button>
                    </form>
                </div>
            </div>
            <div className='relative mt-10 lg:mt-12'>
                {isLoading ? (
                    <p className='text-white-500'>Loading...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {searchResult != 0 ? (
                            searchResult.map((item, idx) => (
                                <Link
                                    to="/"
                                    key={item?.slug}
                                    className="relative block w-full h-full p-2 group"
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <AnimatePresence>
                                        {hoveredIndex === idx && (
                                            <motion.span
                                                className="absolute inset-0 h-full w-full bg-black-400/20 block rounded-[2rem]"
                                                layoutId="hoverBackground"
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: 1,
                                                    transition: { duration: 0.15 },
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    transition: { duration: 0.15, delay: 0.2 },
                                                }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    <Card item={item} />
                                </Link>
                            ))
                        ) : (
                            <div className='items-center justify-center col-span-3 py-2'>
                                <p className='text-2xl font-semibold text-center text-white-500 font-nunito'>Blog not found!</p>
                            </div>
                        )}
                    </div>
                )}
                <div className="mt-10">
                    <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
                </div>
                {/* <Tabs id="custom-animation" value="Technology">
                    <div className='grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-6'>
                        <div className="flex flex-col items-start col-span-1 gap-1 ">
                            <p className='pl-2 text-lg font-medium text-white-500 font-nunito'>Categories: </p>
                            <TabsHeader
                                className="flex flex-wrap justify-start mb-6 bg-transparent"
                                indicatorProps={{
                                    className: "bg-white-500/10",
                                }}
                            >
                                {data.map(({ label, value }) => (
                                    <Tab key={value} value={value} className='text-white-500 font-nunito w-fit'>
                                        {label}
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </div>
                        <TabsBody
                            animate={{
                                initial: { y: -1000 },
                                mount: { y: 0 },
                                unmount: { y: 1000 },
                            }}
                            className='col-span-3'
                        >
                            <div className=' border border-white-500/25 rounded-[2rem] grid grid-cols-1 md:grid-cols-2 '>
                                {blogs.map((item, idx) => (
                                    <TabPanel key={idx} value={item.category} className='h-full'>
                                        <Link
                                            to="/"
                                            key={item?.slug}
                                            className="relative block w-full h-full p-2 group"
                                            onMouseEnter={() => setHoveredIndex(idx)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <AnimatePresence>
                                                {hoveredIndex === idx && (
                                                    <motion.span
                                                        className="absolute inset-0 h-full w-full bg-black-400/20 block rounded-[2rem]"
                                                        layoutId="hoverBackground"
                                                        initial={{ opacity: 0 }}
                                                        animate={{
                                                            opacity: 1,
                                                            transition: { duration: 0.15 },
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            transition: { duration: 0.15, delay: 0.2 },
                                                        }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                            <Card item={item} />
                                        </Link>
                                    </TabPanel>
                                ))}
                            </div>
                        </TabsBody>
                    </div>
                </Tabs> */}
            </div>
        </div>
    )
}

export default Blogs