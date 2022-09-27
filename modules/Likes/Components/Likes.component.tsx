import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { Favorite } from '@mui/icons-material'

type Props = {
  component: boolean
  userId?: string
  colorRed: string
  colorIcon: string
  likes: string[]
  handleClick?: () => void
}

const LikesComponent: React.FC<Props> = ({
  component,
  userId,
  colorRed,
  colorIcon,
  likes,
  handleClick,
}) => {
  const color = userId && likes.includes(userId) ? colorRed : colorIcon

  const MyIcon = component ? (
    <Favorite sx={{ color, marginRight: 1 }} fontSize="small" />
  ) : (
    <IconButton onClick={handleClick} sx={{ color }}>
      <Favorite fontSize="small" />
    </IconButton>
  )

  return (
    <Box display="flex" sx={{ alignItems: 'center', margin: '0 6px' }}>
      {MyIcon}
      {likes.length !== 0 && (
        <Typography variant="body1" sx={{ color: colorIcon }}>
          {likes.length}
        </Typography>
      )}
    </Box>
  )
}

export default LikesComponent
