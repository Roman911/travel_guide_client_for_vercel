import React from 'react'
import { Divider, Stack, Typography } from '@mui/material'
import { AvTimer, LocationOn, Route } from '@mui/icons-material'

interface IProps {
  dst: string
  isCard: boolean
  time: string
  waypoints: number
}

const TripInfoComponent: React.FC<IProps> = ({
  dst,
  isCard,
  time,
  waypoints,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={
        isCard && {
          position: 'absolute',
          top: '124px',
          paddingTop: '4px',
          width: '100%',
          background: 'rgba(255,255,255,0.7)',
        }
      }
    >
      <Stack alignItems="center">
        <Typography variant="body2">Локації</Typography>
        <LocationOn color="primary" />
        <Typography variant="subtitle2">{waypoints}</Typography>
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack alignItems="center">
        <Typography variant="body2">Км</Typography>
        <Route color="primary" sx={{ transform: 'rotate(90deg)' }} />
        <Typography variant="subtitle2">{dst}</Typography>
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack alignItems="center">
        <Typography variant="body2">В дорозі</Typography>
        <AvTimer color="primary" />
        <Typography variant="subtitle2">{time}</Typography>
      </Stack>
    </Stack>
  )
}

export default TripInfoComponent
