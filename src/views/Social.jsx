import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io';
import { AiFillGithub} from 'react-icons/ai';
import { FaBehanceSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Social() {
  return (
    <div className='flex gap-10 pl-9 text-red'>
       <a href="https://www.linkedin.com/in/daniela-tobar-moreno-77123a217/"  target="_blank" className='cursor-poniter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><IoLogoLinkedin className='scale-150'/></a> 
       <a href="https://github.com/DanielaTob"  target="_blank" className='cursor-poniter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><AiFillGithub  className='scale-150'/></a> 
       <a href="#"  target="_blank" className='cursor-poniter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><FaBehanceSquare  className='scale-150'/></a>
       <a href="https://www.instagram.com/danielltmt/?hl=es"  target="_blank" className='cursor-poniter transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><AiFillInstagram className='scale-150'/></a>    
    </div>
  )
}
