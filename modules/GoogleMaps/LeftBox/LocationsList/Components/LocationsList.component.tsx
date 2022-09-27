import React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { LocalLibrary, Route } from '@mui/icons-material'
import { LocationCard } from '../LocationCard'
import { CircularProgress } from '../../../../Layouts/Progress'
import type { ILocation } from '../../../types/location'

interface IProps {
  locations?: ILocation[]
  loading?: boolean
  total_locations?: number
  refm: (node?: Element | null | undefined) => void
}

const LocationsListComponent: React.FC<IProps> = ({
  locations,
  loading,
  total_locations,
  refm,
}) => {
  return (
    <Box padding={2} height="100%" sx={{ overflowY: 'auto' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LocalLibrary opacity={0.7} />
          <Typography marginLeft={1} variant="h6">
            Цікаві місця
          </Typography>
        </Box>
        <Button startIcon={<Route sx={{ transform: 'rotate(90deg)' }} />}>
          Маршрути
        </Button>
      </Stack>
      <Typography marginTop={1} variant="subtitle2">
        {total_locations
          ? `Знайдено ${total_locations} локацій`
          : 'Нічого не знайдено'}
      </Typography>
      {!locations || loading ? (
        <CircularProgress marginTop={6} />
      ) : (
        <Grid container spacing={2} marginTop={1}>
          {locations?.map(i => {
            return <LocationCard key={i._id} item={i} />
          })}
          <Box ref={refm} />
        </Grid>
      )}
    </Box>
  )
}

export default LocationsListComponent
