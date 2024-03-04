import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './components/Card';


export default function BlogList({ searchResult, setHoveredIndex }) {
    const [hoveredIndex, setLocalHoveredIndex] = useState(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {searchResult != 0 ? (
                searchResult.map((item, idx) => (
                    <a
                        href={`/blog/${item.slug}`}
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
                    </a>
                ))
            ) : (
                <div className='items-center justify-center col-span-3 py-2'>
                    <p className='text-2xl font-semibold text-center text-white-500 font-nunito'>Blog not found!</p>
                </div>
            )}
        </div>
    )
}
