import React from "react"
import { Box, Typography } from '@mui/material'
import { Visibility } from '@mui/icons-material'

type Props = {
  views: number
  color: string
}

export const Views: React.FC<Props> = ({ views, color }) => {
  return <Box display='flex' sx={{ alignItems: 'center', margin: '0 6px', color }}>
    <Visibility fontSize="small" />
    <Typography variant="body1" marginLeft={0.6}>{views}</Typography>
  </Box>
}