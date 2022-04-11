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

          <div className='grid grid-cols-5 pt-16 text-red'>
            <div className='animation text-5xl'> <RiReactjsLine/> </div>
            <div className='animation text-5xl'><IoLogoJavascript/></div>
            <div className='animation text-5xl'><DiMongodb /></div>
            <div className='animation text-5xl'><FaNodeJs /></div>
            <div className='animation text-5xl'><SiExpress /></div>
          </div>
        </div>
        <div className="grid font-paragraph text-colortitle font-bold pt-16 ">
          <h1>Another thing</h1>
        </div>
    </div>
  )
}

export default Skills