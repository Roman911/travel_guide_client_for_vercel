import React from 'react'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../../hooks'
import { DrawerComponent } from '../Components'

const Drawer: React.FC = () => {
  const router = useRouter()
  const {
    layout: { drawerIsOpen },
    user: { userData },
  } = useTypedSelector(state => state)
  const { changeDraver, changeLinearProgress, removeUserData } = useActions()

  const toggleDrawer = () => {
    changeDraver(false)
  }

  const logout = () => {
    localStorage.removeItem('userData')
    removeUserData()
  }

  const handleClick = (path: string) => {
    changeLinearProgress(true)
    router.push(path)
  }

  return (
    <DrawerComponent
      drawerIsOpen={drawerIsOpen}
      toggleDrawer={toggleDrawer}
      userData={userData}
      logout={logout}
      handleClick={handleClick}
    />
  )
}

export default Drawer
