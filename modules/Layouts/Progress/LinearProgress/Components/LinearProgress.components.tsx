import React from 'react'
import { Box, LinearProgress } from '@mui/material'

type Props = {
  progress: number
}

const LinearProgressComponents: React.FC<Props> = ({ progress }) => {
  return (
    <Box sx={{ width: '100%', position: 'absolute', zIndex: 1600, top: 0 }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  )
}

export default LinearProgressComponents
