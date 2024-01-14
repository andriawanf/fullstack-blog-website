
function Loader() {
    return (
        <div className="flex items-center justify-center w-full h-screen ">
            <div className="flex flex-col items-center gap-4 animate-pulse w-60">
                <div>
                    <div className="w-48 h-6 rounded-md bg-slate-400"></div>
                    <div className="h-4 mx-auto mt-3 rounded-md w-28 bg-slate-400"></div>
                </div>
                <div className="w-full rounded-md h-7 bg-slate-400"></div>
                <div className="w-full rounded-md h-7 bg-slate-400"></div>
                <div className="w-full rounded-md h-7 bg-slate-400"></div>
                <div className="w-1/2 rounded-md h-7 bg-slate-400"></div>
            </div>
        </div>
    )
}

export default Loader