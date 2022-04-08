import React from 'react'
import { MdClose } from 'react-icons/md';

const MenuItems = ({showMenu, active}) => {
  return (
    
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 bg-red/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                <MdClose onClick={showMenu} className='text-red cursor-pointer scale-150'/>
                <li className='font-fontFamily-paragraph text-bglight'>Home</li>
                <li className='font-fontFamily-paragraph text-bglight'>Work</li>
                <li className='font-fontFamily-paragraph text-bglight'>Skills</li>
                <li className='font-fontFamily-paragraph text-bglight'>About</li>
                <li className='font-fontFamily-paragraph text-bglight'>Contact</li>
        </ul>
        
  )
}

export default MenuItems