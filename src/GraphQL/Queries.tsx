import { gql } from '@apollo/client'

export const LOAD_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`
