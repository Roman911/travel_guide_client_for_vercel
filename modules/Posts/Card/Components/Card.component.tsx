import React from 'react'
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { MoreVert, Share } from '@mui/icons-material'
import { LikesComponent } from '../../../Likes/Components'
import { Avatar, PreviewComments } from '../../../'
import { Views } from '../../../../Components'
import { TravelModeComponent } from '../TravelMode'
import { TripInfo } from '../'
import { IPost } from '../../../../types/post'

interface IProps {
  colors: {
    icon: string
    red: string
  }
  item: IPost
  md?: number
  usedId?: string
  handleClick: () => void
  useDate: ({
    serverDate,
    format,
  }: {
    serverDate: string
    format: string
  }) => string
}

const CardComponent: React.FC<IProps> = ({
  usedId,
  item,
  colors: { icon, red },
  handleClick,
  useDate,
  md,
}) => {
  const {
    _id,
    title,
    cover,
    small_text,
    views,
    likes,
    createdAt,
    travelMode,
    trip_value,
    author: { name, avatar },
  } = item

  return (
    <Grid item xs={12} sm={6} md={md || 3} p={1}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar size={40} userData={{ name, avatar }} />}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={name}
          subheader={useDate({ serverDate: createdAt, format: 'LL' })}
        />
        <CardActionArea onClick={handleClick} sx={{ position: 'relative' }}>
          {travelMode && <TravelModeComponent travelMode={travelMode} />}
          {trip_value && <TripInfo isCard={true} trip_value={trip_value} />}
          <CardMedia
            component="img"
            height="194"
            image={`${process.env.NEXT_APP_HOST_API}images/${cover}m.webp`}
            alt="Paella dish"
          />
          <CardContent sx={{ paddingBottom: '8px' }}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                margin: '-8px 0 8px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: '4',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {small_text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing sx={{ paddingTop: 0 }}>
          <LikesComponent
            component={true}
            userId={usedId}
            colorRed={red}
            colorIcon={icon}
            likes={likes}
          />
          <Views views={views} color={icon} />
          <PreviewComments postId={_id} />
          <IconButton
            aria-label="share"
            sx={{ marginLeft: 'auto', color: icon }}
          >
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardComponent
