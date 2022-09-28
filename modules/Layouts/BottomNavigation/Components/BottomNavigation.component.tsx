import React from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Dialog,
  IconButton,
  List,
  ListItem,
  Paper,
  Stack,
} from '@mui/material'
import { Close, Home, Search, Menu } from '@mui/icons-material'
import { Logo } from '../../..'

type Props = {
  isOpen: boolean
  handleClick: () => void
  handleClickRout: (rout: string) => void
}

const BottomNavigationComponent: React.FC<Props> = ({
  isOpen,
  handleClick,
  handleClickRout,
}) => {
  return (
    <Box>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: 'block', sm: 'block', md: 'none' },
        }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            onClick={() => handleClickRout('/')}
            label="Головна"
            icon={<Home />}
          />
          <BottomNavigationAction
            onClick={() => handleClickRout('/search')}
            label="Пошук"
            icon={<Search />}
          />
          <BottomNavigationAction
            onClick={handleClick}
            label="Меню"
            icon={<Menu />}
          />
        </BottomNavigation>
      </Paper>
      <Dialog
        fullScreen
        open={isOpen}
        //onClose={handleClose}
        //TransitionComponent={Transition}
      >
        <Stack direction="row" p={3}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClick}
            aria-label="close"
            size="large"
          >
            <Close fontSize="inherit" />
          </IconButton>
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Logo />
          </Box>
        </Stack>
        <List>
          <ListItem
            button
            onClick={() => handleClickRout('/posts')}
            sx={{ justifyContent: 'center', fontSize: 22 }}
          >
            Новини
          </ListItem>
          <ListItem
            button
            onClick={() => handleClickRout('/maps')}
            sx={{ justifyContent: 'center', fontSize: 22 }}
          >
            Цікаві місця
          </ListItem>
          <ListItem
            button
            onClick={() => handleClickRout('/trips')}
            sx={{ justifyContent: 'center', fontSize: 22 }}
          >
            Маршрути
          </ListItem>
          <ListItem
            button
            onClick={() => handleClickRout('/about')}
            sx={{ justifyContent: 'center', fontSize: 22 }}
          >
            Про нас
          </ListItem>
        </List>
      </Dialog>
    </Box>
  )
}

export default BottomNavigationComponent
