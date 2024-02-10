import {
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Tooltip,
    Input,
    Textarea
} from "@material-tailwind/react";


function Footers() {
    return (
        <section className="flex flex-col pt-6 gap-44 xl:pt-24 lg:pt-20 md:pt-10">
            <div className="flex flex-col items-center justify-center gap-20">
                <div className="flex flex-col max-w-5xl gap-4">
                    <h1 className="text-6xl font-bold text-center font-dm text-white-500"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blueDark-500 to to-blueLight-500">Connect with Us</span> - Your Feedback Shapes Our Success!</h1>
                    <p className="text-lg font-normal text-center font-nunito text-white-700">Whether you have questions, suggestions, or just want to share your experience, we're here to listen.</p>
                </div>
                <div className="flex flex-col w-full max-w-2xl gap-4 text-white-500">
                    <Input size="lg" label="Your Email" className="w-full rounded-lg" />
                    <div className="flex flex-col justify-center w-full gap-4">
                        <Textarea variant="outlined" placeholder="Your Feedback" rows={8} className="rounded-xl" />
                        <Button size="lg" className="w-full rounded-lg bg-gradient-to-r from-blueDark-500 to-blueLight-500 text-black-500">
                            Send Feedback
                        </Button>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute rounded-full -right-20 -bottom-20 w-44 h-44 bg-blueLight-500 blur-[150px]"></div>
                <div className="absolute rounded-full -top-20 -left-20 w-44 h-44 bg-blueLight-500 blur-[150px]"></div>
                <div className="flex flex-col items-center justify-center gap-6 py-11 bg-white-500/5 rounded-3xl">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blueLight-500"></div>
                        <p className="text-xl font-semibold leading-relaxed tracking-wide font-dm text-white-500">OutoftheBoys</p>
                    </div>
                    <ul className="flex items-center gap-10 text-sm font-medium text-white-500 font-nunito">
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Discover Blogs</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    <div className="flex items-center gap-6 text-white-500">
                        <a href="#">
                            <i className="ri-facebook-circle-fill ri-xl "></i>
                        </a>
                        <a href="#">
                            <i className="ri-instagram-fill ri-xl "></i>
                        </a>
                        <a href="#">
                            <i className="ri-linkedin-box-fill ri-xl "></i>
                        </a>
                        <a href="#">
                            <i className="ri-twitter-fill ri-xl "></i>
                        </a>
                    </div>
                    <div className="w-full h-px bg-black-400"></div>
                    <div className="flex items-center justify-between w-full text-sm font-medium text-white-500 font-nunito px-11">
                        <p>Website Blogs - Outoftheboys</p>
                        <p>Copyrighted © 2024 by Me😉</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footers