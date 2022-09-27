import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { useActions } from '../../hooks'
import { MainLayout, Post } from '../../modules'
import { TRIP_FOR_POST } from '../../apollo/queries/trips'

const isTrip = true

const Trips: NextPage = () => {
  const router = useRouter()
  const { setWaypoints } = useActions()
  const [trip, { loading, error, data }] = useLazyQuery(TRIP_FOR_POST)

  React.useEffect(() => {
    if (router.query.id) {
      trip({
        variables: { tripID: router.query.id },
      })
    }
  }, [router])

  React.useEffect(() => {
    if (data) {
      setWaypoints(data.trip.waypoints)
    }
  }, [data])

  return (
    <MainLayout>
      <Post post={data?.trip} isTrip={isTrip} />
    </MainLayout>
  )
}

export default Trips
