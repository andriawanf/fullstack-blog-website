import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function AuthLinks() {
    const status = "notauthenticated";
    const {theme} = useContext(ThemeContext);

    return (
        <>
            {status === 'notauthenticated' ? (
                <button className={theme === 'light' ? "py-2.5 bg-primary px-7 rounded-full text-activeText" : "py-2.5 bg-primary px-7 rounded-full text-activeText"}>Login</button>
            ) : (
                <>
                    <a href="/" className="text-disableText">Write</a>
                    <button className="py-2.5 bg-primary px-7 rounded-full text-activeText">Logout</button>
                </>
            )}
        </>
    )
}

export default AuthLinks