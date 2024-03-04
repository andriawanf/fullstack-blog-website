import React from 'react';
import useSearch from '../../hooks/useSearch';
import {
    IconButton,
} from '@material-tailwind/react';

function SearchBar({handleSearch, searchTerm, setSearchTerm, }) {

    return (
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
    )
}

export default SearchBar