import React from 'react'
import { useActions } from '../../../../hooks'
import { SeeTheWholeMapComponent } from '../Components'

const SeeTheWholeMap: React.FC = () => {
  const { setViewportSeeMap } = useActions()

  const handleClick = () => {
    setViewportSeeMap()
  }

  return <SeeTheWholeMapComponent handleClick={handleClick} />
}

export default SeeTheWholeMap
