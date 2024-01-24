import React from 'react'

function SelectOption({htmlFor, name, id, option, title}) {
    return (
        <div className="flex-1 w-full md:w-1/3">
            <label htmlFor={htmlFor} className="font-semibold leading-none text-md font-dm peer-disabled:cursor-not-allowed peer-disabled:opacity-70"> {title} </label>

            <select
                name={name}
                id={id}
                className="flex w-full h-10 px-3 py-2 mt-1.5 text-sm font-medium border rounded-md bg-foreground border-black/30 placeholder:text-primaryContent/60 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 font-nunito"
            >
                <option value="">Please select</option>
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