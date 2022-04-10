import React from 'react'
import AnimationOne from '../components/AnimationOne'
import HomeView from './HomeView'

export default function Home() {
  return (
    <div className='bg-bglight'>
       
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-flow-col auto-cols-max gap-2'>
        <HomeView />
        <AnimationOne />
        </div>
    </div>
  )
}
