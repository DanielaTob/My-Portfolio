import React from 'react'
import img1 from '../assets/icon2.png'
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
import { MdOutlineWebAsset } from 'react-icons/md';



const Skills = () => {
  return (
    <div id='skills' className='bg-bglight sm:pr-9 p-6 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-flow-col auto-cols-max gap-2'>
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
        <div className="grid font-paragraph text-colortitle font-bold">
          
<div class=" flex flex-col ">
  <div class="m-auto">
    <div class="flex flex-col bg-bgdark max-w-sm shadow-md py-8 px-10 md:px-4 rounded-md border-2 border-red px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
      <div class="flex flex-col md:flex-row gap-6 md:gap-8">
        <MdDesignServices className='text-6xl text-red'/>
        <div class="flex flex-col text-center md:text-left">
          <div class="font-medium text-lg text-gray-800">UX/UI</div>
          <p class="text-gray-500 mb-3 whitespace-nowrap">Lorem lorem lorem lorem. </p>
          <div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
            <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-linkedin"></i></a>
            <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-facebook-square"></i></a>
            <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-github-square"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="m-auto">
    <div class="flex flex-col bg-bgdark max-w-sm shadow-md py-8 px-10 md:px-4 rounded-md border-2 border-red px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
      <div class="flex flex-col md:flex-row gap-6 md:gap-8">
      <MdOutlineWebAsset className='text-6xl text-red'/>
        <div class="flex flex-col text-center md:text-left">
          <div class="font-medium text-lg text-gray-800">Web Development</div>
          <div class="text-gray-500 mb-3 whitespace-nowrap">lorem lorem lorem lorem.</div>
          <div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
            <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-linkedin"></i></a>
            <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-facebook-square"></i></a>
            <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-github-square"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="m-auto">
    <div class="flex flex-col bg-bgdark max-w-sm shadow-md py-8 px-10 md:px-4 rounded-md border-2 border-red px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
      <div class="flex flex-col md:flex-row gap-6 md:gap-8">
      <MdOutlineDevices className='text-6xl text-red'/>
        <div class="flex flex-col text-center md:text-left">
          <div class="font-medium text-lg text-gray-800">Web Design</div>
          <div class="text-gray-500 mb-3 whitespace-nowrap">lorem lorem lorem lorem.</div>
          <div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
            <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-linkedin"></i></a>
            <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-facebook-square"></i></a>
            <a class="hover:cursor-pointer hover:text-blue-500"><i class="fab fa-github-square"></i></a>
          </div>
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