import React from 'react'
import { RiReactjsLine} from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { DiMongodb} from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

const Skills = () => {
  return (
    <div id='skills' className='bg-bglight h-screen sm:pr-9 pb-30 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-flow-col auto-cols-max gap-2'>
        <div className="font-paragraph text-colortitle font-bold pl-9 pt-16 text-3xl">
          <h1>My Skills</h1>

          <div className='wrapper gap-10 grid grid-cols-5 pt-16 text-red'>

            
          <div class="icon program animation">
            <span class="tooltip">ReactJs</span>
            <span><i><RiReactjsLine className="text-2xl"/> </i></span>
          </div>

          <div class="icon program animation">
            <span class="tooltip">JavasScript</span>
            <span><i><IoLogoJavascript className="text-2xl"/> </i></span>
          </div>


          <div class="icon program animation">
            <span class="tooltip">MongoDB</span>
            <span><i><DiMongodb className="text-2xl"/> </i></span>
          </div>


          <div class="icon program animation">
            <span class="tooltip">NodeJS</span>
            <span><i><FaNodeJs  className="text-2xl"/> </i></span>
          </div>


          <div class="icon program animation">
            <span class="tooltip">Express</span>
            <span><i><SiExpress  className="text-2xl"/> </i></span>
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