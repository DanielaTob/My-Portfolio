import React from 'react'
import AnimationOne from '../components/AnimationOne'
import HomeView from './HomeView'

export default function Home() {
  return (
    <div className=''>
       
        <div className='min-h-screen z-10'>
        <div className='pt-20 flex justify-center items-center'>
        <HomeView />
        </div>
        <div >
        <AnimationOne />
        </div>
        </div>
    </div>
  )
}
