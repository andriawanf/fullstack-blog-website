import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function AuthLinks() {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    // const status = "notauthenticated";
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {!isAuthenticated ? (
                <button
                    className={theme === 'light' ? "relative inline-flex items-center px-8 py-3 overflow-hidden text-black rounded-xl group focus:outline-none focus:ring bg-primary" : "relative inline-flex items-center px-8 py-3 overflow-hidden text-black rounded-xl group focus:outline-none focus:ring bg-primary"}
                    onClick={() => loginWithRedirect()}
                >
                    <i className="absolute transition-all ri-login-box-line -end-full group-hover:end-4"></i>
                    <span className="text-sm font-medium transition-all font-nunito group-hover:me-4"> Login </span>
                </button>
            ) : (
                <>
                    <Link to="blog/write" className="text-disableText">Write</Link>
                    <button
                        className="relative inline-flex items-center px-8 py-3 overflow-hidden text-black rounded-xl group focus:outline-none focus:ring bg-primary"
                        onClick={() => logout()}
                    >
                        <i className="absolute transition-all ri-login-box-line -end-full group-hover:end-4"></i>
                        <span className="text-sm font-medium transition-all font-nunito group-hover:me-4"> Logout </span>
                    </button>
                </>
            )}
        </>
    )
}

export default AuthLinks