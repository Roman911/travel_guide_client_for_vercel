import React from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../../../../hooks'
import { LayoutForAllPages } from '../../'
import { AuthLayoutComponents } from '../Components'

interface IProps {
  children: React.ReactNode
  title: 'Вхід' | 'Реєстрація'
  bottomText: string
  subtitle: {
    title: string
    btn: string
    link: string
  }
}

const AuthLayout: React.FC<IProps> = ({
  children,
  title,
  subtitle,
  bottomText,
}) => {
  const router = useRouter()
  const { changeLinearProgress } = useActions()

  React.useEffect(() => {
    changeLinearProgress(false)
  }, [])

  const handleClick = React.useCallback(() => {
    router.back()
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }, [])

  const handleChange = () => router.push(subtitle.link)

  return (
    <LayoutForAllPages>
      <AuthLayoutComponents
        children={children}
        bottomText={bottomText}
        subtitle={subtitle}
        title={title}
        handleClick={handleClick}
        handleChange={handleChange}
      />
    </LayoutForAllPages>
  )
}

export default AuthLayout
