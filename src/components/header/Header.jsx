import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './components/button/Button';
import styles from './header.module.scss';
import Nav from './components/nav/Nav';
import { IconButton, Button as ButtonAuth } from "@material-tailwind/react";

const menu = {
    open: {
        width: "350px",
        height: "600px",
        top: "0%",
        right: "0px",
        transform: "translate(-50%, 0%)",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "100px",
        height: "45px",
        top: "0%",
        left: "50%",
        transform: "translate(-50%, 0%)",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
}

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Call handleScroll on initial render
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div className={`fixed top-0 left-0 flex justify-between w-full py-4 px-16 items-center z-50 transition-all duration-150  ${isScrolled ? "bg-black-500 shadow-md shadow-white-500/5" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.25 }}
        >
            <div className='hidden lg:block'>
                <h1 className='text-2xl font-bold text-transparent uppercase font-nunito bg-clip-text bg-gradient-to-r from-blueDark-500 to-blueLight-500'>OutoftheBoys</h1>
            </div>
            <div className={styles.header}>
                <motion.div
                    className={`w-[350px] h-[600px] relative rounded-3xl bg-white-500/5 backdrop-blur-xl border border-white-500/10`}
                    variants={menu}
                    animate={isActive ? "open" : "closed"}
                    initial="closed"
                >
                    <AnimatePresence>
                        {isActive && <Nav />}
                    </AnimatePresence>
                </motion.div>
            </div>
            <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
            <div className='hidden text-white-500 lg:flex lg:gap-1 lg:items-center'>
                <IconButton className='border-t border-l rounded-full font-nunito bg-black-500 border-white-500/10 hover:bg-black-400/25 hover:backdrop-blur-xl' size='lg' variant="filled">
                    <i className="ri-sun-line ri-lg text-white-500"></i>
                </IconButton>
                <ButtonAuth className='font-semibold border-t border-l rounded-full font-nunito bg-black-500 border-white-500/10 hover:bg-black-400/25 hover:backdrop-blur-xl' size='lg'>Login</ButtonAuth>
            </div>
        </motion.div>
    )
}