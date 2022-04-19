import React from 'react'
import { MdClose } from 'react-icons/md';


const MenuItems = ({showMenu, active}) => {
  return (
    
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden z-10' : 'hidden'}>
                <MdClose onClick={showMenu} className='text-red cursor-pointer scale-150'/>
                <li className='font-fontFamily-paragraph text-bglight transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><a href='/#home'>Home</a></li>
                <li className='font-fontFamily-paragraph text-bglight transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><a href='/#projects'>Projects</a></li>
                <li className='font-fontFamily-paragraph text-bglight transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><a href='/#skills'>Skills</a></li>
                <li className='font-fontFamily-paragraph text-bglight transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><a href='/#about'>About</a></li>
                <li className='font-fontFamily-paragraph text-bglight transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red'><a href='/#contact'>Contact</a></li>
        </ul>
        
  )
}

export default MenuItems