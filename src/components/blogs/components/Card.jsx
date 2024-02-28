import { useSelector } from "react-redux";
import { cn } from "../../../utils/cn";
import { format } from 'date-fns';

const Card = ({
    className,
    children,
    item
}) => {
    const {currentUser} = useSelector(state => state.user);
    return (
        <div
            className={cn(
                "rounded-2xl xl:rounded-3xl h-full w-full p-4 overflow-hidden bg-white-500/5 border border-white-500/15 backdrop-blur-xl relative z-20 flex flex-col gap-4 justify-between",
                className
            )}
        >
            <div>
                <div className="w-full ">
                    <img src={item.imageContent} alt="" className="object-cover w-full h-56 rounded-xl xl:rounded-xl" />
                </div>
                <div className="relative z-50 flex flex-col gap-2 mt-4">
                    <p
                        className={cn(
                            " text-white-700 tracking-wide leading-relaxed text-sm font-nunito line-clamp-3",
                            className
                        )}
                    >
                        {format(new Date(item.createdAt), "dd-MMM-yyyy")}
                    </p>
                    <h4 className={cn("text-white-500 font-bold font-dm text-2xl line-clamp-2 tracking-wide ", className)}>
                        {item.title}
                    </h4>
                    <p
                        className={cn(
                            " text-white-700 tracking-wide leading-relaxed text-sm font-nunito line-clamp-3",
                            className
                        )}
                    >
                        {item?.description}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl">
                    <img src="/src/assets/images/aditya-das-vTw5U_H2oxQ-unsplash.jpg" alt="" className="object-cover w-10 h-10 rounded-xl" />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm leading-relaxed tracking-wide text-white-700 font-nunito line-clamp-3">Written by</p>
                    <h2 className="text-base leading-relaxed tracking-wide text-white-500 font-nunito line-clamp-1">{item.author}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;