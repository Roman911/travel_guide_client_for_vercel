import React from 'react'
import { useTypedSelector } from '../../../../hooks'
import { DirectionComponent } from '../Components'

type DirectionsResult = google.maps.DirectionsResult

const Direction: React.FC = () => {
  const [directions, setDirections] = React.useState<DirectionsResult>()
  const { waypoints } = useTypedSelector(state => state.googleMap)

  React.useEffect(() => {
    if (waypoints) {
      const service = new google.maps.DirectionsService()
      service.route(
        {
          //@ts-ignore
          waypoints: waypoints.map(i => {
            return { location: i.latLng, stopover: false }
          }),
          origin: waypoints[0].latLng,
          destination: waypoints[waypoints.length - 1].latLng,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === 'OK' && result) {
            setDirections(result)
          }
        }
      )
    }
  }, [waypoints])

  return directions && <DirectionComponent directions={directions} />
}

export default Direction
