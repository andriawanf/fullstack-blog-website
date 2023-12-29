/* eslint-disable react/prop-types */

function PageContainer({children}) {
    return (
        <div className="w-full h-full m-auto px-10 lg:px-20 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1366px] overflow-hidden">
            {children}
        </div>
    )
}

export default PageContainer