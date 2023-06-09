import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BsPerson, BsPersonWorkspace} from "react-icons/bs";
import {GrProjects} from "react-icons/gr";
import { GiAchievement, GiSkills} from "react-icons/gi";
import {RxCross2} from "react-icons/rx";

const Sidenav =() => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return(
        <div>
           <AiOutlineMenu onClick={handleNav} className=' top-4 right-4 z-[99] absolute' />
           { nav ? (
                <>
                
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>

                    <a href="#profile" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <BsPerson size={20} />
                        <span className="pl-4">About me</span>
                    </a>

                    <a href="#work" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <BsPersonWorkspace size={20} />
                        <span className="pl-4">Work</span>
                    </a>

                    {/* <a href="#study" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
        <GiAchievement size={20} />
        <span className="pl-4">Studies</span>
    </a>  */}

                    <a href="#projects" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <GrProjects size={20} />
                        <span className="pl-4">Projects</span>
                    </a>

                    <a href="#skills" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <GiSkills size={20} />
                        <span className="pl-4">Skills</span>
                    </a>

                    <a href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineMail size={20} />
                        <span className="pl-4">Contact</span>
                    </a>
                    
                    <RxCross2 onClick={handleNav} className='absolute top-4 right-4 z-[99]' />

                </div></>
           ) : (
                ''
                )}

            

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className="flex flex-col ml-5">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-200">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#profile" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-200">
                        <BsPerson size={20} />
                    </a>
                    <a href="#work" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-200">
                        <BsPersonWorkspace size={20} />
                    </a>
                    {/* <a href="#study" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-200">
                        <GiAchievement size={20} />
                    </a> */}
                    <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-200">
                        <GrProjects size={20} />
                    </a>
                    <a href="#skills" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-200">
                        <GiSkills size={20} />
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-90 ease-in duration-200">
                        <AiOutlineMail size={20} />
                    </a>
                </div>
           </div>
          

        </div>
    );
};
export default Sidenav;