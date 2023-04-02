import React from "react";
import ProjectItems from "./ProjectItems";
import evasImg from "../assets/evas.png"
import portfolioImg from "../assets/portfolio.png";
import {FaGithub} from 'react-icons/fa';

const Projects = () => {

    return(
    <div id="projects" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16">
        {''}
        <h1 className="text-6xl font-bold mb-4 text-center text-rose-900">Projects</h1>
        <div className="grid sm:grid-cols-2 gap-12 mt-10">
            <div  className="text-center ">
                <a href="https://evas-front.netlify.app/">
                    <ProjectItems 
                        image={evasImg} 
                        title='EVAS'
                    />
                 </a>
                 <a href=""><FaGithub className="m-2 " size={50} /></a>
            </div>

            <div>
                <a href="https://portfolio.baovola-andrianarisoa.com/"> 
                    <ProjectItems
                        image={portfolioImg}
                        title='Portfolio' />
                </a>
                <a href="https://github.com/BaovolaRomy/Portfolio-Bao"><FaGithub className="m-2 " size={50} /></a>
            </div>
            
        </div>
    </div>
    )
}
export default Projects;