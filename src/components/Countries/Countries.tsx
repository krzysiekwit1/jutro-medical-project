import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { LOAD_COUNTRIES } from '../../GraphQL/Queries'
type Language = {
  code: string
  name: string
  __typename: string
}

function Countries() {
  let { code } = useParams<{ code: string }>()
  code = code.substring(1)
  const { error, data } = useQuery(LOAD_COUNTRIES, {
    variables: { code },
  })

  const [countries, setCountries] = useState<any[]>([])

  useEffect(() => {
    if (data) {
      console.log(data.continent.countries)
      setCountries(data.continent.countries)
    }
  }, [data])

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className='grid grid-cols-3 gap-5 m-8 duration-1000'>
      {countries.map((country) => (
        <div
          className='h-48 bg-blue-400 rounded-lg hover:bg-purple-700'
          key={country.code}
        >
          <div className='flex'>
            <p className='pt-4 text-2xl pl-4'>{country.name}</p>
            <img
              className='w-8 h-8 mt-5 ml-5'
              alt='United States'
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
            />
          </div>
          <p className='pl-4 text-xl'>languages:</p>
          <div className='pl-4 pt-2 flex'>
            {country.languages.map((language: Language) => (
              <p className='pr-4' key={language.code}>
                {language.name}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Countries
