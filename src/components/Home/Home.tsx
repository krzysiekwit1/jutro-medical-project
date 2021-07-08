import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Link to='/continents'>
        <p className='text-5xl font-bold text-blue-500 hover:text-purple-500'>
          GO TO CONTINENTS
        </p>
      </Link>
    </div>
  )
}

export default Home
