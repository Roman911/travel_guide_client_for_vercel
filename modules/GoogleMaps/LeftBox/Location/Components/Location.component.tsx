import React from 'react'
import Image from 'next/image'
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material'
import {
  Close,
  LocationOn,
  MoreVert,
  MyLocation,
  Share,
} from '@mui/icons-material'
import type { ILocation } from '../../../types/location'
import { LikesComponent } from '../../../../Likes/Components'
import { PreviewComments } from '../../../../'
import { Views } from '../../../../../Components'

interface IProps {
  anchorEl: null | HTMLElement
  location: ILocation
  open: boolean
  widthLeftBox: string
  handleClick: () => void
  handleClose: () => void
  handleOpenMenu: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleCreatePost: () => void
  handlePost: (url: string | null) => void
}

const LocationComponent: React.FC<IProps> = ({
  anchorEl,
  location,
  open,
  widthLeftBox,
  handleClick,
  handleClose,
  handleOpenMenu,
  handleCreatePost,
  handlePost,
}) => {
  return (
    <Box position="relative" sx={{ overflowY: 'auto', height: '100%' }}>
      <IconButton
        onClick={handleClick}
        color="secondary"
        sx={{
          marginTop: 0,
          position: 'absolute',
          top: 14,
          right: 1,
        }}
      >
        <Close />
      </IconButton>
      <Typography
        variant="h5"
        textAlign="center"
        marginTop={2}
        marginBottom={2}
        color="text.secondary"
      >
        {location.title}
      </Typography>
      <Box position="relative">
        <Image
          src={`/${location.cover}l.webp`}
          layout="intrinsic"
          alt={location.title}
          width={`${widthLeftBox}px`}
          height={300}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{
            position: 'absolute',
            bottom: '6px',
            padding: '8px',
            width: '100%',
            background: 'rgba(255,255,255,0.7)',
          }}
        >
          <LikesComponent
            component={true}
            userId={'ddd'}
            colorRed={'red'}
            colorIcon={'gray'}
            likes={['vfdsvfd', 'vfdvfd']}
          />
          <Views views={5} color={'gray'} />
          <PreviewComments postId={'vfdvf'} />
          <IconButton aria-label="share" sx={{ color: 'gray' }}>
            <Share />
          </IconButton>
          <IconButton
            aria-label="share"
            sx={{ marginLeft: 'auto', color: 'gray' }}
            onClick={handleOpenMenu}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Редагувати локацію</MenuItem>
            <MenuItem onClick={handleCreatePost}>Додати матеріал</MenuItem>
          </Menu>
        </Stack>
      </Box>
      <Stack
        spacing={2}
        padding="0 20px 20px"
        sx={{ borderBottom: '1px solid grey' }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          {location.isType}
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="text.secondary">
          {location.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {location.small_text}
        </Typography>
        {location.linkToPost && (
          <Button
            onClick={() => handlePost(location.linkToPost)}
            variant="outlined"
          >
            Детальніше
          </Button>
        )}
      </Stack>
      <Stack spacing={2} padding="20px 20px 0">
        <Stack spacing={1} direction="row">
          <LocationOn color="primary" />
          <Typography variant="subtitle2" color="text.secondary">
            {location.address}
          </Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          <MyLocation color="primary" />
          <Typography variant="subtitle2" color="text.secondary">
            {`${location.latitude}, ${location.longitude}`}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default LocationComponent
