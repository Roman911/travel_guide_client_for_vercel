import React from 'react'
import { Box, Stack } from '@mui/material'
import {
  DirectionsBike,
  DirectionsCar,
  DirectionsWalk,
} from '@mui/icons-material'

interface IProps {
  travelMode: string[]
}

const TravelModeComponent: React.FC<IProps> = ({ travelMode }) => {
  const isMode = (mode: string) => {
    if (mode === 'DRIVING') {
      return (
        <DirectionsCar
          sx={{
            color: '#fff',
          }}
        />
      )
    } else if (mode === 'BICYCLING') {
      return (
        <DirectionsBike
          sx={{
            color: '#fff',
          }}
        />
      )
    }
    return (
      <DirectionsWalk
        sx={{
          color: '#fff',
        }}
      />
    )
  }

  return (
    <Stack
      position="absolute"
      direction="row"
      spacing={1}
      sx={{ top: 8, left: 8 }}
    >
      {travelMode.map(i => {
        return (
          <Box
            key={i}
            sx={{
              padding: 1,
              background: 'rgba(24, 165, 239, 0.7)',
              borderRadius: '50%',
            }}
          >
            {isMode(i)}
          </Box>
        )
      })}
    </Stack>
  )
}

export default TravelModeComponent
