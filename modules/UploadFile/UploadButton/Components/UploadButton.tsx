import React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'

interface IProps {
  children: React.ReactNode
  name: string
}

const MyUploadButton = styled(Button)<ButtonProps>(({ theme }) => ({
  border: '2px dashed',
  borderColor: theme.palette.text.primary,
  color: theme.palette.text.primary,
  borderRadius: 0,
  opacity: 0.7,
  '&:hover': {
    border: '2px dashed',
    borderColor: theme.palette.text.primary,
  },
}))

const UploadButton: React.FC<IProps> = ({ children, name }) => {
  return (
    <MyUploadButton
      variant="outlined"
      //@ts-ignore
      component="label"
    >
      {[name, children]}
    </MyUploadButton>
  )
}

export default UploadButton
