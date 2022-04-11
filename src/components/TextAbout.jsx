import React from 'react'
import ButtonCv from './buttons/ButtonCv'

export default function TextAbout() {
  return (
    <div>
    <h1 className="font-paragraph text-colortitle font-bold pl-9 pt-16 text-3xl">A Little Bit About Me</h1>
    <div className='font-title sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl text-colorparagraph pt-10 pl-9'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ullam deserunt earum error, sapiente, consequatur molestiae vitae ex expedita molestias temporibus sit laboriosam dolore voluptatem cumque beatae atque eius. Itaque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus hic repudiandae beatae, atque facere obcaecati, placeat dolore, ullam nesciunt corrupti ipsam dignissimos aperiam sint quia reiciendis et reprehenderit itaque dolorem! lorem</p>
    </div>
    <ButtonCv />
    </div>
  )
}
