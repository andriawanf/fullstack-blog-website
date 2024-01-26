import { useState, Fragment, useContext } from "react";
import AuthLinks from "../features/authLinks/AuthLinks";
import ThemeToggle from "../features/themeToggle/ThemeToggle";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { useSelector } from "react-redux";
import axios from "axios";
import { signOutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const navigation = [
    { name: 'Dashboard', to: '/', current: true },
    { name: 'Blogs', to: '/blog', current: false },
    { name: 'About us', to: '#', current: false },
    { name: 'Contact us', to: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const handleSignOut = async () => {
        try {
            const res = await axios.post("/api/user/signout");
            if (res.status === 200) {
                dispatch(signOutSuccess());
                navigate("/signin")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <nav className="relative z-50 flex items-center justify-between w-full h-20">
            <Link to="/">
                <div className="flex items-center gap-2">
                    <div>
                        <svg width="40" height="40" viewBox="0 0 150 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M122.319 47.3387C125.95 47.3324 129.546 48.0438 132.901 49.4322C136.256 50.8206 139.304 52.8584 141.869 55.4287V55.4287L133.769 47.3287L94.5287 8.09875C90.659 4.23131 85.7296 1.59778 80.3636 0.531062C74.9977 -0.535658 69.436 0.0123003 64.3813 2.10565C59.3267 4.19899 55.006 7.74375 51.9655 12.292C48.9249 16.8402 47.3008 22.1878 47.2986 27.6587V47.3287L122.319 47.3387Z" fill="url(#paint0_linear_8_721)" />
                            <path d="M47.3187 27.6688C47.3145 24.0381 48.027 20.4423 49.4152 17.0875C50.8035 13.7327 52.8403 10.6849 55.4087 8.11877V8.11877L47.3087 16.2188L8.09869 55.4388C4.23125 59.3085 1.59778 64.2378 0.531062 69.6038C-0.535658 74.9697 0.0123003 80.5315 2.10565 85.5861C4.19899 90.6408 7.74369 94.9614 12.2919 98.002C16.8402 101.043 22.1878 102.667 27.6587 102.669H47.3287L47.3187 27.6688Z" fill="url(#paint1_linear_8_721)" />
                            <path d="M102.649 122.339C102.655 125.97 101.944 129.566 100.555 132.921C99.1668 136.276 97.1289 139.324 94.5586 141.889V141.889L102.659 133.789L141.899 94.5488C145.767 90.6785 148.4 85.7482 149.467 80.3813C150.533 75.0144 149.984 69.4518 147.89 64.3968C145.795 59.3417 142.249 55.0212 137.699 51.9814C133.149 48.9416 127.8 47.319 122.329 47.3187H102.659L102.649 122.339Z" fill="url(#paint2_linear_8_721)" />
                            <path d="M27.6487 102.669C24.0194 102.674 20.4247 101.962 17.0714 100.573C13.7181 99.1851 10.6722 97.1479 8.10864 94.5789V94.5789L16.2086 102.679L55.4386 141.919C59.3089 145.787 64.2392 148.421 69.6061 149.487C74.973 150.553 80.5355 150.005 85.5906 147.91C90.6456 145.815 94.9662 142.269 98.006 137.719C101.046 133.17 102.668 127.821 102.669 122.349V102.669H27.6487Z" fill="url(#paint3_linear_8_721)" />
                            <defs>
                                <linearGradient id="paint0_linear_8_721" x1="46.2986" y1="27.7287" x2="132.779" y2="27.7287" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#deb200" />
                                    <stop offset="1" stopColor="#ffda45" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_8_721" x1="49" y1="103" x2="49" y2="8" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#deb200" />
                                    <stop offset="1" stopColor="#ffda45" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_8_721" x1="114" y1="47" x2="115" y2="142" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#deb200" />
                                    <stop offset="1" stopColor="#ffda45" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_8_721" x1="103" y1="113" x2="8" y2="111" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#deb200" />
                                    <stop offset="1" stopColor="#ffda45" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                    <h1 className="text-lg font-bold font-dm">OutOfTheBoys!</h1>
                </div>
            </Link>
            <div className="items-center hidden gap-8 font-medium xl:flex font-dm lg:gap-4">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        to={item.to}
                        className={theme === 'bg-primaryBackground text-primaryContent' ? classNames(
                            item.current ? 'bg-primaryContent text-primaryBackground' : ' hover:bg-primaryContent hover:text-primaryBackground',
                            'rounded-md px-3 py-2 text-sm font-medium'
                        ) : classNames(
                            item.current ? 'bg-primaryBackground text-primaryContent' : ' hover:bg-primaryBackground hover:text-primaryContent',
                            'rounded-md px-3 py-2 text-sm font-medium')}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </Link>
                ))}
                <ThemeToggle />
                {currentUser ? (
                    <div className="">
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="object-cover w-10 h-10 rounded-full"
                                        src={currentUser.data.profilePicture}
                                        alt=""
                                    />
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
                                <Menu.Items className="absolute right-0 z-10 px-1 py-1 mt-2 origin-top-right rounded-md shadow-lg w-65 bg-primaryBackground ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(active ? 'bg-primary/20 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                {currentUser.data.email}
                                            </a>
                                        )}
                                    </Menu.Item>
                                    {currentUser.data.isAdmin && (
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to="/blog/write"
                                                    className={classNames(active ? 'bg-primary/20 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Write blog
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    )}
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to='/profile/admin'
                                                className={classNames(active ? 'bg-primary/20 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Settings
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <p
                                                className={classNames(active ? 'bg-error rounded-md text-primaryBackground' : 'text-error', 'block px-4 py-2 text-sm cursor-pointer')}
                                                onClick={handleSignOut}
                                            >
                                                Sign out
                                            </p>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                ) : (<AuthLinks />)}
            </div>
            <div className="flex xl:hidden">
                <i className="text-black cursor-pointer ri-menu-4-fill ri-2x" onClick={() => setOpen(!open)}></i>
                {open && (
                    <div className="absolute right-0 z-10 flex flex-col items-center w-full gap-6 py-8 text-xl font-medium bg-white shadow-md top-20">
                        <a href="/" className="relative">Home</a>
                        <a href="/" >Blogs</a>
                        <a href="/" >About</a>
                        <a href="/" >Contact</a>
                        <ThemeToggle />
                        <AuthLinks />
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar