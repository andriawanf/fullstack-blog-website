import {
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Tooltip,
    Input,
    Textarea
} from "@material-tailwind/react";


function Footers() {
    return (
        <section className="flex flex-col pt-6 gap-44 xl:pt-24 lg:pt-20 md:pt-10">
            <div className="flex flex-col items-center justify-center gap-20">
                <div className="flex flex-col max-w-5xl gap-4">
                    <h1 className="text-6xl font-bold text-center font-dm text-white-500"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blueDark-500 to to-blueLight-500">Connect with Us</span> - Your Feedback Shapes Our Success!</h1>
                    <p className="text-lg font-normal text-center font-nunito text-white-700">Whether you have questions, suggestions, or just want to share your experience, we're here to listen.</p>
                </div>
                <div className="flex flex-col w-full max-w-2xl gap-4 text-white-500">
                    <Input size="lg" label="Your Email" className="w-full rounded-lg" />
                    <div className="flex flex-col justify-center w-full gap-4">
                        <Textarea variant="outlined" placeholder="Your Feedback" rows={8} className="rounded-xl" />
                        <Button size="lg" className="w-full rounded-lg bg-gradient-to-r from-blueDark-500 to-blueLight-500 text-black-500">
                            Send Feedback
                        </Button>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute bottom-0 right-0 rounded-full w-44 h-44 bg-blueLight-500 blur-3xl"></div>
                <div className="absolute top-0 left-0 rounded-full w-44 h-44 bg-blueLight-500 blur-3xl"></div>
                <div className="flex flex-col justify-center gap-6 py-11 bg-white-500/5 rounded-3xl">
                    
                </div>
            </div>
        </section>
    )
}

export default Footers