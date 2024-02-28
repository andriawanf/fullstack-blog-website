/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

function Pagination({ pages = 6, setCurrentPage }) {
    // set number of pages
    const numberOfPage = [];
    for (let i = 1; i <= pages; i++) {
        numberOfPage.push(i);
    }

    // Current active button
    const [currentButton, setCurrentButton] = useState(1);

    // Array of buttons what we see on the page
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons];
        let dotsInitial = '...';
        let dotsRight = ' ...';
        let dotsLeft = '... ';
        
        if (numberOfPage.length < 5) {
            tempNumberOfPages = numberOfPage;
        }
        else if(currentButton >= 1 && currentButton <=3){
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPage.length]
        }
        else if(currentButton === 4){
            const sliced = numberOfPage.slice(0, 5);
            tempNumberOfPages = [...sliced, dotsInitial, numberOfPage.length]
        }
        else if(currentButton > 4 && currentButton < numberOfPage.length - 2){
            const sliced1 = numberOfPage.slice(currentButton - 2, currentButton);
            const sliced2 = numberOfPage.slice(currentButton, currentButton + 1);
            tempNumberOfPages = ([1, dotsInitial, ...sliced1, ...sliced2, dotsRight, numberOfPage.length])
        }
        else if(currentButton > numberOfPage.length - 3){
            const sliced = numberOfPage.slice(numberOfPage.length - 4);
            tempNumberOfPages = ([1, dotsLeft, ...sliced]);
        }
        else if(currentButton === dotsInitial){
            setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
        }
        else if(currentButton === dotsRight){
            setCurrentButton(arrOfCurrButtons[3] + 2);
        }
        else if(currentButton === dotsLeft){
            setCurrentButton(arrOfCurrButtons[3] - 2)
        }
        setArrOfCurrButtons(tempNumberOfPages);
        setCurrentPage(currentButton);

    }, [currentButton]);

    return (
        <ol className="flex items-center justify-center gap-1 text-xs font-medium font-nunito">
            {/* Button Prev */}
            <li className="group">
                <a
                    href="#"
                    className={`${currentButton === 1 ? "inline-flex items-center justify-center w-10 h-10 text-white-500 border border-white-500/25 rounded-xl bg-white-500/10 rtl:rotate-180 group-hover:bg-white-500/15 group-hover:text-white-500 cursor-not-allowed" : "inline-flex items-center justify-center w-10 h-10 text-white-500 border border-white-500/25 rounded-xl bg-white-500/10 rtl:rotate-180 group-hover:bg-white-500/15 group-hover:text-white-500 cursor-pointer"}`}
                    onClick={() => setCurrentButton((prev) => prev <= 1 ? prev : prev - 1)}
                >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 group-hover:text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </li>

            {arrOfCurrButtons.map(((item, index) => {
                return <li className="group" key={index}>
                    <a
                        href="#"
                        className={`${currentButton === item ? 'flex items-center justify-center w-10 h-10 leading-8 text-center font-nunito font-bold text-black-500 border bg-gradient-to-r from-blueDark-500 to-blueLight-500 border-white-500/25 rounded-xl' : 'font-nunito font-medium flex items-center justify-center w-10 h-10 leading-8 text-center text-black-500 bg-white-500/5 border border-white-500/5 rounded-xl group-hover:bg-gradient-to-r group-hover:from-blueDark-500 group-hover:to-blueLight-500'}`}
                        onClick={() => setCurrentButton(item)}
                    >
                        {item}
                    </a>
                </li>
            }))}

            {/* Button Next */}
            <li className="group">
                <a
                    href="#"
                    className={`${currentButton === numberOfPage.length ? "inline-flex items-center justify-center w-10 h-10 text-white-500 border border-white-500/25 rounded-xl bg-white-500/10 rtl:rotate-180 group-hover:bg-white-500/15 group-hover:text-white-500 cursor-not-allowed" : "inline-flex items-center justify-center w-10 h-10 text-white-500 border border-white-500/25 rounded-xl bg-white-500/10 rtl:rotate-180 group-hover:bg-white-500/15 group-hover:text-white-500 cursor-pointer"}`}
                    onClick={() => setCurrentButton((prev) => prev >= numberOfPage.length ? prev : prev + 1)}
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 group-hover:text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </li>
        </ol>
    )
}

export default Pagination