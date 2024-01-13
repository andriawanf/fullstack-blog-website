/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable valid-typeof */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== undefined){
        const value = localStorage.getItem("theme");
        return value || 'bg-[#f5f5f4] text-[#0d0d0d]';
    }
};

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === 'bg-[#f5f5f4] text-[#0d0d0d]' ? "bg-[#0d0d0d] text-[#f5f5f4] " : "bg-[#f5f5f4] text-[#0d0d0d]")
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
}