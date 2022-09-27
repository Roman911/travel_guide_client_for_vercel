import React from 'react'
import { CircularProgress, Box } from '@mui/material'

interface IProps {
  marginTop: number
}

const CircularProgressComponent: React.FC<IProps> = ({ marginTop }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop }}>
      <CircularProgress />
    </Box>
  )
}

export default CircularProgressComponent
