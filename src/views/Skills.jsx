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


const Skills = () => {
  return (
    <div id='skills' className='bg-bglight h-screen sm:pr-9 pb-30 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-flow-col auto-cols-max gap-2'>
        <div className="font-paragraph text-colortitle font-bold pl-9 pt-16 text-3xl">
          <h1>My Skills</h1>

          <div className='wrapper grid grid-cols-5 grid-rows-4 gap-10 pt-20 text-red'>

            
          <div className="icon program animation">
            <span className="tooltip font-paragraph">ReactJs</span>
            <span><i><RiReactjsLine className="text-2xl"/> </i></span>
          </div>

          <div className="icon program animation">
            <span className="tooltip">JavasScript</span>
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
        <div className="grid font-paragraph text-colortitle font-bold pt-16 ">
          <h1>Another thing</h1>
        </div>
    </div>
  )
}

export default Skills