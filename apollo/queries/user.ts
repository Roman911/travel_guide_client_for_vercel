import { gql } from '@apollo/client'

export const USER = gql`
  query user($userID: String!) {
    user(userID: $userID) {
      _id
      name
      aboutMy
      avatar
      rating
      socials {
        facebook
        instagram
        twitter
        youtube
      }
    }
  }
`

export const USER_AVATARS = gql`
  query user($userID: String!) {
    user(userID: $userID) {
      avatars
    }
  }
`

export const USER_ACTIVATION = gql`
  query activate($activationLink: String!) {
    activate(activationLink: $activationLink) {
      user {
        _id
        name
        email
        avatar
      }
      refreshToken
      accessToken
    }
  }
`
