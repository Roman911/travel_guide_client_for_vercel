import React from 'react'
import { Box, Typography } from '@mui/material'
import { Chat } from '@mui/icons-material'

type Props = {
  icon: string
  data?: {
    comments: string[]
  }
}

const PreviewCommentsComponent: React.FC<Props> = ({ icon, data }) => {
  return (
    <Box
      display="flex"
      sx={{ alignItems: 'center', marginLeft: '6px', color: icon }}
    >
      <Chat fontSize="small" />
      <Typography variant="body2" marginLeft={0.2}>
        {data?.comments.length}
      </Typography>
    </Box>
  )
}

export default PreviewCommentsComponent
