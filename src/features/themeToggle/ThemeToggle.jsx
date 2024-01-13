import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function ThemeToggle() {
    const { toggle, theme } = useContext(ThemeContext);
    return (
        <div
            className="relative flex items-center justify-between w-12 h-6 px-1 bg-black cursor-pointer rounded-xl"
            style={
                theme === "bg-[#f5f5f4] text-[#0d0d0d]"
                    ? { backgroundColor: "#0d0d0d" }
                    : { backgroundColor: "#f5f5f4" }
            }
            onClick={toggle}
        >
            <i className="ri-sun-fill text-primary"></i>
            <div
                className={
                    theme === "bg-[#f5f5f4] text-[#0d0d0d]"
                        ? "absolute w-4 h-4 bg-[#f5f5f4] rounded-xl left-1"
                        : "absolute w-4 h-4 bg-[#0d0d0d] rounded-xl right-1"
                }
            ></div>
            <i className="ri-moon-fill text-primary"></i>
        </div>
    );
}

export default ThemeToggle;
