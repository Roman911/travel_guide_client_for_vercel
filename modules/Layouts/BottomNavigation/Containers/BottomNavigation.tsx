import React from 'react'
import { useRouter } from 'next/router'
import { BottomNavigationComponent } from '../Components'

const BottomNavigation: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false)
  const router = useRouter()

  const handleClick = () => {
    setOpen(prev => !prev)
  }

  const handleClickRout = (rout: string) => {
    router.push(rout)
  }

  return (
    <BottomNavigationComponent
      isOpen={isOpen}
      handleClick={handleClick}
      handleClickRout={handleClickRout}
    />
  )
}

export default BottomNavigation
