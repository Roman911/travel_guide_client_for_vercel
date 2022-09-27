import React from "react"
import { Box, Typography } from '@mui/material'

type Props = {
  rating: number
}

export const Rating: React.FC<Props> = ({ rating }) => {
  return <Box sx={{ display: 'inline-block', background: 'linear-gradient(90deg, #db4454,#9f406d)', width: '60px', textAlign: 'center', borderRadius: '2px' }}>
    <Typography variant="subtitle2" sx={{ color: '#fff', fontSize: '12px', }}>
      {rating}
    </Typography>
  </Box>
}