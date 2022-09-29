import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

interface IProps {
  index: number
  length: number
  location: {
    isType: string
    cover: string
    title: string
    address: string
  } | null
  distance: number
}

const CardComponent: React.FC<IProps> = ({
  index,
  length,
  location,
  distance,
}) => {
  const before =
    index !== 0
      ? {
          content: "''",
          width: '2px',
          position: 'absolute',
          borderLeft: '2px dashed #ccc',
          right: '25px',
          top: 0,
          zIndex: 3,
          height: '106px',
        }
      : {}

  const after =
    index + 1 !== length
      ? {
          content: "''",
          width: '2px',
          bottom: 0,
          position: 'absolute',
          borderLeft: '2px dashed #ccc',
          right: '25px',
          top: '80px',
        }
      : {}

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 1,
        position: 'relative',
        '::after': after,
        '::before': before,
      }}
    >
      <Card sx={{ display: 'flex' }}>
        {location && (
          <CardMedia
            component="img"
            sx={{ width: 140 }}
            image={`https://tg-server-herocu.herokuapp.com/images/${location.cover}m.webp`}
            alt="Live from space album cover"
          />
        )}
        <CardContent sx={{ flex: '1 0 auto', maxWidth: '300px' }}>
          {location && (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              fontSize="12px"
            >
              {location.isType}
            </Typography>
          )}
          <Typography variant="h6" fontSize="17px">
            {location ? location.title : 'Lviv'}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontSize="13px"
          >
            {location ? location.address : 'Lviv, вул. Старого Редуту, 11'}
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          backgroundColor: '#18a5ef',
          color: '#fff',
          padding: '8px 15px',
          borderRadius: '50%',
          marginLeft: 1.5,
          zIndex: 10,
        }}
      >
        {index + 1}
      </Box>
      {index + 1 !== length && (
        <Box
          sx={{
            position: 'absolute',
            bottom: '-14px',
            right: '20px',
            textAlign: 'end',
            backgroundColor: '#fff',
            zIndex: 10,
          }}
        >
          <Typography variant="h6" color="text.secondary" fontSize="17px">
            {distance}
          </Typography>
          <Typography variant="subtitle1" fontSize="13px" marginTop="-6px">
            км
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default CardComponent
