import React from 'react';
import {
    Menu,
    MenuHandler,
    Button,
    MenuList,
    MenuItem,
    Checkbox,
    IconButton,
} from "@material-tailwind/react";
import { useContext, useState } from 'react';
import { AllBlogsContext } from '../contexts/BlogsContext';
import Card from '../components/blogs/components/Card';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Pagination from '../components/ui/Pagination';

const data = [
    {
        label: "Technology",
        value: "Technology",
        desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
        label: "Education",
        value: "Education",
        desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
        label: "Healthy",
        value: "Healthy",
        desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },

    {
        label: "Finance",
        value: "Finance",
        desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
        label: "Sport",
        value: "Sport",
        desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
];

function Blogs() {
    const { blogs, howManyPages, setCurrentPage } = useContext(AllBlogsContext);
    var [hoveredIndex, setHoveredIndex] = useState(null);
    const [search, setSearch] = useState("");
    const onChange = ({ target }) => setSearch(target.value);
    const [openMenuCategory, setOpenMenuCategory] = useState(false);
    const [openMenuFilter, setOpenMenuFilter] = useState(false);
    return (
        <div className='w-full min-h-screen px-2 py-8 lg:px-8 xl:px-16 lg:py-16 bg-black-500'>
            <div className='grid items-center justify-center grid-rows-2 pb-10 border-b lg:pb-12 lg:items-start lg:justify-end lg:grid-cols-2 border-white-500/10 lg:grid-rows-1'>
                <div className='flex flex-col items-center text-center lg:items-start lg:text-start'>
                    <h1 className="lg:max-w-3xl text-3xl max-w-lg lg:text-5xl xl:text-6xl font-bold lg:leading-[120%] font-dm text-white-500">Discover Blogs</h1>
                    <p className="mt-2 text-base font-light leading-[110%] lg:text-lg md:max-w-sm lg:max-w-md lg:mt-4 text-white-700">
                        All the blogs and contents of the site have been updated today and you can find your blogs or contents quickly and without any problems.
                    </p>
                </div>
                <div className='flex flex-col-reverse items-center w-full h-full gap-2 lg:items-end lg:justify-end lg:flex-row'>
                    <div className='flex flex-row gap-2'>
                        <>
                            <Menu
                                dismiss={{
                                    itemPress: false,
                                }}
                                open={openMenuFilter}
                                handler={setOpenMenuFilter}

                            >
                                <MenuHandler>
                                    <Button
                                        size='sm'
                                        variant="filled"
                                        className="flex items-center gap-3 text-base font-light tracking-normal capitalize rounded-full font-nunito text-white-500 bg-white-500/10"
                                    >
                                        Filter by
                                        <i
                                            className={`ri-arrow-down-s-line ri-lg transition-transform ${openMenuFilter ? "rotate-180" : ""
                                                }`}
                                        ></i>
                                    </Button>
                                </MenuHandler>
                                <MenuList className='text-base font-medium bg-white-500 font-nunito rounded-2xl'>
                                    <MenuItem className="p-0">
                                        <label
                                            htmlFor="item-1"
                                            className="flex items-center gap-2 p-2 cursor-pointer"
                                        >
                                            <Checkbox
                                                ripple={false}
                                                id="item-1"
                                                containerProps={{ className: "p-0" }}
                                                className="hover:before:content-none"
                                            />
                                            Newest
                                        </label>
                                    </MenuItem>
                                    <MenuItem className="p-0">
                                        <label
                                            htmlFor="item-2"
                                            className="flex items-center gap-2 p-2 cursor-pointer"
                                        >
                                            <Checkbox
                                                ripple={false}
                                                id="item-2"
                                                containerProps={{ className: "p-0" }}
                                                className="hover:before:content-none"
                                            />
                                            Latest
                                        </label>
                                    </MenuItem>
                                    <MenuItem className="p-0">
                                        <label
                                            htmlFor="item-3"
                                            className="flex items-center gap-2 p-2 cursor-pointer"
                                        >
                                            <Checkbox
                                                ripple={false}
                                                id="item-3"
                                                containerProps={{ className: "p-0" }}
                                                className="hover:before:content-none"
                                            />
                                            Date
                                        </label>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </>
                        <>
                            <Menu
                                dismiss={{
                                    itemPress: false,
                                }}
                                open={openMenuCategory}
                                handler={setOpenMenuCategory}

                            >
                                <MenuHandler>
                                    <Button
                                        size='sm'
                                        variant="filled"
                                        className="flex items-center gap-3 text-base font-light tracking-normal capitalize rounded-full font-nunito text-white-500 bg-white-500/10"
                                    >
                                        Category
                                        <i
                                            className={`ri-arrow-down-s-line ri-lg transition-transform ${openMenuCategory ? "rotate-180" : ""
                                                }`}
                                        ></i>
                                    </Button>
                                </MenuHandler>
                                <MenuList className='text-base font-medium bg-white-500 font-nunito rounded-2xl'>
                                    <MenuItem className="p-0">
                                        <label
                                            htmlFor="item-1"
                                            className="flex items-center gap-2 p-2 cursor-pointer"
                                        >
                                            <Checkbox
                                                ripple={false}
                                                id="item-1"
                                                containerProps={{ className: "p-0" }}
                                                className="hover:before:content-none"
                                            />
                                            Technology
                                        </label>
                                    </MenuItem>
                                    <MenuItem className="p-0">
                                        <label
                                            htmlFor="item-2"
                                            className="flex items-center gap-2 p-2 cursor-pointer"
                                        >
                                            <Checkbox
                                                ripple={false}
                                                id="item-2"
                                                containerProps={{ className: "p-0" }}
                                                className="hover:before:content-none"
                                            />
                                            Education
                                        </label>
                                    </MenuItem>
                                    <MenuItem className="p-0">
                                        <label
                                            htmlFor="item-3"
                                            className="flex items-center gap-2 p-2 cursor-pointer"
                                        >
                                            <Checkbox
                                                ripple={false}
                                                id="item-3"
                                                containerProps={{ className: "p-0" }}
                                                className="hover:before:content-none"
                                            />
                                            Healthy
                                        </label>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </>
                    </div>
                    <div className='relative'>
                        <div className='absolute inset-y-0 z-10 flex items-center end-0 '>
                            <IconButton size='md' variant='text' className='rounded-full'><i className="ri-search-2-line ri-lg text-white-500"></i></IconButton>
                        </div>
                        <input type="search" name="search" id="search" placeholder='Search' className='px-4 py-2 text-base border-0 rounded-full w-72 bg-white-500/10 backdrop-blur-xl text-white-500 placeholder:text-white-800 focus:ring-0 font-nunito' />
                    </div>
                </div>
            </div>
            <div className='relative mt-10 lg:mt-12'>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {blogs.map((item, idx) => (
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
                    ))}
                </div>
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