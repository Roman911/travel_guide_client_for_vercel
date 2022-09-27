import React from 'react'
import type { NextPage } from 'next'
import { useLazyQuery } from '@apollo/client'
import { MainLayout, Posts } from '../../modules'
import { POSTS_AND_PARAMS } from '../../apollo/queries/posts'

const News: NextPage = () => {
  const [params, setParams] = React.useState({ page: 1, limit: 12 })
  const [numberPosts, setNumberPosts] = React.useState(12)
  const [locations, { loading, data, error }] = useLazyQuery(POSTS_AND_PARAMS)

  React.useEffect(() => {
    locations({
      variables: { input: { page: params.page, limit: params.limit } },
    })
  }, [params])

  return (
    <MainLayout>
      <Posts
        home={false}
        layout={{
          title: 'Новини',
        }}
        loading={loading}
        numberPosts={numberPosts}
        posts={data?.postsAndParams.posts}
      />
    </MainLayout>
  )
}

export default News
