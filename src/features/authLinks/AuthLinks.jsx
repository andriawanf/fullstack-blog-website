import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthLinks() {
    const {currentUser} = useSelector(state => state.user)
    console.log(currentUser)
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {currentUser ? (
                <>
                    <Link to="blog/write" className="">Write</Link>
                    <button
                        className="relative inline-flex items-center px-8 py-3 overflow-hidden text-primaryContent rounded-xl group focus:outline-none focus:ring bg-primary"
                    >
                        <i className="absolute transition-all ri-logout-box-line -end-full group-hover:end-4"></i>
                        <span className="text-sm font-medium transition-all font-nunito group-hover:me-4"> Logout </span>
                    </button>
                </>
            ) : (
                <Link to="/signin">
                    <button
                        className={theme === 'bg-primaryBackground text-primaryContent' ? "relative inline-flex items-center px-8 py-3 overflow-hidden text-primaryContent rounded-xl group focus:outline-none focus:ring bg-primary" : "relative inline-flex items-center px-8 py-3 overflow-hidden text-primaryContent rounded-xl group focus:outline-none focus:ring bg-primary"}
                    >
                        <i className="absolute transition-all ri-login-box-line -end-full group-hover:end-4"></i>
                        <span className="text-sm font-medium transition-all font-nunito group-hover:me-4"> Login </span>
                    </button>
                </Link>
            )}
        </>
    )
}

export default AuthLinks