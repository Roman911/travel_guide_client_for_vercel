import type { NextPage } from 'next'
import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { MainLayout, Posts } from '../../modules'
import { TRIPS_AND_PARAMS } from '../../apollo/queries/trips'

const Directions: NextPage = () => {
  const [params, setParams] = React.useState({ page: 1, limit: 12 })
  const [numberPosts, setNumberPosts] = React.useState(12)
  const [trips, { loading, data, error }] = useLazyQuery(TRIPS_AND_PARAMS)

  React.useEffect(() => {
    trips({
      variables: { input: { page: params.page, limit: params.limit } },
    })
  }, [params])

  return (
    <MainLayout>
      <Posts
        home={false}
        layout={{
          title: 'Маршрути',
        }}
        loading={loading}
        numberPosts={numberPosts}
        posts={data?.tripsAndParams.trips}
      />
    </MainLayout>
  )
}

export default Directions
