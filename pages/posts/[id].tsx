import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { MainLayout, Post } from '../../modules'
import { POST } from '../../apollo/queries/posts'

const PostPage: NextPage = () => {
  const router = useRouter()
  const [post, { loading, error, data }] = useLazyQuery(POST)

  React.useEffect(() => {
    if (router.query.id) {
      post({
        variables: { postID: router.query.id },
      })
    }
  }, [router])

  return (
    <MainLayout>
      <Post post={data?.post} isTrip={false} />
    </MainLayout>
  )
}

export default PostPage
