import React from 'react'
import { Link } from 'react-router-dom'


export default function ButtonBack() {
  return (
    <div className='pl-4'> 
        <Link to="/">
         <button className="bg-red gap-2 text-white font-fontFamily-paragraph  font-semibold py-2 px-4  rounded-lg inline-flex items-center">
         👈 Go to back
        </button>
        </Link>
    </div>
  )
}
