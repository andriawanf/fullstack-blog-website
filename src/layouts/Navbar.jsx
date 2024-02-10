import { useState, Fragment, useContext } from "react";
import AuthLinks from "../features/authLinks/AuthLinks";
import ThemeToggle from "../features/themeToggle/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { signOutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { Badge, Button, IconButton, Menu as Menus, MenuHandler, MenuItem, MenuList, Avatar, Typography } from "@material-tailwind/react";
import { Disclosure, Menu, Transition } from '@headlessui/react'

const navigation = [
    { name: 'Dashboard', to: '/', icon: 'ri-home-3-line ri-lg' },
    { name: 'Discover Blogs', to: '/blog', icon: 'ri-blogger-line ri-lg' },
    { name: 'About Us', to: '#', icon: 'ri-team-line ri-lg' },
    { name: 'Contact Us', to: '#', icon: 'ri-contacts-line ri-lg' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    // const { theme } = useContext(ThemeContext);
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
        // <nav className="relative z-50 flex items-center justify-between w-full h-20">
        //     <Link to="/">
        //         <div className="flex items-center gap-2">
        //             <div>
        //                 <svg width="40" height="40" viewBox="0 0 150 151" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M122.319 47.3387C125.95 47.3324 129.546 48.0438 132.901 49.4322C136.256 50.8206 139.304 52.8584 141.869 55.4287V55.4287L133.769 47.3287L94.5287 8.09875C90.659 4.23131 85.7296 1.59778 80.3636 0.531062C74.9977 -0.535658 69.436 0.0123003 64.3813 2.10565C59.3267 4.19899 55.006 7.74375 51.9655 12.292C48.9249 16.8402 47.3008 22.1878 47.2986 27.6587V47.3287L122.319 47.3387Z" fill="url(#paint0_linear_8_721)" />
        //                     <path d="M47.3187 27.6688C47.3145 24.0381 48.027 20.4423 49.4152 17.0875C50.8035 13.7327 52.8403 10.6849 55.4087 8.11877V8.11877L47.3087 16.2188L8.09869 55.4388C4.23125 59.3085 1.59778 64.2378 0.531062 69.6038C-0.535658 74.9697 0.0123003 80.5315 2.10565 85.5861C4.19899 90.6408 7.74369 94.9614 12.2919 98.002C16.8402 101.043 22.1878 102.667 27.6587 102.669H47.3287L47.3187 27.6688Z" fill="url(#paint1_linear_8_721)" />
        //                     <path d="M102.649 122.339C102.655 125.97 101.944 129.566 100.555 132.921C99.1668 136.276 97.1289 139.324 94.5586 141.889V141.889L102.659 133.789L141.899 94.5488C145.767 90.6785 148.4 85.7482 149.467 80.3813C150.533 75.0144 149.984 69.4518 147.89 64.3968C145.795 59.3417 142.249 55.0212 137.699 51.9814C133.149 48.9416 127.8 47.319 122.329 47.3187H102.659L102.649 122.339Z" fill="url(#paint2_linear_8_721)" />
        //                     <path d="M27.6487 102.669C24.0194 102.674 20.4247 101.962 17.0714 100.573C13.7181 99.1851 10.6722 97.1479 8.10864 94.5789V94.5789L16.2086 102.679L55.4386 141.919C59.3089 145.787 64.2392 148.421 69.6061 149.487C74.973 150.553 80.5355 150.005 85.5906 147.91C90.6456 145.815 94.9662 142.269 98.006 137.719C101.046 133.17 102.668 127.821 102.669 122.349V102.669H27.6487Z" fill="url(#paint3_linear_8_721)" />
        //                     <defs>
        //                         <linearGradient id="paint0_linear_8_721" x1="46.2986" y1="27.7287" x2="132.779" y2="27.7287" gradientUnits="userSpaceOnUse">
        //                             <stop stopColor="#deb200" />
        //                             <stop offset="1" stopColor="#ffda45" />
        //                         </linearGradient>
        //                         <linearGradient id="paint1_linear_8_721" x1="49" y1="103" x2="49" y2="8" gradientUnits="userSpaceOnUse">
        //                             <stop stopColor="#deb200" />
        //                             <stop offset="1" stopColor="#ffda45" />
        //                         </linearGradient>
        //                         <linearGradient id="paint2_linear_8_721" x1="114" y1="47" x2="115" y2="142" gradientUnits="userSpaceOnUse">
        //                             <stop stopColor="#deb200" />
        //                             <stop offset="1" stopColor="#ffda45" />
        //                         </linearGradient>
        //                         <linearGradient id="paint3_linear_8_721" x1="103" y1="113" x2="8" y2="111" gradientUnits="userSpaceOnUse">
        //                             <stop stopColor="#deb200" />
        //                             <stop offset="1" stopColor="#ffda45" />
        //                         </linearGradient>
        //                     </defs>
        //                 </svg>

        //             </div>
        //             <h1 className="text-lg font-bold font-dm">OutOfTheBoys!</h1>
        //         </div>
        //     </Link>
        //     <div className="items-center hidden gap-8 font-medium xl:flex font-dm lg:gap-4">
        //         {navigation.map((item) => (
        //             <Link
        //                 key={item.name}
        //                 to={item.to}
        //                 className={theme === 'bg-primaryBackground text-primaryContent' ? classNames(
        //                     location.pathname === item.to ? 'bg-primary text-primaryContent' : ' hover:bg-primary/20 hover:text-primaryContent',
        //                     'rounded-md px-3 py-2 text-sm font-medium'
        //                 ) : classNames(
        //                     location.pathname === item.to ? 'bg-primary text-primaryContent' : ' hover:bg-primaryDark hover:text-primaryContent',
        //                     'rounded-md px-3 py-2 text-sm font-medium')}
        //                 aria-current={item.current ? 'page' : undefined}
        //             >
        //                 {item.name}
        //             </Link>
        //         ))}
        //         <ThemeToggle />
        //         {currentUser ? (
        //             <div className="">
        //                 {/* Profile dropdown */}
        //                 <Menu as="div" className="relative ml-3">
        //                     <div>
        //                         <Menu.Button className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        //                             <span className="absolute -inset-1.5" />
        //                             <span className="sr-only">Open user menu</span>
        //                             <img
        //                                 className="object-cover w-10 h-10 rounded-full"
        //                                 src={currentUser.data.profilePicture}
        //                                 alt=""
        //                             />
        //                         </Menu.Button>
        //                     </div>
        //                     <Transition
        //                         as={Fragment}
        //                         enter="transition ease-out duration-100"
        //                         enterFrom="transform opacity-0 scale-95"
        //                         enterTo="transform opacity-100 scale-100"
        //                         leave="transition ease-in duration-75"
        //                         leaveFrom="transform opacity-100 scale-100"
        //                         leaveTo="transform opacity-0 scale-95"
        //                     >
        //                         <Menu.Items className="absolute right-0 z-10 px-1 py-1 mt-2 space-y-2 origin-top-right rounded-md shadow-lg w-65 bg-primaryBackground ring-1 ring-black ring-opacity-5 focus:outline-none">
        //                             <Menu.Item>
        //                                 {({ active }) => (
        //                                     <a
        //                                         href="#"
        //                                         className={classNames(active ? 'bg-primary/20 rounded-md' : '', 'block px-4 py-2 text-sm text-primaryContent')}
        //                                     >
        //                                         {currentUser.data.email}
        //                                     </a>
        //                                 )}
        //                             </Menu.Item>
        //                             {currentUser.data.isAdmin && (
        //                                 <Menu.Item>
        //                                     {({ active }) => (
        //                                         <Link
        //                                             to="/blog/write"
        //                                             className={classNames(active ? 'bg-primary/20 rounded-md' : '', 'block px-4 py-2 text-sm text-primaryContent')}
        //                                         >
        //                                             Write blog
        //                                         </Link>
        //                                     )}
        //                                 </Menu.Item>
        //                             )}
        //                             <Menu.Item>
        //                                 {({ active }) => (
        //                                     <Link
        //                                         to='/settings'
        //                                         className={classNames( location.pathname === '/settings' ? 'bg-primary rounded-md' : 'hover:bg-primary/20 rounded-md', 'block bg px-4 py-2 text-sm text-primaryContent ')}
        //                                     >
        //                                         Settings
        //                                     </Link>
        //                                 )}
        //                             </Menu.Item>
        //                             <Menu.Item>
        //                                 {({ active }) => (
        //                                     <p
        //                                         className={classNames(active ? 'bg-error rounded-md text-primaryBackground' : 'text-error', 'block px-4 py-2 text-sm cursor-pointer')}
        //                                         onClick={handleSignOut}
        //                                     >
        //                                         Sign out
        //                                     </p>
        //                                 )}
        //                             </Menu.Item>
        //                         </Menu.Items>
        //                     </Transition>
        //                 </Menu>
        //             </div>
        //         ) : (<AuthLinks />)}
        //     </div>
        //     <div className="flex xl:hidden">
        //         <i className="text-black cursor-pointer ri-menu-4-fill ri-2x" onClick={() => setOpen(!open)}></i>
        //         {open && (
        //             <div className="absolute right-0 z-10 flex flex-col items-center w-full gap-6 py-8 text-xl font-medium bg-white shadow-md top-20">
        //                 <a href="/" className="relative">Home</a>
        //                 <a href="/" >Blogs</a>
        //                 <a href="/" >About</a>
        //                 <a href="/" >Contact</a>
        //                 <ThemeToggle />
        //                 <AuthLinks />
        //             </div>
        //         )}
        //     </div>
        // </nav>



        <Disclosure as="nav" className="fixed left-0 right-0 z-50 mx-4 bg-white-500/5 rounded-xl backdrop-blur-xl xl:mx-20 md:mx-10">
            {({ open }) => (
                <>
                    <div className="w-full px-6 mx-auto">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <i className="block w-6 h-6 ri-close-line " aria-hidden="true" ></i>
                                    ) : (
                                        <i className="block w-6 h-6 ri-menu-line" aria-hidden="true" ></i>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex items-center justify-center flex-1 lg:flex-none lg:items-stretch lg:justify-start">
                                <img
                                    className="w-auto h-8"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                />
                            </div>
                            <div className="hidden lg:block">
                                <div className="flex space-x-2">
                                    {navigation.map((menuItem) => (
                                        <Link key={menuItem.name} to={menuItem.to} className={location.pathname === menuItem.to ? "flex items-center gap-2 px-4 py-2 rounded-lg text-white-500 bg-blueDark-500/20 text-sm font-mendium font-nunito" : "flex items-center gap-2 px-4 py-2 rounded-lg text-white-700 hover:bg-blueDark-500/20 hover:text-white-500 text-sm font-medium font-nunito"}>
                                            <i className={menuItem.icon}></i>
                                            <p>{menuItem.name}</p>
                                            {menuItem.name === "Discover Blogs" ? (<i className="ri-arrow-down-s-line ri-lg"></i>) : ""}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center ">
                                <div className="flex gap-1 text-white-500">
                                    <IconButton className="bg-transparent">
                                        <i className="ri-sun-line ri-xl"></i>
                                    </IconButton>
                                    <Menus allowHover={true} placement="bottom-end">
                                        <MenuHandler>
                                            <IconButton className="bg-transparent">
                                                <Badge className="bg-red-900">
                                                    <i className="ri-notification-2-line ri-xl"></i>
                                                </Badge>
                                            </IconButton>
                                        </MenuHandler>
                                        <MenuList className="relative flex flex-col gap-2 bg-white-500 text-black-500">
                                            <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                                                <Avatar
                                                    variant="circular"
                                                    alt="tania andrew"
                                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                                />
                                                <div className="flex flex-col gap-1">
                                                    <Typography variant="small" color="gray" className="font-semibold">
                                                        Tania send you a message
                                                    </Typography>
                                                    <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
                                                        <i className="ri-time-fill"></i>
                                                        13 minutes ago
                                                    </Typography>
                                                </div>
                                            </MenuItem>
                                            <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                                                <Avatar
                                                    variant="circular"
                                                    alt="natali craig"
                                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                                                />
                                                <div className="flex flex-col gap-1">
                                                    <Typography variant="small" color="gray" className="font-semibold">
                                                        Natali replied to your email.
                                                    </Typography>
                                                    <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
                                                        <i className="ri-time-fill"></i>1 hour ago
                                                    </Typography>
                                                </div>
                                            </MenuItem>
                                            <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
                                                <Avatar
                                                    variant="circular"
                                                    alt="paypal"
                                                    src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
                                                />
                                                <div className="flex flex-col gap-1">
                                                    <Typography variant="small" color="gray" className="font-semibold">
                                                        You&apos;ve received a payment.
                                                    </Typography>
                                                    <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
                                                        <i className="ri-time-fill"></i>5 hours ago
                                                    </Typography>
                                                </div>
                                            </MenuItem>
                                        </MenuList>
                                    </Menus>
                                </div>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex text-sm rounded-full bg-blueDark-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blueDark-500">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="object-cover w-8 h-8 rounded-full"
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
                                        <Menu.Items className="absolute right-0 z-10 flex flex-col w-56 gap-2 p-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-white-500 ring-opacity-5 focus:outline-none bg-white-500 text-black-500">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-primary/20 rounded-md' : '', 'block px-4 py-2 text-sm text-black-500 font-nunito font-medium')}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <img className="object-cover w-8 h-8 rounded-full"
                                                                src={currentUser.data.profilePicture} alt="" />
                                                            <div>
                                                                <p>{currentUser.data.name}</p>
                                                                <h1>{currentUser.data.email}</h1>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-primary/20 rounded-md' : '', 'block px-4 py-2 text-sm font-nunito font-medium text-black-500')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'rounded-md' : '', 'block px-4 py-2 text-sm bg-red-900 rounded-md text-center text-white-500 font-nunito font-medium')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((menuItem) => (
                                <Link key={menuItem.name} to={menuItem.to} className={location.pathname === menuItem.to ? "flex items-center gap-2 px-4 py-2 rounded-lg text-white-500 bg-blueDark-500/20 text-sm font-mendium font-nunito" : "flex items-center gap-2 px-4 py-2 rounded-lg text-white-700 hover:bg-blueDark-500/20 hover:text-white-500 text-sm font-medium font-nunito"}>
                                    <i className={menuItem.icon}></i>
                                    <p>{menuItem.name}</p>
                                    {menuItem.name === "Discover Blogs" ? (<i className="ri-arrow-down-s-line ri-lg"></i>) : ""}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        // <nav className="fixed left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-4 top-4 bg-white-500/5 rounded-xl backdrop-blur-xl lg:mx-20 md:mx-10">
        //     {/* Left Navbar */}
        //     <Link to="/" className="flex flex-row items-center gap-3">
        //         <div className="w-6 h-6 rounded-full bg-blueLight-500"></div>
        //         <p className="text-lg font-semibold leading-relaxed font-dm text-white-500">OutoftheBoys</p>
        //     </Link>
        //     {/* Menu Navbar */}
        //     <div className="items-center hidden gap-1 text-sm font-normal leading-relaxed xl:flex-row xl:flex font-nunito xl:pr-10">
        //         {navigation.map((menuItem) => (
        //             <Link key={menuItem.name} to={menuItem.to} className={location.pathname === menuItem.to ? "flex items-center gap-2 px-4 py-2 rounded-lg text-white-500 bg-blueDark-500" : "flex items-center gap-2 px-4 py-2 rounded-lg text-white-700 hover:bg-blueDark-500/20 hover:text-white-500"}>
        //                 <i className={menuItem.icon}></i>
        //                 <p>{menuItem.name}</p>
        //                 {menuItem.name === "Discover Blogs" ? (<i className="ri-arrow-down-s-line ri-lg"></i>) : ""}
        //             </Link>
        //         ))}
        //     </div>
        //     {/* Right Navbar */}
        //     <div className="flex gap-4 item-center">
        //         {/* Notif & Theme */}
        //         <div className="flex gap-2 text-white-500">
        //             <IconButton className="bg-transparent">
        //                 <i className="ri-sun-line ri-xl"></i>
        //             </IconButton>
        // <Menu>
        //     <Badge content="5" className="bg-red-900">
        //         <MenuHandler>
        //             <IconButton className="bg-transparent">
        //                 <i className="ri-notification-2-line ri-xl"></i>
        //             </IconButton>
        //         </MenuHandler>
        //     </Badge>
        //     <MenuList className="flex flex-col gap-2 bg-white-500 text-black-500">
        //         <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
        //             <Avatar
        //                 variant="circular"
        //                 alt="tania andrew"
        //                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        //             />
        //             <div className="flex flex-col gap-1">
        //                 <Typography variant="small" color="gray" className="font-semibold">
        //                     Tania send you a message
        //                 </Typography>
        //                 <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
        //                     <i className="ri-time-fill"></i>
        //                     13 minutes ago
        //                 </Typography>
        //             </div>
        //         </MenuItem>
        //         <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
        //             <Avatar
        //                 variant="circular"
        //                 alt="natali craig"
        //                 src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
        //             />
        //             <div className="flex flex-col gap-1">
        //                 <Typography variant="small" color="gray" className="font-semibold">
        //                     Natali replied to your email.
        //                 </Typography>
        //                 <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
        //                     <i className="ri-time-fill"></i>1 hour ago
        //                 </Typography>
        //             </div>
        //         </MenuItem>
        //         <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
        //             <Avatar
        //                 variant="circular"
        //                 alt="paypal"
        //                 src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
        //             />
        //             <div className="flex flex-col gap-1">
        //                 <Typography variant="small" color="gray" className="font-semibold">
        //                     You&apos;ve received a payment.
        //                 </Typography>
        //                 <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
        //                     <i className="ri-time-fill"></i>5 hours ago
        //                 </Typography>
        //             </div>
        //         </MenuItem>
        //     </MenuList>
        // </Menu>
        //         </div>
        //         {/* Profile User or auth button */}
        //         <div>
        //             {currentUser ? (
        //                 <Menu>
        //                     <MenuHandler>
        //                         <Avatar
        //                             variant="circular"
        //                             size="sm"
        //                             alt="tania andrew"
        //                             className="cursor-pointer"
        //                             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        //                         />
        //                     </MenuHandler>
        //                     <MenuList className="bg-white-500 text-black-500">
        //                         <MenuItem className="flex items-center gap-2">
        //                             <svg
        //                                 width="16"
        //                                 height="16"
        //                                 viewBox="0 0 16 16"
        //                                 fill="none"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                             >
        //                                 <path
        //                                     fill-rule="evenodd"
        //                                     clip-rule="evenodd"
        //                                     d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
        //                                     fill="#90A4AE"
        //                                 />
        //                             </svg>

        //                             <Typography variant="small" className="font-medium">
        //                                 My Profile
        //                             </Typography>
        //                         </MenuItem>
        //                         <MenuItem className="flex items-center gap-2">
        //                             <svg
        //                                 width="16"
        //                                 height="16"
        //                                 viewBox="0 0 16 16"
        //                                 fill="none"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                             >
        //                                 <path
        //                                     fill-rule="evenodd"
        //                                     clip-rule="evenodd"
        //                                     d="M9.48999 1.17C9.10999 -0.39 6.88999 -0.39 6.50999 1.17C6.45326 1.40442 6.34198 1.62213 6.18522 1.80541C6.02845 1.9887 5.83063 2.13238 5.60784 2.22477C5.38505 2.31716 5.1436 2.35564 4.90313 2.33709C4.66266 2.31854 4.42997 2.24347 4.22399 2.118C2.85199 1.282 1.28199 2.852 2.11799 4.224C2.65799 5.11 2.17899 6.266 1.17099 6.511C-0.390006 6.89 -0.390006 9.111 1.17099 9.489C1.40547 9.54581 1.62322 9.65719 1.80651 9.81407C1.98979 9.97096 2.13343 10.1689 2.22573 10.3918C2.31803 10.6147 2.35639 10.8563 2.33766 11.0968C2.31894 11.3373 2.24367 11.5701 2.11799 11.776C1.28199 13.148 2.85199 14.718 4.22399 13.882C4.42993 13.7563 4.66265 13.6811 4.90318 13.6623C5.14371 13.6436 5.38527 13.682 5.60817 13.7743C5.83108 13.8666 6.02904 14.0102 6.18592 14.1935C6.34281 14.3768 6.45419 14.5945 6.51099 14.829C6.88999 16.39 9.11099 16.39 9.48899 14.829C9.54599 14.5946 9.65748 14.377 9.8144 14.1939C9.97132 14.0107 10.1692 13.8672 10.3921 13.7749C10.6149 13.6826 10.8564 13.6442 11.0969 13.6628C11.3373 13.6815 11.57 13.7565 11.776 13.882C13.148 14.718 14.718 13.148 13.882 11.776C13.7565 11.57 13.6815 11.3373 13.6628 11.0969C13.6442 10.8564 13.6826 10.6149 13.7749 10.3921C13.8672 10.1692 14.0107 9.97133 14.1939 9.81441C14.377 9.65749 14.5946 9.546 14.829 9.489C16.39 9.11 16.39 6.889 14.829 6.511C14.5945 6.45419 14.3768 6.34281 14.1935 6.18593C14.0102 6.02904 13.8666 5.83109 13.7743 5.60818C13.682 5.38527 13.6436 5.14372 13.6623 4.90318C13.681 4.66265 13.7563 4.42994 13.882 4.224C14.718 2.852 13.148 1.282 11.776 2.118C11.5701 2.24368 11.3373 2.31895 11.0968 2.33767C10.8563 2.35639 10.6147 2.31804 10.3918 2.22574C10.1689 2.13344 9.97095 1.9898 9.81407 1.80651C9.65718 1.62323 9.5458 1.40548 9.48899 1.171L9.48999 1.17ZM7.99999 11C8.79564 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79564 5 7.99999 5C7.20434 5 6.44128 5.31607 5.87867 5.87868C5.31606 6.44129 4.99999 7.20435 4.99999 8C4.99999 8.79565 5.31606 9.55871 5.87867 10.1213C6.44128 10.6839 7.20434 11 7.99999 11Z"
        //                                     fill="#90A4AE"
        //                                 />
        //                             </svg>

        //                             <Typography variant="small" className="font-medium">
        //                                 Edit Profile
        //                             </Typography>
        //                         </MenuItem>
        //                         <MenuItem className="flex items-center gap-2">
        //                             <svg
        //                                 width="14"
        //                                 height="14"
        //                                 viewBox="0 0 14 14"
        //                                 fill="none"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                             >
        //                                 <path
        //                                     fill-rule="evenodd"
        //                                     clip-rule="evenodd"
        //                                     d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0H2ZM2 2H12V9H10L9 11H5L4 9H2V2Z"
        //                                     fill="#90A4AE"
        //                                 />
        //                             </svg>

        //                             <Typography variant="small" className="font-medium">
        //                                 Inbox
        //                             </Typography>
        //                         </MenuItem>
        //                         <MenuItem className="flex items-center gap-2">
        //                             <svg
        //                                 width="16"
        //                                 height="16"
        //                                 viewBox="0 0 16 16"
        //                                 fill="none"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                             >
        //                                 <path
        //                                     fill-rule="evenodd"
        //                                     clip-rule="evenodd"
        //                                     d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM14 8C14 8.993 13.759 9.929 13.332 10.754L11.808 9.229C12.0362 8.52269 12.0632 7.76679 11.886 7.046L13.448 5.484C13.802 6.249 14 7.1 14 8ZM8.835 11.913L10.415 13.493C9.654 13.8281 8.83149 14.0007 8 14C7.13118 14.0011 6.27257 13.8127 5.484 13.448L7.046 11.886C7.63267 12.0298 8.24426 12.039 8.835 11.913ZM4.158 9.117C3.96121 8.4394 3.94707 7.72182 4.117 7.037L4.037 7.117L2.507 5.584C2.1718 6.34531 1.99913 7.16817 2 8C2 8.954 2.223 9.856 2.619 10.657L4.159 9.117H4.158ZM5.246 2.667C6.09722 2.22702 7.04179 1.99825 8 2C8.954 2 9.856 2.223 10.657 2.619L9.117 4.159C8.34926 3.93538 7.53214 3.94687 6.771 4.192L5.246 2.668V2.667ZM10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10C7.46957 10 6.96086 9.78929 6.58579 9.41421C6.21071 9.03914 6 8.53043 6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8Z"
        //                                     fill="#90A4AE"
        //                                 />
        //                             </svg>
        //                             <Typography variant="small" className="font-medium">
        //                                 Help
        //                             </Typography>
        //                         </MenuItem>
        //                         <hr className="my-2 border-blue-gray-50" />
        //                         <MenuItem className="flex items-center gap-2 ">
        //                             <svg
        //                                 width="16"
        //                                 height="14"
        //                                 viewBox="0 0 16 14"
        //                                 fill="none"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                             >
        //                                 <path
        //                                     fill-rule="evenodd"
        //                                     clip-rule="evenodd"
        //                                     d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
        //                                     fill="#90A4AE"
        //                                 />
        //                             </svg>
        //                             <Typography variant="small" className="font-medium">
        //                                 Sign Out
        //                             </Typography>
        //                         </MenuItem>
        //                     </MenuList>
        //                 </Menu>
        //             ) : (
        //                 <button className="px-4 py-2 font-medium rounded-lg text-md font-nunito text-black-500 bg-gradient-to-r from-blueDark-500 to-blueLight-500">
        //                     <p>Log In</p>
        //                 </button>
        //             )}
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar