import React from "react";
import { TypeAnimation } from 'react-type-animation';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {BsCloudDownloadFill} from 'react-icons/bs'

const Main = () => {
    return(
    <div id="main">
        <img className="w-full h-screen object-cover object-right-top" 
            src="/leone-venter-VieM9BdZKFo-unsplash.jpg" 
            alt="" />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-7xl text-4xl font-bold text-gray-800">Hi ! I'm Baovola A.</h1>
            <h2 className="flex sm:text-3xl text-2xl font-bold text-gray-600">
                I'm 
                <TypeAnimation
                    sequence={[
                        'a Javascript Web Developer ', 
                        2000, 
                        'a Tech passionate',
                        2000,
                        'an empathic woman',
                        2000, 
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1em', paddingLeft: '5px' }}
                />
            </h2>

            <div className="flex justify-around pt-2 max-w-[100px] w-full">
                <a href="https://www.linkedin.com/in/baovola-andrianarisoa/"><FaLinkedin className="cursor-pointer" size={50}/></a>
                <a href="https://github.com/BaovolaRomy"><FaGithub className="cursor-pointer" size={50}/></a>
            </div>

        </div>
        </div>
    </div>
    );
};
export default Main;