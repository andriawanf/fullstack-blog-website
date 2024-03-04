import React from 'react'
import {
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
} from '@material-tailwind/react';
import useCategoryFilters from '../../hooks/useCategoryFilters';

const categoriesBlog = [
    { name: 'Technology', label: 'tech', current: false },
    { name: 'Healthy', label: 'heal', current: false },
    { name: 'Education', label: 'edu', current: false },
    { name: 'Sport', label: 'sport', current: false },
    { name: 'Programming', label: 'program', current: false },
]

function CategoryFilters({selectedCategories, handleCategoryChange}) {
    return (
        <>
            <div className='hidden md:block md:max-w-1/2'>
                <label htmlFor="filter" className='hidden mb-2 ml-1 text-base font-medium font-nunito text-white-700 md:block'>Filters</label>
                <ul className='flex flex-wrap items-center gap-3 '>
                    {categoriesBlog.map((cat, idx) => (
                        <li key={idx}>
                            <input
                                type="checkbox"
                                id={cat.label}
                                value=""
                                className="hidden peer"
                                checked={selectedCategories.includes(cat.name)}
                                onChange={() => handleCategoryChange(cat.name)}
                            />
                            <label
                                htmlFor={cat.label}
                                className={`inline-flex items-center justify-between w-full px-3 py-1.5 text-white-500 bg-white-500/5 backdrop-blur-xl border-2 border-white-500/25 rounded-full cursor-pointer peer-checked:border-white-500 hover:text-white-700 peer-checked:text-white-500 peer-checked:bg-white-500/10 hover:bg-white-500/10`}
                            >
                                <div className="w-full text-base font-medium font-nunito">{cat.name}</div>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='block md:hidden'>
                <Menu placement="bottom-end">
                    <MenuHandler>
                        <IconButton className='rounded-full'>
                            <i className="ri-filter-2-fill ri-xl text-white-500"></i>
                        </IconButton>
                    </MenuHandler>
                    <MenuList className='bg-white-500 rounded-2xl'>
                        <ul className='flex flex-col items-start gap-1 w-full'>
                            {categoriesBlog.map((cat, idx) => (
                                <li key={idx} className='w-full'>
                                    <input
                                        type="checkbox"
                                        id={cat.label}
                                        value=""
                                        className="hidden peer"
                                        checked={selectedCategories.includes(cat.name)}
                                        onChange={() => handleCategoryChange(cat.name)}
                                    />
                                    <label
                                        htmlFor={cat.label}
                                        className={`inline-flex items-start justify-start w-full px-3 py-1.5 text-white-700 rounded-lg cursor-pointer peer-checked:border peer-checked:border-black-500/15 hover:text-black-500 peer-checked:text-black-500 peer-checked:bg-black-500/10 hover:bg-black-500/10`}
                                    >
                                        <div className="w-full text-base font-medium font-nunito">{cat.name}</div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </MenuList>
                </Menu>
            </div>
        </>
    )
}

export default CategoryFilters