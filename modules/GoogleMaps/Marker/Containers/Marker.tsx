import React from 'react'
import { useActions, useTypedSelector } from '../../../../hooks'
import { MarkerComponent } from '../Components'
import { ILocation } from '../../../../types/googleMap'

const Marker: React.FC = () => {
  const { latLng, locationsAndTP, highlightedId, type, waypoints } =
    useTypedSelector(state => state.googleMap)
  const { setSelected } = useActions()

  const handleOpenPopur = (location: ILocation | null) => setSelected(location)

  return (
    <MarkerComponent
      latLng={latLng}
      locations={locationsAndTP?.locations}
      handleOpenPopur={handleOpenPopur}
      highlightedId={highlightedId}
      type={type}
      waypoints={waypoints}
    />
  )
}

export default Marker
