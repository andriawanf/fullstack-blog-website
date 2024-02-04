import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function ThemeToggle() {
    const { toggle, theme } = useContext(ThemeContext);
    return (
        <div
            className="relative flex items-center justify-between w-12 h-6 px-1 cursor-pointer bg-black-500 rounded-xl"
            style={
                theme === "bg-black-500 text-white-500"
                    ? { backgroundColor: "#120e00" }
                    : { backgroundColor: "#f1f0ef" }
            }
            onClick={toggle}
        >
            <i className="ri-sun-fill text-primary"></i>
            <div
                className={
                    theme === "bg-black-500 text-white-500"
                        ? "absolute w-4 h-4 bg-[#f1f0ef] rounded-xl left-1"
                        : "absolute w-4 h-4 bg-[#120e00] rounded-xl right-1"
                }
            ></div>
            <i className="ri-moon-fill text-primary"></i>
        </div>
    );
}

export default ThemeToggle;
