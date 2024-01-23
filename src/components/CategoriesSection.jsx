import { CategoriesData } from '../data/CategoriesData';
import { ThemeContext } from "../contexts/ThemeContext";
import {useContext} from "react";

function CategoriesSection() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
                <div className="mx-auto inline-flex rounded-full bg-primary/20 px-4 py-1.5">
                    <p className="text-xs font-semibold tracking-widest uppercase font-nunito text-primary">
                        100+ Article with categories
                    </p>
                </div>
                <h2 className={theme === 'bg-primaryBackground text-primaryContent' ? "mt-6 text-3xl font-bold leading-tight font-dm sm:text-4xl lg:text-5xl" : "mt-6 text-3xl font-bold leading-tight font-dm sm:text-4xl lg:text-5xl text-primaryContent" }>
                    Explore All Blog Categories for Every Interest!
                </h2>
                <p className={theme === 'bg-primaryBackground text-primaryContent' ? "mt-4 text-base leading-relaxed font-nunito" : "mt-4 text-base leading-relaxed font-nunito text-primaryContent/60" }>
                    Embark on a journey of diverse content tailored to suit every interest. Our categories offer a rich tapestry of topics, ensuring there&apos;s something for everyone.
                </p>
            </div>
            <div className="relative grid grid-cols-1 mt-12 text-center gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                {CategoriesData.map((cat, index) => {
                    return (
                        <div key={index} >
                            <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-primary">
                                <i className={`text-3xl h-9 w-9 ${cat.icon}`} ></i>
                            </div>
                            <h3 className={theme === 'bg-primaryBackground text-primaryContent' ? "mt-8 text-lg font-semibold font-dm" : "mt-8 text-lg font-semibold font-dm text-primaryContent"}>{cat.title}</h3>
                            <p className={theme === 'bg-primaryBackground text-primaryContent' ? "mt-4 text-sm font-nunito" : "mt-4 text-sm font-nunito text-primaryContent/60"}>
                                {cat.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoriesSection