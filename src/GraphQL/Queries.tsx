import { gql } from '@apollo/client'

export const LOAD_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`
export const LOAD_COUNTRIES = gql`
  query ladCountriesQuery($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
        emoji
        emojiU
        languages {
          code
          name
        }
      }
    }
  }
`
