import React from 'react'
import { InfoWindow } from '@react-google-maps/api'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import type { ILocation } from '../../../../types/googleMap'

interface IProps {
  selected: ILocation
  closeOnClick: () => void
  editOnClick: () => void
}

const PopurComponent: React.FC<IProps> = ({
  selected,
  closeOnClick,
  editOnClick,
}) => {
  const position = { lat: selected.latitude, lng: selected.longitude }
  return (
    <InfoWindow position={position} onCloseClick={closeOnClick}>
      <Card sx={{ maxWidth: 220 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="113"
          image={`${process.env.NEXT_APP_HOST_API}images/${selected.cover}m.webp`}
        />
        <CardContent>
          <Typography gutterBottom marginBottom={1} variant="subtitle2">
            {selected?.title}
          </Typography>
          <Stack direction="row" alignItems="center">
            <LocationOn color="primary" />
            <Typography variant="body1" fontSize="12px">
              {selected?.address}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={closeOnClick} size="small">
            Закрити
          </Button>
          <Button onClick={editOnClick} size="small">
            Більше
          </Button>
        </CardActions>
      </Card>
    </InfoWindow>
  )
}

export default PopurComponent
