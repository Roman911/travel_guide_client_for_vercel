import React from 'react'
import { Box } from '@mui/material'

interface IProps {
  children: React.ReactNode
  widthLeftBox: string
}

const LeftBoxLayout: React.FC<IProps> = ({ children, widthLeftBox }) => {
  return (
    <Box width={`${widthLeftBox}px`} sx={{ maxHeight: 'calc(100vh - 64px)' }}>
      {children}
    </Box>
  )
}

export default LeftBoxLayout
