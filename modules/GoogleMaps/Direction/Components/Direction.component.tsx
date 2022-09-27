import React from 'react'
import {
  DirectionsRenderer,
  DirectionsService,
  Marker,
} from '@react-google-maps/api'

type DirectionsResult = google.maps.DirectionsResult

interface IProps {
  directions: DirectionsResult
}

const DirectionComponent: React.FC<IProps> = ({ directions }) => {
  return <DirectionsRenderer directions={directions} />
}

export default DirectionComponent
