import { gql } from '@apollo/client'

export const CREATE_COMMENT = gql`
  mutation createComment($input: CommentInput!) {
    createComment(input: $input) {
      _id
    }
  }
`

export const ADDED_ANSWER = gql`
  mutation addedCommentAnswer($input: AnswerCommentInput!) {
    addedCommentAnswer(input: $input) {
      _id
    }
  }
`
