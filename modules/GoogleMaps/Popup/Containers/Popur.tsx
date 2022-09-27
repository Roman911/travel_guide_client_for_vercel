import React from 'react'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../../hooks'
import { PopurComponent } from '../Components'

const Popur: React.FC = () => {
  const router = useRouter()
  const { selected } = useTypedSelector(state => state.googleMap)
  const { setSelected } = useActions()

  const closeOnClick = () => {
    setSelected(null)
  }

  const editOnClick = () => {
    setSelected(null)
    router.push(`?locationID=${selected._id}`)
  }

  return (
    selected && (
      <PopurComponent
        selected={selected}
        closeOnClick={closeOnClick}
        editOnClick={editOnClick}
      />
    )
  )
}

export default Popur
