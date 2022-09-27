import { gql } from '@apollo/client'
import { Author } from '../variabels'

export const COMMENTS = gql`
  query comments($postId: String!) {
  comments(postId: $postId){
    _id
    comment
    createdAt
    rating
    ${Author}
    answers {
      _id
      comment
      rating
      createdAt
      ${Author}
    }
  }
}
`

export const COMMENTS_FOR_PREVIEW = gql`
  query comments($postId: String!) {
    comments(postId: $postId) {
      _id
    }
  }
`
