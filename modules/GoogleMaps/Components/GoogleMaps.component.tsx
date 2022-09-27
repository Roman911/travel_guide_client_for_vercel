import React from 'react'
import { GoogleMap } from '@react-google-maps/api'
import { Direction, Marker, Popur } from '../'

type MapOptions = google.maps.MapOptions

interface IProps {
  options: MapOptions
  onLoad: (map: any) => void
  onDragEnd: () => void
  onZoomChanged: () => void
  mapRef: any
  viewport: {
    center: {
      lat: number
      lng: number
    }
    zoom: number
  }
  mapContainerStyle: {
    width: string
    height: string
    marginTop: string
  }
}

const GoogleMapsComponent: React.FC<IProps> = ({
  options,
  onLoad,
  onDragEnd,
  onZoomChanged,
  mapRef,
  viewport,
  mapContainerStyle,
}) => {
  return (
    <GoogleMap
      {...viewport}
      ref={mapRef}
      mapContainerStyle={mapContainerStyle}
      onLoad={onLoad}
      onDragEnd={onDragEnd}
      onZoomChanged={onZoomChanged}
      options={options}
    >
      <Direction />
      <Marker />
      <Popur />
    </GoogleMap>
  )
}

export default GoogleMapsComponent
