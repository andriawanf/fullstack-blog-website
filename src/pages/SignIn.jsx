import { Link, useNavigate } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import PageContainer from "../layouts/PageContainer";
import { useState } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";


function SignIn() {
    const [formData, setFormData] = useState({});
    const {loading, error: errorMessage} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            return dispatch(signInFailure("Please fill out all fields."));
        }
        try {
            dispatch(signInStart());
            const res = await axios.post("/api/auth/signin", formData);
            if(res.status !== 200){
                dispatch(signInFailure(res.message));
            }
            // setLoading(false)
            if (res.status === 200) {
                dispatch(signInSuccess(res));
                navigate('/');  
            }
        } catch (error) {
            dispatch(signInFailure(error.message));
        }
    }
    return (
        <PageContainer>
            <Navbar />
            <section>
                <div className="grid grid-cols-1 py-8 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2 className="text-3xl font-bold leading-tight sm:text-4xl font-dm">Sign in</h2>
                            <p className="mt-2 text-sm font-nunito">
                                Don&apos;t have an account?{' '}
                                <Link to="/signup" className="font-bold transition-all duration-200 hover:underline text-primaryDark"
                                >
                                    Create a free account
                                </Link>
                            </p>
                            <form className="mt-8" onSubmit={handleSubmit}>
                                <div className="space-y-5">
                                    {errorMessage && (
                                        <div>
                                            <p className="flex items-center w-full h-10 p-3 text-sm font-medium font-nunito text-error bg-error/15 rounded-xl">{errorMessage}</p>
                                        </div>
                                    )}
                                    <div>
                                        <label htmlFor="email" className="text-base font-medium font-dm">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
                                                type="email"
                                                placeholder="Email"
                                                onChange={handleChange}
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-base font-medium font-dm">
                                                {' '}
                                                Password{' '}
                                            </label>
                                            <a
                                                href="#"
                                                title=""
                                                className="text-sm font-semibold hover:underline"
                                            >
                                                {' '}
                                                Forgot password?{' '}
                                            </a>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
                                                type="password"
                                                placeholder="***************"
                                                onChange={handleChange}
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-3.5 py-2.5 font-semibold leading-7  hover:bg-primaryLight focus:bg-primaryDark font-nunito"
                                            disabled={loading}
                                        >
                                            {
                                                loading ? (
                                                    "Loading..."
                                                ) : "Sign in"
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <span className="flex items-center py-6">
                                <span className="flex-1 h-px bg-secondaryContent/30"></span>
                                <span className="px-6 font-medium shrink-0 text-md font-nunito text-secondaryContent/50">Or</span>
                                <span className="flex-1 h-px bg-secondaryContent/30"></span>
                            </span>
                            <div className="space-y-3">
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-xl border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none font-nunito"
                                >
                                    <span className="inline-block mr-2">
                                        <svg
                                            className="w-6 h-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </span>
                                    Sign in with Google
                                </button>
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-xl border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none font-nunito"
                                >
                                    <span className="inline-block mr-2">
                                        <svg
                                            className="h-6 w-6 text-[#2563EB]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </span>
                                    Sign in with Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full">
                        <img
                            className="object-cover w-full h-full mx-auto rounded-2xl"
                            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </PageContainer>
    )
}

export default SignIn