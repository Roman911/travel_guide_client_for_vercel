import React from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../../../../hooks'
import { SpeedDialComponent } from '../Components'

const SpeedDial: React.FC = () => {
  const router = useRouter()
  const { addedNotification, setDialog, setLeftBox } = useActions()

  const handleClick = (
    set: 'createDirection' | 'createLocation' | 'locationsList'
  ) => {
    setDialog(true)
    //addedNotification({
    //message: 'Введіть локацію в пошука або виберіть на мапі',
    //key: `${new Date().getTime()}+${Math.random()}`,
    //})
    setLeftBox(set)
    if (set === 'createLocation') {
      router.push('?location=createLocation')
    }
  }

  return <SpeedDialComponent handleClick={handleClick} />
}

export default SpeedDial
