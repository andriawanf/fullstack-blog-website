import { useState } from "react";
import AuthLinks from "../features/authLinks/AuthLinks";
import ThemeToggle from "../features/themeToggle/ThemeToggle";
import { Link } from "react-router-dom";


function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between w-full h-20 ">
            <div>
                <h1 className="text-2xl font-bold font-dm">OutOfTheBoys!</h1>
            </div>
            <div className="items-center hidden gap-8 font-medium xl:flex font-dm lg:gap-5">
                <ThemeToggle />
                <Link to="/" className="relative">Home</Link>
                <Link to="blog" className="text-disableText">Blogs</Link>
                <a href="#all-blogs" className="text-disableText">About</a>
                <a href="/" className="text-disableText">Contact</a>
                <AuthLinks />
            </div>
            <div className="flex xl:hidden">
                <i className="text-black cursor-pointer ri-menu-4-fill ri-2x" onClick={() => setOpen(!open)}></i>
                {open && (
                    <div className="absolute right-0 z-10 flex flex-col items-center w-full gap-6 py-8 text-xl font-medium bg-white shadow-md top-20">
                        <a href="/" className="relative">Home</a>
                        <a href="/" className="text-disableText">Blogs</a>
                        <a href="/" className="text-disableText">About</a>
                        <a href="/" className="text-disableText">Contact</a>
                        <ThemeToggle />
                        <AuthLinks />
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar