import React from 'react'
import Image from 'next/image'
import {
  Box,
  CardHeader,
  Breadcrumbs,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { Close, MoreVert } from '@mui/icons-material'
import { useDate } from '../../../../../hooks'
import { Avatar } from '../../../../'
import { TripInfo } from '../../../../Posts/Card'
import { Card } from '../'

interface IProps {
  trip: {
    title: string
    cover: string
    createdAt: string
    small_text: string
    author: {
      name: string
      avatar?: string
    }
    trip_value: {
      distance: number
      travel_time: number
      waypoints: number
    }
  }
  widthLeftBox: string
}

const TripComponent: React.FC<IProps> = ({ trip, widthLeftBox }) => {
  const { author, cover, createdAt, small_text, title, trip_value } = trip

  return (
    <Box position="relative" sx={{ overflowY: 'auto', height: '100%' }}>
      <Typography
        variant="h5"
        textAlign="center"
        marginTop={2}
        marginBottom={1}
        color="text.secondary"
      >
        {title}
      </Typography>
      <IconButton
        //onClick={handleClick}
        color="secondary"
        sx={{
          marginTop: 0,
          position: 'absolute',
          top: 12,
          right: 1,
        }}
      >
        <Close />
      </IconButton>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ paddingLeft: 1, paddingRight: 1, marginBottom: 2 }}
      >
        <Link underline="hover" color="inherit" href="/">
          Маршрути
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Львівська область
        </Link>
        <Typography color="text.primary">Золота підкова Львівщини</Typography>
      </Breadcrumbs>
      <Image
        src={`/${cover}l.webp`}
        layout="intrinsic"
        alt={trip.title}
        width={`${widthLeftBox}px`}
        height={300}
      />
      <Stack
        spacing={2}
        padding="20px 20px 10px"
        sx={{ borderBottom: '1px solid grey' }}
      >
        <Typography variant="body1" color="text.secondary">
          {small_text}
        </Typography>
        <CardHeader
          avatar={
            <Avatar
              size={40}
              userData={{ name: author.name, avatar: author.avatar }}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={author.name}
          subheader={useDate({ serverDate: createdAt, format: 'LL' })}
        />
        <TripInfo trip_value={trip_value} isCard={false} />
      </Stack>
      <Stack position="relative">
        {[1, 2, 3, 4].map(i => {
          return <Card key={i} />
        })}
      </Stack>
    </Box>
  )
}

export default TripComponent
