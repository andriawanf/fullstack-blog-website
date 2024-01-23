import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"


function ContactUs() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme === 'bg-primaryBackground text-primaryContent' ? "px-10 py-10 border shadow-lg shadow-border border-border bg-foreground rounded-3xl" : "px-10 py-10 border shadow-lg  border-border bg-foreground rounded-3xl"}>
            {/* Hero Map */}
            <div className="flex flex-col space-y-8 ">
                <div className="mx-auto inline-flex rounded-full px-4 py-1.5 border-border max-w-max bg-primary/20">
                    <p className="text-xs font-semibold leading-normal text-center md:text-sm font-nunito text-primary">
                        Share your thoughts
                    </p>
                </div>
                <p className={theme === 'bg-primaryBackground text-primaryContent' ? "mt-6 text-3xl font-bold leading-tight text-center font-dm sm:text-4xl lg:text-5xl" : "mt-6 text-3xl font-bold leading-tight text-center font-dm sm:text-4xl lg:text-5xl text-primaryContent"}>
                    Love to hear from you
                </p>
                <p className="max-w-4xl mx-auto text-base text-center text-primaryContent/60 md:text-xl font-nunito">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
                    neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
                </p>
            </div>
            <div className="pt-16 mx-auto max-w-7xl">
                <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                    {/* contact from */}
                    <div className="flex items-center justify-center">
                        <div className="px-2 md:px-12">
                            <p className="mt-6 text-3xl font-bold leading-tight text-start font-dm sm:text-4xl lg:text-5xl text-primaryContent">Get in touch</p>
                            <p className="mt-4 text-lg text-primaryContent/60 font-nunito">
                                Our friendly team would love to hear from you.
                            </p>
                            <form action="" className="mt-8 space-y-4 font-nunito">
                                <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="first_name"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="text"
                                            id="first_name"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="last_name"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="text"
                                            id="last_name"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="grid w-full  items-center gap-1.5">
                                    <label
                                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                        type="text"
                                        id="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="grid w-full  items-center gap-1.5">
                                    <label
                                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="phone_number"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                        type="tel"
                                        id="phone_number"
                                        placeholder="Phone number"
                                    />
                                </div>
                                <div className="grid w-full  items-center gap-1.5">
                                    <label
                                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                        id="message"
                                        placeholder="Leave us a message"
                                        cols={3}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="w-full px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <img
                        alt="Contact us"
                        className="hidden object-cover w-full max-h-full rounded-2xl lg:block"
                        src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactUs