import React from 'react';
import {
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
} from '@material-tailwind/react';
import { useContext, useState, Fragment, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { AllBlogsContext } from '../contexts/BlogsContext';
import Card from '../components/blogs/components/Card';
import { AnimatePresence, motion } from 'framer-motion';
import Pagination from '../components/ui/Pagination';
import axios from 'axios';
import BlogList from '../components/blogs/BlogList';
import useSearch from '../hooks/useSearch';
import useCategoryFilters from '../hooks/useCategoryFilters';
import CategoryFilters from '../components/ui/CategoryFilters';
import SearchBar from '../components/ui/SearchBar';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Newest', href: '#', current: false },
    { name: 'Latest', href: '#', current: false },
]
const categoriesBlog = [
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
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    const { searchResult: searchResultByTerm, isLoading: isLoadingByTerm } = useSearch(blogs, searchTerm);
    const { searchResult: searchResultByCategory, isLoading: isLoadingByCategory } = useCategoryFilters(selectedCategories);

    const isLoading = isLoadingByTerm || isLoadingByCategory;
    const searchResult = searchTerm ? searchResultByTerm : searchResultByCategory;

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/blogs');
    };

    const handleCategoryChange = (categoryLabel) => {
        setSelectedCategories((prevSelectedCategories) => {
            if (prevSelectedCategories.includes(categoryLabel)) {
                return prevSelectedCategories.filter((cat) => cat !== categoryLabel);
            } else {
                return [...prevSelectedCategories, categoryLabel];
            }
        });
    };

    return (
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
                    {/* Category Filter */}
                    <CategoryFilters selectedCategories={selectedCategories} handleCategoryChange={handleCategoryChange} />
                    {/* Search input */}
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
                </div>
            </div>
            <div className='relative mt-8 lg:mt-12'>
                {isLoading ? (
                    <div className='items-center justify-center py-2 flex'>
                        <p className='text-2xl font-semibold text-center text-white-500 font-nunito'>Loading...</p>
                    </div>
                ) : (
                    <BlogList searchResult={searchResult} setHoveredIndex={setHoveredIndex} />
                )}
                <div className="mt-10">
                    <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </div>
    )
}

export default Blogs