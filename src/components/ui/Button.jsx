/* eslint-disable react/prop-types */

function Button({ title, icon, bgColor, size, type, onClick}) {
  return (
    <button
      className={`relative overflow-hidden px-10 py-2.5 font-medium text-primaryContent transition duration-300 rounded-md hover:scale-105 active:scale-75 ease ${bgColor} ${size}`}
      type={type}
      onClick={onClick}
    >
      <span class="absolute bottom-0 left-0 h-full -ml-2">
    <svg viewBox="0 0 487 487" class="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#fff" fill-rule="nonzero" fill-opacity=".2"></path></svg>
    </span>
    <span class="absolute top-0 right-0 w-12 h-full -mr-2">
    <svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#fff" fill-rule="nonzero" fill-opacity=".2"></path></svg>
    </span>
    <span class="relative font-nunito">{title}</span>
    </button>
  )
}

export default Button