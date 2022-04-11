import React from 'react'
import { IoLogoLinkedin } from 'react-icons/io';
import { AiFillGithub} from 'react-icons/ai';
import { FaBehanceSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Social() {
  return (
    <div className='flex justify-end gap-10 bottom-0 right-0 lg:pr-9 text-red'>
        <IoLogoLinkedin className='scale-150'/>
        <AiFillGithub className='scale-150'/>
        <FaBehanceSquare className='scale-150'/>
        <AiFillInstagram className='scale-150'/>
    </div>
  )
}
