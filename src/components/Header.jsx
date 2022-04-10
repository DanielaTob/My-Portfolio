import React, { useState } from 'react'
import MenuItems from './MenuItems'
import { MdOutlineMenu } from 'react-icons/md';


export default function Header() {

    const [active, setActive] = useState(false)

    const showMenu = () =>{
        setActive(!active)
    }

  return (
    <div className='font-fontFamily-paragraph bg-bglight w-full justify-start font-medium  md:p-4 items-center'>
        <nav>
            <div className='absolute right-6 md:hidden top-6 scale-150 text-red'>
                <MdOutlineMenu onClick={showMenu} className='scale-150 cursor-pointer'/>
            </div>
            <ul className='hidden md:flex gap-8 p-6 text-colorparagraph'>
                <li>Home</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <MenuItems showMenu={showMenu} active={active}/>
        </nav>
    </div>
  )
}
