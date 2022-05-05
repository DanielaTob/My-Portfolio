import React from 'react'
import AnimationOne from '../components/AnimationOne'
import HomeView from './HomeView'

export default function Home() {
  return (
    <div className=''>
       
        <div className='sm:pt-10 md:pt-20 lg:pt-20 xl:pt-20 grid min-h-screen z-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-flow-col auto-cols-max gap-2'>
        <HomeView />
        <AnimationOne />
        
        </div>
    </div>
  )
}
