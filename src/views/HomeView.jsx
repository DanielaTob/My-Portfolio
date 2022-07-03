import React from 'react'
import ButtonHi from '../components/buttons/ButtonHi'
import GroupButton from '../components/buttons/GroupButton'
import TextHome from '../components/TextHome'

export default function HomePage() {
  return (
    <div>

      <div className='max-w-screen-2xl mx-auto'>
        <ButtonHi />
        <TextHome />
        <GroupButton />
      </div>
        
    </div>
  )
}
