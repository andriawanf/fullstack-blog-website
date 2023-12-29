import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function ThemeToggle() {
    const { toggle, theme } = useContext(ThemeContext);
    return (
        <div
            className="relative flex items-center justify-between w-12 h-6 px-1 bg-black cursor-pointer rounded-xl"
            style={
                theme === "light"
                    ? { backgroundColor: "#000" }
                    : { backgroundColor: "#fff" }
            }
            onClick={toggle}
        >
            <i className="ri-sun-fill text-primary"></i>
            <div
                className={
                    theme === "light"
                        ? "absolute w-4 h-4 bg-white rounded-xl left-1"
                        : "absolute w-4 h-4 bg-black rounded-xl right-1"
                }
            ></div>
            <i className="ri-moon-fill text-primary"></i>
        </div>
    );
}

export default ThemeToggle;
