import React, { useState } from 'react'
import MenuItems from './MenuItems'
import { MdOutlineMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';



export default function Header() {

    const [active, setActive] = useState(false)

    const showMenu = () =>{
        setActive(!active)
    }

  return (
    <div className='fixed z-20 top-0 text-xl font-fontFamily-paragraph bg-bglight w-full justify-start font-medium  md:p-4 items-center'>
        <nav className='max-w-screen-2xl mx-auto'>
            <div className='absolute right-6 md:hidden top-6 scale-150 text-red'>
                <MdOutlineMenu onClick={showMenu} className='scale-150 cursor-pointer '/>
            </div>
            <ul className='hidden md:flex gap-8 p-6 text-colorparagraph'>
            <Link to="/"><li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'>Home</li></Link> 
            <Link to="Work"><li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'>Projects</li></Link>    
            <Link to="Skills"><li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'>Skills</li></Link>    
            <Link to="About"><li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'>About</li></Link>    
            <Link to="Contact"><li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'>Contact</li></Link>    
            </ul>

            <MenuItems showMenu={showMenu} active={active}/>
        </nav>
    </div>
  )
}
