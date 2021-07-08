import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { LOAD_COUNTRIES } from '../../GraphQL/Queries'

function Countries() {
  const [countries, setCountries] = useState([])
  let { code } = useParams<{ code: string }>()
  code = code.substring(1)

  const { error, data } = useQuery(LOAD_COUNTRIES, {
    variables: { code },
  })

  useEffect(() => {
    if (data) {
      setCountries(data)
    }
  }, [data])

  useEffect(() => {
    console.log(error)
  }, [error])

  return <div>{code}</div>
}

export default Countries
