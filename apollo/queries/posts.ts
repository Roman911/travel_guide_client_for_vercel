import { gql } from '@apollo/client'
import { Author } from '../variabels'

export const POSTS = gql`
  query posts($input: ParamsPostInput!) {
    posts(input: $input) {
      _id
      title
      cover
      small_text
      views
      likes
      createdAt
      ${Author}
    }
  }
`

export const POSTS_AND_PARAMS = gql`
  query postsAndParams($input: ParamsPostInput!) {
    postsAndParams(input: $input) {
      page
      total_pages
      total_posts
      posts {
        _id
        title
        cover
        small_text
        views
        likes
        createdAt
        ${Author}
      }
    }
  }
`

export const POST = gql`
  query post($postID: String!) {
  post(postID: $postID){
    _id
    title
    tags
    small_text
    cover
    editor
    link
    likes
    views
    createdAt
    ${Author}
  }
}
`
