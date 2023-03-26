import React from "react";
import {BsCloudDownloadFill} from 'react-icons/bs'

const Profile = () => {
return(
    <div id="profile" className="max-w-[1040px] m-auto md:pl-20 p-4 py16">
        <h1 className="text-6xl m-2 font-bold text-center text-rose-900">About me</h1>
        <div className="grid sm:grid-cols-2 gap-12">
            <p className="text-xl my-2 text-stone-500 text-justify">
            Serious, responsive, with a sense of sharing and endowed with emotional intelligence, that's how I would describe myself. I've always been passionate about computer science since I was young. I still remember when I created a mini quiz app with PowerPoint; innocent, I didn't know that one day I would become a web developer. And now, I'm in the process of creating my own portfolio with React, Vite, and Tailwind. The sense of logic, that's what I like most about this profession. I invite you to discover me through my very first personal website. During my training, I focused more on the back-end, which is why I made it my specialization. But by creating this website, I discovered the beauty and gentleness of React.
            
            <a href="public/CV_Baovola.pdf" download className="text-gray-400 border-2 mt-2 rounded-lg p-1 w-full bg-white cursor-pointer hover:scale-110 ease-in duration-200 w-[75%] flex justify-center items-center"><BsCloudDownloadFill size={50}/>
                <span  className="pl-4">Download CV</span>
            </a>

            </p>
            <img className="m-4" src="src/assets/profile.jpg" alt="" />
        </div>
        
    </div>
)
    
}
export default Profile;