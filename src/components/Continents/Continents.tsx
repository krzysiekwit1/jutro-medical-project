import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_CONTINENTS } from '../../GraphQL/Queries'
import { Link } from 'react-router-dom'

type Continent = {
  code: string
  name: string
}

function Continents() {
  const { error, data } = useQuery(LOAD_CONTINENTS)

  const [continents, setContinents] = useState<any[]>([])

  useEffect(() => {
    if (data) {
      setContinents(data.continents)
    }
  }, [data])

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className='flex flex-wrap m-8 duration-1000 '>
      <Link to='/' className='absolute insest-x-0 inset-y-1'>
        <div className='text-red-500 font-bold'>BACK</div>
      </Link>
      {continents.map((continent: Continent) => (
        <Link to={`/continents:${continent.code}`}>
          <div
            className='w-64 h-32 bg-blue-400 mr-6 mt-4 rounded-lg hover:bg-purple-700'
            key={continent.code}
          >
            <p className='pt-4 text-2xl pl-4'>{continent.name}</p>
            <p className='pt-2 text-xl pl-4'>{continent.code}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Continents
