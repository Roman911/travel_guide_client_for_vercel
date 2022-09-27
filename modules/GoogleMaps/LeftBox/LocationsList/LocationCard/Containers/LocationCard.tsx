import React from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../../../../../../hooks'
import { LocationCardComponent } from '../Components'
import type { ILocation } from '../../../../types/location'

interface IProps {
  item: ILocation
}

const LocationCard: React.FC<IProps> = ({ item }) => {
  const router = useRouter()
  const { setLeftBox, setHighlightedId, setSelected, setViewport } =
    useActions()

  const handleClick = () => {
    router.push(`?locationID=${item._id}`)
    setLeftBox('location')
    setSelected(item)
    setViewport({
      center: {
        lat: item.latitude,
        lng: item.longitude,
      },
      zoom: 12,
    })
  }

  return (
    <LocationCardComponent
      item={item}
      handleClick={handleClick}
      setHighlightedId={setHighlightedId}
    />
  )
}

export default LocationCard
