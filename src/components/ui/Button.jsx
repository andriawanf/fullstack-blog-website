/* eslint-disable react/prop-types */

function Button({ title, icon, bgColor, size, type }) {
  return (
    <button
      className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-primaryContent ${bgColor} rounded-md group focus:outline-none focus:ring ${bgColor} ${size}`}
      type={type}
    >
      <i className={`${icon} absolute transition-all -end-full group-hover:end-4`}></i>
      <span className="text-sm font-medium transition-all font-nunito group-hover:me-4"> {title} </span>
    </button>
  )
}

export default Button