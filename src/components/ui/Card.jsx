
function Card() {
    return (
        <div className="flex flex-col w-full gap-3">
            <div className="w-full overflow-hidden rounded-3xl">
                <img src="https://images.unsplash.com/photo-1416163255873-f17745e8f851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHllbGxvdyUyMGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D" alt="" className="object-cover w-full h-56 transition duration-300 ease-in-out delay-150 rounded-3xl hover:-translate-y-1 hover:scale-110 "/>
            </div>
            <a href="/" className="text-2xl font-semibold cursor-pointer font-dm lg:line-clamp-1 xl:line-clamp-2 2xl:line-clamp-3 md:line-clamp-1 sm:line-clamp-1 line-clamp-1">It takes a planet to explore the universe.</a>
            <div className="w-full h-[0.08rem] bg-disableText/25"></div>
            <p className="text-sm font-normal font-nunito text-disableText xl:text-base">Desember 26, 2023 <span className="px-2"><i className="ri-circle-fill ri-xs text-primary"></i></span> Blog</p>
        </div>
    )
}

export default Card