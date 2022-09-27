import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useActions } from '../../../../../hooks'
import { CircularProgress } from '../../../../'
import { TripComponent } from '../Components'
import { TRIP } from '../../../../../apollo/queries/trips'

interface IProps {
  rout: string
  widthLeftBox: string
}

const Trip: React.FC<IProps> = ({ rout, widthLeftBox }) => {
  const [trip, { loading, error, data }] = useLazyQuery(TRIP)
  const { setWaypoints } = useActions()

  useEffect(() => {
    trip({
      variables: { tripID: rout },
    })
  }, [])

  useEffect(() => {
    if (data) {
      setWaypoints(data.trip.waypoints)
    }
  }, [data])

  if (!data || loading) return <CircularProgress marginTop={6} />

  return <TripComponent trip={data.trip} widthLeftBox={widthLeftBox} />
}

export default Trip
