import React from 'react'
import { Button, Stack } from '@mui/material'
import { Tune } from '@mui/icons-material'
import { Regions } from '../../../'

interface IProps {
  children: React.ReactNode
  theme: 'light' | 'dark'
  widthLeftBox: string
}

const TopBarComponent: React.FC<IProps> = ({
  children,
  theme,
  widthLeftBox,
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
      sx={{
        position: 'absolute',
        width: `calc(100% - ${widthLeftBox}px)`,
        backgroundColor: theme === 'dark' ? '#1A2027' : '#fff',
        right: 0,
        zIndex: 1,
        padding: 1,
      }}
    >
      <Regions isMap={true} width="33.3333%" />
      {children}
      <Button
        sx={{ width: '33.3333%', padding: '14px 0' }}
        variant="outlined"
        size="large"
        endIcon={<Tune />}
      >
        Filter
      </Button>
    </Stack>
  )
}

export default TopBarComponent
