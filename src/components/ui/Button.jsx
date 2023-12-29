/* eslint-disable react/prop-types */

function Button({title, icon}) {
  return (
    <button className="py-2.5 bg-primary px-7 rounded-full justify-center text-black font-dm font-medium w-full items-center flex gap-2">{title} <i className={icon}></i></button>
  )
}

export default Button