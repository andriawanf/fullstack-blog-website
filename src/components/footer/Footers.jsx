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
        <section className="flex flex-col-reverse items-center justify-between gap-6 px-2 py-4 border-t lg:gap-0 lg:flex-row lg:py-8 lg:px-16 bg-black-500 border-white-500/15">
            <p className="text-base font-normal font-nunito text-white-700">© 2024 Outoftheboys. All rights reserved.</p>
            <div className="flex items-center gap-4 text-base font-normal font-nunito text-white-700">
                <a href="/" className="hover:text-white-500">Home</a>
                <a href="/"  className="hover:text-white-500">Blogs</a>
                <a href="/" className="hover:text-white-500">About Us</a>
                <a href="/" className="hover:text-white-500">Contact</a>
            </div>
        </section>
    )
}

export default Footers