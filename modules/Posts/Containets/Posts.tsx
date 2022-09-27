import React from 'react'
import { useTypedSelector } from '../../../hooks'
import { Layouts } from '../'
import { PostsComponent } from '../Components'
import { IPost } from '../../../types/post'

interface IProps {
  home: boolean
  layout: {
    title: string
    link?: string
    linkTitle?: string
  }
  loading?: boolean
  numberPosts: number
  posts?: IPost[]
}

const Posts: React.FC<IProps> = ({
  home,
  layout,
  loading,
  numberPosts,
  posts,
}) => {
  const { userData } = useTypedSelector(state => state.user)

  return (
    <Layouts home={home} layout={layout}>
      <PostsComponent
        home={home}
        loading={loading}
        numberPosts={numberPosts}
        posts={posts}
        userId={userData?._id}
      />
    </Layouts>
  )
}

export default Posts
