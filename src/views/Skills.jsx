import React from 'react'
import { RiReactjsLine} from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { DiMongodb} from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3} from 'react-icons/di';
import { SiTailwindcss} from 'react-icons/si';
import { SiBootstrap} from 'react-icons/si';
import { SiMysql} from 'react-icons/si';
import { DiGit} from 'react-icons/di';
import { AiFillGithub } from 'react-icons/ai';
import { CgFigma} from 'react-icons/cg';
import { SiAdobeillustrator } from 'react-icons/si';
import { MdDesignServices} from 'react-icons/md';
import { MdOutlineDevices } from 'react-icons/md';
import { FaLightbulb } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import 'animate.css';


const Skills = () => {
  return (
    <div className='bg-bglight min-h-screen sm:pt-10 md:pt-28 lg:pt-28 xl:pt-28 sm:pr-9 py-4 lg:pl-9 md:pl-9 gap-2'>
        <div className='max-w-screen-2xl mx-auto'>
        <div className="font-paragraph text-colortitle font-bold pt-4 text-3xl">
          <div className='sm:pl-9 lg:p-0 md:pl-0 sm:pt-4 text-center'>
          <h1 className='animate__animated animate__fadeInLeft'>My Skills</h1>
          </div>

        </div>


        <div className="pt-6">




<div className="flex flex-wrap justify-center pt-4">

    <div className="flex flex-col bg-bgdark rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
        <div className='flex justify-center pt-2'>
        <MdOutlineDevices className='text-6xl text-red'/>
        </div>

        <h2 className="text-center px-2 pb-5 font-title text-colorparagraph">Development of accessible web Apps.</h2>  
        
        <div className="bg-red font-title text-white p-3 text-center ">Web Development</div>

    </div>



    <div className="flex flex-col bg-bgdark rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
        <div className='flex justify-center pt-2'>
        <FaLightbulb className='text-6xl text-red'/>
        </div>

        <h2 className="text-center text-colorparagraph font-title px-2 pb-5">Creative, unique ideas and teamwork skills</h2>  
        
        <div className="bg-red font-title text-white p-3 text-center ">Idea Generator</div>

    </div>



    <div className="flex flex-col bg-bgdark rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
        <div className='flex justify-center pt-2'>
        <MdDesignServices className='text-6xl text-red'/>
        </div>

        <h2 className="text-center font-title text-colorparagraph px-2 pb-5">Intuitive interface design for the user.</h2>  
        
        <div  className="bg-red font-title text-white p-3 text-center ">Web Design</div>

    </div>



    <div className="flex flex-col bg-bgdark rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
        <div className='flex justify-center pt-2'>
        <FaDatabase className='text-5xl text-red'/>
        </div>

        <h2 className="text-center text-colorparagraph font-title pt-3 px-2 pb-5">A complete web app solution for a business</h2>  
        
        <div  className="bg-red font-title text-white p-3 text-center ">Data Analysis</div>

    </div>

</div>

</div>




<div className='animate__animated animate__bounceInDown wrapper grid md:pb-10 sm:pb-10 lg:pb-10 sm:grid-cols-4 lg:grid-cols-7 md:grid-cols-7 sm:pl-6 grid-cols-7 grid-rows-7 gap-8 pt-20 text-red'>

            
          <div className="icon program animation">
            <span className="tooltip font-paragraph">ReactJs</span>
            <span><i><RiReactjsLine className="text-2xl"/> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">JavaScript</span>
            <span><i><IoLogoJavascript className="text-2xl"/> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">MongoDB</span>
            <span><i><DiMongodb className="text-2xl"/> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">NodeJS</span>
            <span><i><FaNodeJs  className="text-2xl"/> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">Express</span>
            <span><i><SiExpress  className="text-2xl"/> </i></span>
          </div>



          
          <div className="icon program animation">
            <span className="tooltip">HTML</span>
            <span><i><AiFillHtml5  className="text-2xl"/> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">CSS</span>
            <span><i><DiCss3  className="text-2xl"/> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">TailwindCss</span>
            <span><i><SiTailwindcss  className="text-2xl"/> </i></span>
          </div>


          <div className="icon program animation">
            <span className="tooltip">Bootstrap</span>
            <span><i><SiBootstrap  className="text-2xl"/> </i></span>
          </div>

        
          <div className="icon program animation">
            <span className="tooltip">Mysql</span>
            <span><i><SiMysql className="text-2xl"/> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">Git</span>
            <span><i><DiGit className="text-2xl"/> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">GitHub</span>
            <span><i><AiFillGithub  className="text-2xl"/> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">Figma</span>
            <span><i><CgFigma className="text-2xl"/> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">Illustrator</span>
            <span><i><SiAdobeillustrator className="text-2xl"/> </i></span>
          </div>


          </div>

       

    </div>
    

    </div>
  )
}

export default Skills