import React from 'react'

function TextInput({ htmlFor, type, id, placeholder, title, action }) {
    return (
        <div className="flex-1 w-full md:w-1/3">
            <label
                className="font-medium leading-none text-white-500 text-md font-dm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={htmlFor}
            >
                {title}
            </label>
            <input
                className="flex w-full h-10 px-3 py-2 mt-1.5 text-sm font-medium border rounded-xl bg-white-500 border-white-700 placeholder:text-white-700 focus:outline-none focus:ring-1 focus:ring-white-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
                type={type}
                placeholder={placeholder}
                id={id}
                onChange={action}
            ></input>
        </div>
    )
}

export default TextInput