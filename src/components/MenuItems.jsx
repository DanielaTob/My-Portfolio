import React from 'react'
import { MdClose } from 'react-icons/md';

const MenuItems = ({showMenu, active}) => {
  return (
    
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                <MdClose onClick={showMenu} className='text-red cursor-pointer scale-150'/>
                <li className='font-fontFamily-paragraph text-bglight'><a href='#home'>Home</a></li>
                <li className='font-fontFamily-paragraph text-bglight'><a href='#projects'>Work</a></li>
                <li className='font-fontFamily-paragraph text-bglight'><a href='#skills'>Skills</a></li>
                <li className='font-fontFamily-paragraph text-bglight'><a href='#about'>About</a></li>
                <li className='font-fontFamily-paragraph text-bglight'><a href='#contact'>Contact</a></li>
        </ul>
        
  )
}

export default MenuItems