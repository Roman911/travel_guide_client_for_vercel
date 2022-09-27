import React from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Dialog,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
} from '@mui/material'
import { Close, Home, Search, Menu } from '@mui/icons-material'
import { Logo } from '../../..'

type Props = {
  isOpen: boolean
  handleClick: () => void
}

const BottomNavigationComponent: React.FC<Props> = ({
  isOpen,
  handleClick,
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
        <BottomNavigation
          showLabels
          //value={value}
          //onChange={(event, newValue) => {setValue(newValue)}}
        >
          <BottomNavigationAction label="Головна" icon={<Home />} />
          <BottomNavigationAction label="Пошук" icon={<Search />} />
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
          <ListItem button sx={{ justifyContent: 'center', fontSize: 22 }}>
            Новини
          </ListItem>
          <ListItem button sx={{ justifyContent: 'center', fontSize: 22 }}>
            Мапа
          </ListItem>
          <ListItem button sx={{ justifyContent: 'center', fontSize: 22 }}>
            Маршрути
          </ListItem>
          <ListItem button sx={{ justifyContent: 'center', fontSize: 22 }}>
            Про нас
          </ListItem>
        </List>
      </Dialog>
    </Box>
  )
}

export default BottomNavigationComponent
