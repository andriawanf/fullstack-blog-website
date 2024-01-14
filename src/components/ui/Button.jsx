/* eslint-disable react/prop-types */

function Button({ title, icon, bgColor }) {
  return (
    <a
      className={`relative inline-flex items-center px-8 py-3 overflow-hidden text-primaryContent ${bgColor} rounded-xl group focus:outline-none focus:ring ${bgColor}`}
      href="/download"
    >
      <i className={`${icon} absolute transition-all -end-full group-hover:end-4`}></i>
      <span className="text-sm font-medium transition-all font-nunito group-hover:me-4"> {title} </span>
    </a>
  )
}

export default Button