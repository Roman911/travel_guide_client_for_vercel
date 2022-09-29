import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import { useActions, useTypedSelector } from '../../../hooks'
import { GoogleMapsComponent } from '../Components'
import { CircularProgress } from '../../'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

interface IProps {
  mapContainerStyle: {
    width: string
    height: string
    marginTop: string
  }
}

const libraries = ['places']

const GoogleMaps: React.FC<IProps> = ({ mapContainerStyle }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    language: 'uk',
    region: 'UA',
    // @ts-ignore
    libraries,
  })
  const mapRef = React.useRef()
  const { viewport } = useTypedSelector(state => state.googleMap)
  const { setBounds, setViewport } = useActions()
  const options = React.useMemo<MapOptions>(
    () => ({
      mapId: 'ac4b2fc37a6c12a8',
      disableDefaultUI: true,
    }),
    []
  )
  const onLoad = React.useCallback((map: any) => (mapRef.current = map), [])
  const bounds = () => {
    if (mapRef.current) {
      //@ts-ignore
      const getBounds = mapRef.current.getBounds()
      const mapRefCurent = mapRef.current
      //@ts-ignore
      const lat = mapRefCurent.center?.lat() || 0
      //@ts-ignore
      const lng = mapRefCurent.center?.lng() || 0
      setViewport({
        center: { lat, lng },
        //@ts-ignore
        zoom: mapRefCurent.zoom,
      })
      if (getBounds) {
        let cur = 0
        let Ab = { lo: 0, hi: 0 }
        let Va = { lo: 0, hi: 0 }
        for (let key in getBounds) {
          if (cur === 0) Ab = getBounds[key]
          if (cur === 1) Va = getBounds[key]
          if (cur === 1) break
          cur++
        }
        if (cur === 1) {
          const bounds: [number[], number[]] = [
            [Ab.lo, Ab.hi],
            [Va.lo, Va.hi],
          ]
          setBounds(bounds)
        }
      }
    }
  }

  const onDragEnd = () => bounds()
  const onZoomChanged = () => bounds()

  return isLoaded ? (
    <GoogleMapsComponent
      options={options}
      onLoad={onLoad}
      onDragEnd={onDragEnd}
      onZoomChanged={onZoomChanged}
      mapRef={mapRef}
      viewport={viewport}
      mapContainerStyle={mapContainerStyle}
    />
  ) : (
    <CircularProgress marginTop={2} />
  )
}

export default GoogleMaps
