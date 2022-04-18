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
import { SiAdobephotoshop} from 'react-icons/si';
import { MdDesignServices} from 'react-icons/md';
import { MdOutlineDevices } from 'react-icons/md';
import { FaLightbulb } from 'react-icons/fa';



const Skills = () => {
  return (
    <div id='skills' className='bg-bglight sm:pr-9 py-4 lg:pl-9 md:pl-9 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-flow-col auto-cols-max gap-2'>
        <div className="font-paragraph text-colortitle font-bold pt-16 text-3xl">
          <h1 className='sm:pl-9'>My Skills</h1>

          <div className='wrapper grid md:pb-10 sm:pb-10 lg:pb-10 sm:grid-cols-4 sm:pl-4 grid-cols-5 grid-rows-4 gap-10 pt-20 text-red'>

            
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

          <div className="icon program animation">
            <span className="tooltip">Photoshop</span>
            <span><i><SiAdobephotoshop className="text-2xl"/> </i></span>
          </div>

          </div>
        </div>
        <div className="grid font-paragraph text-colortitle font-bold">
          
<div className=" flex flex-col ">
  <div className="m-auto">
    <div className="flex flex-col bg-bgdark max-w-sm shadow-md  md:px-4  border-2 border-red px-2 py-6 rounded-lg transform transition duration-500 hover:scale-110">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <MdDesignServices className='text-6xl text-red'/>
        <div className="flex flex-col text-center md:text-left">
          <div className="font-medium text-lg font-paragraph text-colortitle">UX/UI</div>
          <div className="font-title text-colorparagraph text-sm mb-3">User Flow and prototyping.</div>
        
        </div>
      </div>
    </div>
  </div>


  <div className="m-auto">
    <div className="flex flex-col bg-bgdark max-w-sm shadow-md  sm:pt-4 md:px-4 border-2 border-red px-2 py-6 rounded-lg transform transition duration-500 hover:scale-110">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      <FaLightbulb className='text-6xl text-red'/>
        <div className="flex flex-col text-center md:text-left">
          <div className="font-medium text-lg font-paragraph text-colortitle">Idea Generator</div>
          <div className="font-title text-colorparagraph text-sm mb-3 whitespace-nowrap">Creative and unique ideas.</div>
          
        </div>
      </div>
    </div>
  </div>



  <div className="m-auto">
    <div className="flex flex-col bg-bgdark max-w-sm shadow-md  md:px-4 border-2 border-red px-2 py-6 rounded-lg transform transition duration-500 hover:scale-110">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      <MdOutlineDevices className='text-6xl text-red'/>
        <div className="flex flex-col text-center md:text-left">
          <div className="font-medium text-lg font-paragraph text-colortitle">Web Development</div>
          <div className="font-title text-colorparagraph mb-3 text-sm">Responsive and accessible.</div>
          
        </div>
      </div>
    </div>
  </div>
</div>


          
        </div>
    </div>
  )
}

export default Skills