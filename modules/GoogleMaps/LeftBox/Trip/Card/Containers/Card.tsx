import React from 'react'
import { CardComponent } from '../Components'

interface IProps {
  index: number
  length: number
  location: {
    isType: string
    cover: string
    title: string
    address: string
  } | null
  distance: number
}

const Card: React.FC<IProps> = ({ index, length, location, distance }) => {
  return (
    <CardComponent
      index={index}
      length={length}
      location={location}
      distance={distance}
    />
  )
}

export default Card
