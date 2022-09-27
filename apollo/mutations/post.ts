import { gql } from '@apollo/client'

export const LIKE_POST = gql`
  mutation setLikeForPost($input: LikeInput!) {
    setLikeForPost(input: $input) {
      _id
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      _id
    }
  }
`
