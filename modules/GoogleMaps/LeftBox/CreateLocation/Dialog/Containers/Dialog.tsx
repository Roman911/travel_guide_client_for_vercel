import React from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../../../../../../hooks'
import { DialogComponent } from '../Components'

interface IProps {
  dialog: boolean
}

const Dialog: React.FC<IProps> = ({ dialog }) => {
  const router = useRouter()
  const { setDialog, setLeftBox } = useActions()

  const handleNext = () => {
    setDialog(false)
  }

  const handleClose = () => {
    setDialog(false)
    setLeftBox('locationsList')
    router.push('')
  }

  return (
    <DialogComponent
      dialog={dialog}
      handleClose={handleClose}
      handleNext={handleNext}
    />
  )
}

export default Dialog
