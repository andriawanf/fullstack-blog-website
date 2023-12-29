import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"


function Footers() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="flex justify-between items-center py-10">
            <div>
                <p className="text-sm font-nunito font-medium">© 2023 OutOfTheBoys!, Inc. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
                <i className={theme === "light" ? "ri-facebook-circle-fill ri-xl cursor-pointer text-disableText hover:text-black" : "ri-facebook-circle-fill ri-xl cursor-pointer text-white hover:text-primary"}></i>
                <i className={theme === "light" ? "ri-instagram-fill ri-xl cursor-pointer text-disableText hover:text-black" : "ri-instagram-fill ri-xl cursor-pointer text-white hover:text-primary"}></i>
                <i className={theme === "light" ? "ri-twitter-fill ri-xl cursor-pointer text-disableText hover:text-black" : "ri-twitter-fill ri-xl cursor-pointer text-white hover:text-primary"}></i>
                <i className={theme === "light" ? "ri-youtube-fill ri-xl cursor-pointer text-disableText hover:text-black" : "ri-youtube-fill ri-xl cursor-pointer text-white hover:text-primary"}></i>
                <i className={theme === "light" ? "ri-github-fill ri-xl cursor-pointer text-disableText hover:text-black" : "ri-github-fill ri-xl cursor-pointer text-white hover:text-primary"}></i>
            </div>
        </div>
    )
}

export default Footers