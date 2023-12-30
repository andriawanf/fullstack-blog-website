import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {useAuth0} from "@auth0/auth0-react";

function AuthLinks() {
    const {loginWithRedirect, isAuthenticated, logout} = useAuth0();
    // const status = "notauthenticated";
    const {theme} = useContext(ThemeContext);

    return (
        <>
            {!isAuthenticated ? (
                <button className={theme === 'light' ? "py-2.5 bg-primary px-7 rounded-full text-activeText" : "py-2.5 bg-primary px-7 rounded-full text-activeText"} onClick={() => loginWithRedirect()}>Login</button>
            ) : (
                <>
                    <a href="/" className="text-disableText">Write</a>
                    <button className="py-2.5 bg-primary px-7 rounded-full text-activeText" onClick={() => logout()}>Logout</button>
                </>
            )}
        </>
    )
}

export default AuthLinks