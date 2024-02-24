import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RotateWords() {
    const words = ["YOUR BLOGS", "YOUR RULES", "YOUR ACTIONS"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);

        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <AnimatePresence mode="wait">
            <motion.h1
                key={words[index]}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="justify-center block xl:max-w-3xl text-3xl md:text-4xl md:max-w-lg xl:text-6xl font-bold xl:leading-[4rem] text-center font-nunito text-transparent bg-clip-text bg-gradient-to-r from-blueDark-500 to-blueLight-500"
            >
                {words[index]}
            </motion.h1>
        </AnimatePresence>
    );
}