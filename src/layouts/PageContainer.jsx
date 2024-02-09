/* eslint-disable react/prop-types */

function PageContainer({children}) {
    return (
        <div className="relative flex flex-col px-4 py-4 mx-auto w-fulllg:gap-10 xl:gap-20 md:px-6 lg:px-10 xl:px-20">
            {children}
        </div>
    )
}

export default PageContainer