import { Link, useNavigate } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import PageContainer from "../layouts/PageContainer";
import { useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";



function Signup() {
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            return setErrorMessage("Please fill out all fields.")
        }
        try {
            setIsLoading(true);
            setErrorMessage(null);
            const res = await axios.post("/api/auth/signup", formData);
            if (res.success === false) {
                return setErrorMessage(res.message);
            }
            setIsLoading(false)
            if (res.data.status === "success") {
                navigate('/signin');
            }
        } catch (error) {
            setErrorMessage(error.message);
            setIsLoading(false)
        }
    }

    return (
        <section className="px-2 py-8 md:py-24 lg:px-16 lg:py-16">
            <div className="flex items-center justify-center p-8 mx-auto border border-white-500/5 w-fit rounded-3xl ">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md text-white-500">
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl font-dm">Create account</h2>
                    <p className="mt-2 text-sm font-nunito">
                        Its easy! just take a minute and provide the details.
                    </p>
                    <form className="mt-8" onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            {errorMessage && (
                                <div>
                                    <p className="flex items-center w-full h-10 p-3 text-sm font-medium font-nunito text-error bg-error/15 rounded-xl">{errorMessage}</p>
                                </div>
                            )}
                            <div>
                                <label htmlFor="username" className="text-base font-normal font-dm">
                                    {' '}
                                    Username{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        className="flex w-full h-10 px-3.5 py-2.5 text-sm bg-transparent border border-gray-300 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
                                        type="text"
                                        placeholder="Username"
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base font-normal font-dm">
                                    {' '}
                                    Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        className="flex w-full h-10 px-3.5 py-2.5 text-sm bg-transparent border border-gray-300 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-base font-normal font-dm">
                                        {' '}
                                        Password{' '}
                                    </label>
                                    <a
                                        href="#"
                                        title=""
                                        className="text-sm font-medium hover:underline"
                                    >
                                        {' '}
                                        Forgot password?{' '}
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        className="flex w-full h-10 px-3.5 py-2.5 text-sm bg-transparent border border-gray-300 rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <Button
                                    size="md"
                                    variant="filled"
                                    className="w-full text-sm font-semibold capitalize text-black-500 font-nunito rounded-xl bg-gradient-to-r from-blueDark-500 to-blueLight-500"
                                    disabled={isLoading}
                                >
                                    {
                                        isLoading ? (
                                            "Loading..."
                                        ) : "Sign up"
                                    }
                                </Button>
                            </div>
                        </div>
                    </form>
                    <span className="flex items-center py-6">
                        <span className="flex-1 h-px bg-white-500/25"></span>
                        <span className="px-6 font-medium shrink-0 text-md font-nunito text-white-500/25">Or</span>
                        <span className="flex-1 h-px bg-white-500/25"></span>
                    </span>
                    <div className="space-y-3">
                        <Button
                            className="relative inline-flex items-center justify-center w-full font-semibold transition-all duration-200 bg-white border border-gray-400 rounded-xl text-white-500 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none font-nunito"
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
                        </Button>
                        <Button
                            type="button"
                            className="relative inline-flex items-center justify-center w-full font-semibold transition-all duration-200 bg-white border border-gray-400 rounded-xl text-white-500 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none font-nunito"
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
                        </Button>
                        <p className="mt-4 text-sm font-normal text-center sm:mt-0 font-nunito">
                            Already have an account?
                            <Link to="/signin" className="ml-2 text-blueDark-500 hover:underline hover:decoration-blueDark-500">Log in</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup