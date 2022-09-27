import React from 'react'
import Image from 'next/image'
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { Facebook, Favorite, Share, Twitter } from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link'
import { Avatar, Comments, Likes, GoogleMaps } from '../../'
import { MyStepper, Rating, Tags, Views } from '../../../Components'
import { IPropsComponent } from './types/post'

export const PostComponent: React.FC<IPropsComponent> = ({
  post,
  useDate,
  refm,
  steps,
  style,
  colors,
  handleClickToUser,
  isTrip,
}) => {
  const {
    _id,
    title,
    tags,
    small_text,
    cover,
    editor,
    link,
    likes,
    views,
    author,
    createdAt,
  } = post

  return (
    <Container>
      <Stack
        marginTop={10}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography ref={refm} variant="h3" sx={{ color: colors.darkGray }}>
            {title}
          </Typography>
          <Tags tags={tags} />
        </Box>
        <Typography
          variant="body2"
          sx={{
            borderRight: `3px solid ${colors.darkGray}`,
            padding: '4px 6px 4px 0',
          }}
        >
          {useDate({ serverDate: createdAt })}
        </Typography>
      </Stack>
      <Grid container marginTop={2}>
        <Grid item xs={1} marginTop={3} sx={{ position: 'relative' }}>
          <Stack sx={{ ...style }}>
            <IconButton sx={{ width: '40px', margin: '5px auto' }}>
              <Favorite sx={{ color: '#db4454' }} />
            </IconButton>
            <IconButton sx={{ width: '40px', margin: '5px auto' }}>
              <Facebook sx={{ color: '#3b5998' }} />
            </IconButton>
            <IconButton sx={{ width: '40px', margin: '5px auto' }}>
              <Twitter sx={{ color: '#5ea9dd' }} />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={8} marginTop={3}>
          <Typography variant="body1" marginBottom={2}>
            {small_text}
          </Typography>
          <Image
            src={`/${cover}l.webp`}
            layout="intrinsic"
            alt={title}
            width={1030}
            height={500}
          />
          {isTrip && (
            <Box width="100%" height="300px">
              <GoogleMaps
                mapContainerStyle={{
                  width: '100%',
                  height: '100%',
                  marginTop: '10px',
                }}
              />
            </Box>
          )}
          <Box
            className="editorWrapper"
            dangerouslySetInnerHTML={{ __html: editor }}
          />
          {link && (
            <Link
              href={link}
              target="_blank"
              underline="none"
              color={colors.darkGray}
              display="flex"
              sx={{
                alignItems: 'center',
                transition: '300ms',
                ':hover': { color: '#ed2945' },
              }}
            >
              <LinkIcon sx={{ marginRight: 1, transform: 'rotate(25deg)' }} />
              Джерело
            </Link>
          )}
          <Stack
            flexDirection="row"
            width="100%"
            marginTop={2}
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Stack flexDirection="row">
              <Likes postId={_id} likes={likes} />
              <Views views={views} color={colors.icon} />
            </Stack>
            <IconButton
              aria-label="share"
              sx={{ marginLeft: 'auto', color: colors.icon }}
            >
              <Share />
            </IconButton>
          </Stack>
          <Stack flexDirection="row" marginTop={2}>
            <Stack flexDirection="row" sx={{ alignItems: 'center' }}>
              <Button
                onClick={() => handleClickToUser(author._id)}
                sx={{ padding: 0, borderRadius: '50%' }}
              >
                <Avatar
                  size={70}
                  userData={{ name: author.name, avatar: author.avatar }}
                />
              </Button>
              <Stack alignItems="center" marginLeft={2}>
                <Link
                  onClick={() => handleClickToUser(author._id)}
                  underline="none"
                  marginBottom={0.7}
                  variant="h6"
                  sx={{
                    color: colors.darkGray,
                    transition: '300ms',
                    ':hover': { color: '#db4454' },
                  }}
                >
                  {author.name}
                </Link>
                <Rating rating={author.rating} />
              </Stack>
            </Stack>
          </Stack>
          <Comments postId={_id} />
        </Grid>
        <Grid item xs={3}>
          <MyStepper steps={steps} />
          <Paper elevation={2} sx={{ marginLeft: 2, padding: '5px 20px' }}>
            <Typography variant="h6">Популярні</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
