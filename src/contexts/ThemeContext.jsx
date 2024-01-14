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
        return value || 'bg-primaryBackground text-primaryContent';
    }
};

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === 'bg-primaryBackground text-primaryContent' ? "bg-primaryContent text-primaryBackground " : "bg-primaryBackground text-primaryContent")
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
}