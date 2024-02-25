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
        <section className="flex items-center justify-between px-16 py-8 border-t bg-black-500 border-white-500/15">
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