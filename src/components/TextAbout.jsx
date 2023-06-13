import React from 'react'
import 'animate.css';

export default function TextAbout() {
  return (
    <div className=''>
    <h1 className="font-paragraph text-colortitle font-bold text-center lg:pt-8 md:pt-8 pt-8 sm:pt-16 text-3xl animate__animated animate__fadeInLeft">A Little Bit About Me</h1>
    <div className='text-center mx-4 leading-8 font-title sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-colorparagraph pt-10 px-10'>
        <p className='pb-2 text-justify inline-block'>Hello again! Thanks for scrolling this far!! 🤗 </p>
        <p className='pb-2 text-justify inline-block'>I am a web developer with experience in projects with a focus on responsive design and accessibility, especially with scrum methodology. Creative expression is what lights me up, and I'm always open to learning about new opportunities. </p> 
        <p className='text-justify inline-block '>I'm passionate about coding and problem solving through code, and I'm excited to work alongside other amazing programmers and learn so much more!</p>
    </div>
    </div>
  )
}
