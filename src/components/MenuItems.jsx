import React from 'react'
import { MdClose } from 'react-icons/md';

const MenuItems = ({showMenu, active}) => {
  return (
    
        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                <MdClose onClick={showMenu} className='cursor-pointer scale-150'/>
                <li>Home</li>
                <li>Work</li>
                <li>Skills</li>
                <li>About</li>
                <li>Contact</li>
        </ul>
        
  )
}

export default MenuItems