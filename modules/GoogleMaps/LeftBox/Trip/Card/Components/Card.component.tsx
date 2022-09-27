import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

const CardComponent: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 1,
        position: 'relative',
        '::after': {
          content: "''",
          width: '2px',
          bottom: 0,
          position: 'absolute',
          borderLeft: '2px dashed #ccc',
          right: '25px',
          top: '80px',
        },
        '::before': {
          content: "''",
          width: '2px',
          bottom: 0,
          position: 'absolute',
          borderLeft: '2px dashed #ccc',
          right: '25px',
          top: 0,
          zIndex: 3,
        },
      }}
    >
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          image="http://localhost:3005/images/1662483502693_Bq6OaIN3r6pIGSBml.webp"
          alt="Live from space album cover"
        />
        <CardContent sx={{ flex: '1 0 auto', maxWidth: '300px' }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontSize="12px"
          >
            Фортеці, замки, палаци
          </Typography>
          <Typography variant="h6" fontSize="17px">
            Історико-культурний комплекс «Запорізька Січ»
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            fontSize="13px"
          >
            Запорізька область, Запоріжжя, вул. Старого Редуту, 11
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
        1
      </Box>
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
          12,5
        </Typography>
        <Typography variant="subtitle1" fontSize="13px" marginTop="-6px">
          km
        </Typography>
      </Box>
    </Box>
  )
}

export default CardComponent
