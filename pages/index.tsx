import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { useQuery } from '@apollo/client'
import { Posts } from '../modules'
import { MainLayout } from '../modules'
import { POSTS } from '../apollo/queries/posts'
import { TRIPS } from '../apollo/queries/trips'

const Home: NextPage = () => {
  const {
    loading: loadingByPosts,
    data: dataByPosts,
    error: errorByPosts,
  } = useQuery(POSTS, {
    variables: { input: { limit: 8, page: 1 } },
  })

  const {
    loading: loadingByTrips,
    data: dataByTrips,
    error: errorByTrips,
  } = useQuery(TRIPS, { variables: { input: { limit: 8, page: 1 } } })

  console.log('render: pages, Home')

  return (
    <MainLayout img="/velosipedyi_banner.webp">
      <Box marginTop={4}>
        <Posts
          home={true}
          layout={{
            title: 'Новини',
            link: '/posts',
            linkTitle: 'Більше новин',
          }}
          loading={loadingByPosts}
          numberPosts={8}
          posts={dataByPosts?.posts}
        />
        <Posts
          home={true}
          layout={{
            title: 'Маршрути',
            link: '/trips',
            linkTitle: 'Більше маршрутів',
          }}
          loading={loadingByTrips}
          numberPosts={8}
          posts={dataByTrips?.trips}
        />
      </Box>
    </MainLayout>
  )
}

export default Home
