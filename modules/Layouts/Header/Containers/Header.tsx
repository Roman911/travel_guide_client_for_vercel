import React from 'react'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../../hooks'
import { HeaderComponent } from '../Components'

const Header: React.FC = () => {
  const router = useRouter()
  const {
    layout: { theme },
    user: { userData },
  } = useTypedSelector(state => state)
  const { changeDraver, changeLinearProgress, changeTheme } = useActions()

  const handleClick = (path: string) => {
    changeLinearProgress(true)
    router.push(path)
  }

  const handleClickUser = () => {
    if (userData) {
      console.log('click User')
      changeDraver(true)
    } else {
      router.push('/login')
      changeLinearProgress(true)
    }
  }

  const changeSetTheme = () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark')
  }

  console.log('render: modules/Header/Containers/Header')

  return (
    <HeaderComponent
      theme={theme}
      pathname={router.pathname}
      handleClick={handleClick}
      handleClickUser={handleClickUser}
      changeSetTheme={changeSetTheme}
      userData={userData}
    />
  )
}

export default React.memo(Header)
