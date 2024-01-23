import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthLinks() {
    const {currentUser} = useSelector(state => state.user)
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {currentUser ? (
                <>
                    <Link to="blog/write" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-primaryContent hover:text-primaryBackground">Write</Link>
                    <button
                        className="relative inline-flex items-center px-3 py-2 overflow-hidden rounded-md text-primaryContent group focus:outline-none focus:ring bg-primary"
                    >
                        <i className="absolute transition-all ri-logout-box-line -end-full group-hover:end-2"></i>
                        <span className="text-sm font-medium transition-all font-nunito group-hover:me-4"> Sign up </span>
                    </button>
                </>
            ) : (
                <Link to="/signin">
                    <button
                        className={theme === 'bg-primaryBackground text-primaryContent' ? "relative inline-flex items-center px-3 py-2 overflow-hidden text-primaryContent rounded-md group focus:outline-none focus:ring bg-primary" : "relative inline-flex items-center px-3 py-2 overflow-hidden text-primaryContent rounded-md group focus:outline-none focus:ring bg-primary"}
                    >
                        <i className="absolute transition-all ri-login-box-line -end-full group-hover:end-2"></i>
                        <span className="text-sm font-medium transition-all font-nunito group-hover:me-4"> Login </span>
                    </button>
                </Link>
            )}
        </>
    )
}

export default AuthLinks