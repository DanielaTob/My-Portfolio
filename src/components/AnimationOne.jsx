import React from 'react'
import imgone from '../assets/illustration1.png'
export default function AnimationOne() {
  return (
    <div>
        <div className=' relative w-full h-full'>
          <div className='absolute bottom-0 right-0'>
        <img className=''  src={imgone} alt="img1" />
        
          </div>
        </div>
    </div>
  )
}
