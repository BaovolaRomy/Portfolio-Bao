import React from "react";

const WorkItems = ({year, title, duration, details}) => {

    return(
    <ol className="flex flex-row md:flex-row  ">
        <li className="mb-3 ml-4 grid sm:grid-cols-2 gap-2 border-l ">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
            <p className="flex flex-wrap gap-4 flex-row items-start justify-start text-xs md:text-sm">
                <span className="inline-block px-2 items-start py-1 mt-7 font-semibold text-pink-900 bg-gray-400 rounded-md">{year}</span>
                <span className="text-lg font-semibold mt-2 text-gray-400">{title}</span>
                
            </p>
            <p className="m-2 pt-2 text-base font-normal text-stone-500 text-justify">{details}
            <span className="my-1 text-sm font-normal leading-none text-stone-400">{duration}</span></p>
            
        </li>
    </ol>
    )
}
export default WorkItems;