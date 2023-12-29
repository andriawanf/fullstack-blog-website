/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { useState } from "react";
import { useEffect } from "react";

export default function ThemeProvider({children}) {
    const {theme} = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if(mounted){
        return <div className={theme}>{children}</div>
    }
}
