import React from 'react'
import { PostsNewsPageComponent } from '../Components'

interface IProps {
  children: React.ReactNode
}

const PostsNewsPage: React.FC<IProps> = ({ children }) => {
  return <PostsNewsPageComponent>{children}</PostsNewsPageComponent>
}

export default PostsNewsPage
