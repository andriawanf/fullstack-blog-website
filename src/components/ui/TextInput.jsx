import React from 'react'

function TextInput({ htmlFor, type, id, placeholder, title }) {
    return (
        <div className="flex-1 w-full md:w-1/3">
            <label
                className="font-semibold leading-none text-md font-dm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={htmlFor}
            >
                {title}
            </label>
            <input
                className="flex w-full h-10 px-3 py-2 mt-1.5 text-sm font-medium border rounded-md bg-foreground border-black/30 placeholder:text-primaryContent/60 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
                type={type}
                placeholder={placeholder}
                id={id}
            ></input>
        </div>
    )
}

export default TextInput