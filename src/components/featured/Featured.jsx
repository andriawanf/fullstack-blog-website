import Button from "../ui/Button"

function Featured() {
    return (
        <section className="pt-8 xl:pt-10 ">
            <h1 className="pb-10 font-dm font-bold text-5xl leading-[3.5rem] xl:leading-[4.rem] 2xl:leading-[4.5rem] 2xl:text-6xl">Seize the Universe within Your Thoughts, <span className="text-primary">Grasp It All!</span></h1>
            <div className="flex flex-col items-center gap-8 overflow-hidden xl:flex-row lg:gap-10">
                <div className="flex-1 w-full">
                    <img src="https://images.unsplash.com/photo-1416163255873-f17745e8f851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHllbGxvdyUyMGFlc3RoZXRpY3xlbnwwfDB8MHx8fDA%3D" alt="blog-1" className="object-cover w-full rounded-3xl" />
                </div>
                <div className="flex flex-col flex-1 w-full gap-3 lg:gap-4 2xl:gap-3">
                    <p className="text-sm font-normal font-nunito text-disableText xl:text-lg">Desember 26, 2023 <span className="px-2"><i className="ri-circle-fill ri-xs text-primary"></i></span> Blog</p>
                    <h1 className="text-3xl font-semibold sm:text-4xl md:text-4xl font-dm lg:text-5xl xl:text-4xl 2xl:text-6xl 2xl:line-clamp-3">It takes a planet to explore the universe.</h1>
                    <p className="w-full text-sm leading-relaxed sm:text-base md:text-base font-nunito text-disableText line-clamp-3 lg:text-lg lg:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem deleniti dolore corrupti dicta doloremque? Saepe enim sequi sint autem. Obcaecati, laudantium excepturi quidem cumque, corrupti quasi exercitationem aperiam pariatur quod ipsum aliquam minima neque quas ipsam veniam, temporibus officiis. Eveniet odit quis sed minus ab odio officia nulla quibusdam! </p>
                    <div className="w-fit">
                        <Button title="Continue Reading" icon="ri-arrow-right-line" bgColor={"bg-primary"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured