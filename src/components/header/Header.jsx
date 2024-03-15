import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
// import Button from './components/button/Button';
import styles from './header.module.scss';
import Nav from './components/nav/Nav';
import { IconButton, Button  } from "@material-tailwind/react";

const menu = {
    open: {
        width: "350px",
        height: "600px",
        top: "20px",
        right: "0px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "4px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
}

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

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
        <motion.div className={`sticky top-0 left-0 flex justify-between w-full py-2 lg:py-4 lg:px-16 px-2 items-center z-50 transition-all duration-150  ${isScrolled ? "bg-black-500/25 backdrop-blur-sm shadow-md shadow-white-500/5" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.25 }}
        >
            <div className='flex items-center gap-2'>
                <img src="/src/assets/icons/logo.svg" alt="logo-website" className='w-6' />
                {/* <h1 className='hidden text-xl font-bold text-transparent uppercase lg:block font-dm bg-clip-text bg-gradient-to-r from-blueDark-500 to-blueLight-500'>OutOfYourBrains</h1> */}
            </div>
            <div className='flex items-center gap-2'>
                <Button variant='text' size='md' ripple={false} className='text-sm font-semibold capitalize text-white-500 font-nunito rounded-xl '>Blogs</Button>
                <Button variant='filled' size='md' className='text-sm font-semibold capitalize text-black-500 font-nunito rounded-xl bg-gradient-to-r from-blueDark-500 to-blueLight-500 '>Create blog</Button>
            </div>
            {/* {isLogin ? (
                <div className='relative flex items-center gap-2 w-fit'>
                    <IconButton className='border-t border-l rounded-full font-nunito bg-black-500 border-white-500/10 hover:bg-black-400/25 hover:backdrop-blur-xl' size='lg' variant="filled">
                        <i className="ri-sun-line ri-lg text-white-500"></i>
                    </IconButton>
                    <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
                    <motion.div
                        className={`absolute top-0 right-0 bg-black-500 border border-white-500/15 rounded-3xl`}
                        variants={menu}
                        animate={isActive ? "open" : "closed"}
                        initial="closed"
                    >
                        <AnimatePresence>
                            {isActive && <Nav />}
                        </AnimatePresence>
                    </motion.div>
                </div>
            ) : (
                <div className='flex items-center gap-1 text-white-500'>
                    <IconButton className='border-t border-l rounded-full font-nunito bg-black-500 border-white-500/10 hover:bg-black-400/25 hover:backdrop-blur-xl' size='lg' variant="filled">
                        <i className="ri-sun-line ri-lg text-white-500"></i>
                    </IconButton>
                    <ButtonAuth className='font-semibold border-t border-l rounded-full font-nunito bg-black-500 border-white-500/10 hover:bg-black-400/25 hover:backdrop-blur-xl' size='lg'>Login</ButtonAuth>
                </div>
            )} */}
        </motion.div>
    )
}