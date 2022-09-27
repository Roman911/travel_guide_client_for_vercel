import { gql } from '@apollo/client'

export const CREATE_LOCATION = gql`
  mutation createLocation($input: CreateLocationInput!) {
    createLocation(input: $input) {
      _id
    }
  }
`

export const UPDATE_LINK_TO_POST = gql`
  mutation updateLinkToPost($input: UpdateLinkToPostInput!) {
    updateLinkToPost(input: $input) {
      _id
    }
  }
`
