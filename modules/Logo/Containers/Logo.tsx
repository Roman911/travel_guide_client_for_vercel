import React from 'react'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../hooks'
import { LogoComponent } from '../Components'

const Logo: React.FC = () => {
  const router = useRouter()
  const { theme } = useTypedSelector(state => state.layout)
  const { changeLinearProgress } = useActions()

  const handleClick = () => {
    if (router.pathname === '/') {
      void 0
    } else {
      changeLinearProgress(true)
      router.push('/')
    }
  }

  return <LogoComponent theme={theme} handleClick={handleClick} />
}

export default Logo
