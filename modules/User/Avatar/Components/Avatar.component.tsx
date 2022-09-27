import React from 'react'
import { Avatar } from '@mui/material'
import { PermIdentity } from '@mui/icons-material'
import type { IProps } from '../Containers'

const AvatarComponent: React.FC<IProps> = ({ size, userData, sx }) => {
  const params = { width: size, height: size, color: '#fff', ...sx }

  console.log('render: Components, Avatar')

  if (!userData?.avatar) {
    return (
      <Avatar sx={params}>
        {userData ? userData.name[0] : <PermIdentity />}
      </Avatar>
    )
  }

  return (
    <Avatar
      sx={params}
      alt={userData?.name}
      src={`${process.env.NEXT_APP_HOST_API}images/${userData?.avatar}`}
    />
  )
}

export default React.memo(AvatarComponent)
