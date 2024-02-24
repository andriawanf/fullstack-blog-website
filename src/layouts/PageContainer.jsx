/* eslint-disable react/prop-types */

function PageContainer({children}) {
    return (
        <div className="relative flex flex-col w-full px-4 py-4 mx-auto md:px-6 lg:px-10 xl:px-20">
            {children}
        </div>
    )
}

export default PageContainer