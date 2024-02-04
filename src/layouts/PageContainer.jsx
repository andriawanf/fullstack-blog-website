/* eslint-disable react/prop-types */

function PageContainer({children}) {
    return (
        <div className="relative w-full px-4 py-4 mx-auto md:px-10 lg:px-20 ">
            {children}
        </div>
    )
}

export default PageContainer