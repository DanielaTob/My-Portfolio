import React from 'react'
import ModalForm from '../components/ModalForm'

import Social from './Social'

export default function Contact() {
  return (
    <div id='contact' className='bg-bglight pr-4 pb-4'>
    <div className='bg-bglight pl-9 pt-28'>
    <div className='font-paragraph text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl text-colortitle font-bold'>
        <p>Let’s work together and</p>
        <p>make everything super cute </p>
        <p>and super useful.</p>
    </div>
    </div>
    <div>
    <ModalForm />
    <Social />
    
    </div>
    </div>
  )
}
