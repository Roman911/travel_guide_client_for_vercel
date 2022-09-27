import React from 'react'
import { Grid } from '@mui/material'
import { Card, CardSkeleton } from '../Card'
import { IPost } from '../../../types/post'

interface IProps {
  home: boolean
  loading?: boolean
  numberPosts: number
  posts?: IPost[]
  userId?: string
}

const PostsComponent: React.FC<IProps> = ({
  home,
  loading,
  numberPosts,
  posts,
  userId,
}) => {
  const postsSkeleton = [...Array(numberPosts)].map((i, index) => {
    return <CardSkeleton key={index} />
  })

  const postsMap = posts?.map(i => {
    return <Card key={i._id} item={i} usedId={userId} md={3} />
  })

  return (
    <Grid
      container
      alignItems="center"
      marginTop={home ? '-35px' : 1}
      flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
      padding={{ xs: '0', sm: '0', md: '0 10px' }}
    >
      {posts ? postsMap : postsSkeleton}
    </Grid>
  )
}

export default PostsComponent
