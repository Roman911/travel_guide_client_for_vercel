import React from 'react'
import { useRouter } from 'next/router'
import { useActions, useTypedSelector } from '../../../../hooks'
import { ProfileComponent } from '../Components'
import type { IUserProfile } from '../../../../types/user'

interface IProps {
  user: IUserProfile
}

const UserProfile: React.FC<IProps> = ({ user }) => {
  const router = useRouter()
  const { userData } = useTypedSelector(state => state.user)
  const { changeLinearProgress } = useActions()
  const isHolder = userData?._id === user._id

  const handleClickToSettings = () => {
    changeLinearProgress(true)
    router.push('/profile/settings')
  }

  return (
    <ProfileComponent
      isHolder={isHolder}
      user={user}
      handleClickToSettings={handleClickToSettings}
    />
  )
}

export default UserProfile
