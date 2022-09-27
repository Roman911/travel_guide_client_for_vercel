import { gql } from '@apollo/client'

export const REGISTRATION = gql`
  mutation registration($input: RegistrationUserInput!) {
    registration(input: $input) {
      user {
        name
      }
    }
  }
`
