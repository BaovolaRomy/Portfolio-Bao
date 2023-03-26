import React from "react";
import {SiReact, SiHtml5, SiCss3, SiMui, SiBootstrap, SiPostgresql, SiTailwindcss, SiVite} from "react-icons/si";
import {TbBrandJavascript, TbBrandMongodb, TbBrandFigma} from "react-icons/tb";
import {FaNodeJs} from "react-icons/fa";

const Skills = () => {

    return(
        <div id="skills" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-6xl font-bold text-center text-rose-900">Skills</h1>
        <div className="flex flex-column flex-wrap justify-between space-y-4 mb-0.5 p-20 max-w-[1024px] w-full">
                <div>
                    <TbBrandJavascript size={200}/>
                    <p className="text-2xl text-center">Javascript</p>
                </div>
                <div>
                    <FaNodeJs size={180}/>
                    <p className="text-2xl text-center">Node.js</p>
                </div>
                <div>
                    <SiPostgresql size={190}/>
                    <p className="text-2xl text-center">PostgreSQL</p>
                </div>
                <div>
                    <TbBrandMongodb size={200}/>
                    <p className="text-2xl text-center">MongoDB</p>
                </div>
                <div>
                    <SiReact size={200}/>
                    <p className="text-2xl text-center">React</p>
                </div>
                <div>
                    <SiHtml5 size={180}/>
                    <p className="text-2xl text-center">HTML5</p>
                </div>
                <div>
                    <SiCss3 size={190}/>
                    <p className="text-2xl text-center">CSS3</p>
                </div>
                <div>
                    <SiVite size={190}/>
                    <p className="text-2xl text-center">Vite.js</p>
                </div>
                <div>
                    <SiTailwindcss size={190}/>
                    <p className="text-2xl text-center">Tailwind CSS</p>
                </div>
                <div>
                    <SiMui size={200}/>
                    <p className="text-2xl text-center">MUI</p>
                </div>
                <div>
                    <SiBootstrap size={200}/>
                    <p className="text-2xl text-center">Bootstrap</p>
                </div>
                <div>
                    <TbBrandFigma size={200}/>
                    <p className="text-2xl text-center">Figma</p>
                </div>

            </div>
    </div>
    )
}
export default Skills;