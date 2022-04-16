import React from 'react'
import ButtonCv from './buttons/ButtonCv'

export default function TextAbout() {
  return (
    <div>
    <h1 className="font-paragraph text-colortitle font-bold pl-9 pt-20 text-3xl">A Little Bit About Me</h1>
    <div className='leading-8 font-title sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-colorparagraph pt-10 pl-9'>
        <p className='pb-2'>Hello again! Thanks for scrolling this far!! 🤗 </p>
        <p className='pb-2'>I am a web developer with experience in projects with a focus on responsive design and accessibility, especially with scrum methodology. Creative expression is what lights me up, and I'm always open to learning about new opportunities. </p> 
        <p>I'm passionate about coding and problem solving through code, and I'm excited to work alongside other amazing programmers and learn so much more!</p>
    </div>
    <ButtonCv />
    </div>
  )
}
