import React from 'react'

function SelectOption({htmlFor, name, id, option, title, action}) {
    return (
        <div className="w-full md:w-1/4">
            <label htmlFor={htmlFor} className="font-medium leading-none text-md font-dm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white-500"> {title} </label>

            <select
                name={name}
                id={id}
                className="flex w-full h-10 px-3 py-2 mt-1.5 text-sm font-medium border rounded-xl bg-white-500 border-black/30 placeholder:text-white-700 focus:outline-none focus:ring-1 focus:ring-white-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
                onChange={action}
            >
                <option value="" disabled>Please select</option>
                {option.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectOption