import React from 'react'
import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  styled,
} from '@mui/material'
import { NotificationsOutlined, Search } from '@mui/icons-material'
import { blue, grey } from '@mui/material/colors'
import { Avatar, Logo } from '../../..'
import { linksConfig } from '../config/config'
import { MaterialUISwitch } from './MaterialUISwitch'

type Props = {
  theme: 'light' | 'dark'
  pathname: string
  handleClick: (path: string) => void
  handleClickUser: () => void
  changeSetTheme: () => void
  userData: null | {
    name: string
    email: string
    avatar?: string
  }
}

const HeaderComponent: React.FC<Props> = ({
  theme,
  pathname,
  userData,
  handleClick,
  handleClickUser,
  changeSetTheme,
}) => {
  const UnderLine = styled('span')(({ theme }) => ({
    borderBottom: `2px solid ${blue[700]}`,
    position: 'absolute',
    width: '100%',
    top: 48,
  }))

  const links = linksConfig.map(i => {
    return (
      <Button
        key={i.path}
        sx={{ color: grey[theme === 'dark' ? 50 : 800] }}
        onClick={() => handleClick(i.path)}
      >
        {i.title}
        {pathname === i.path && <UnderLine />}
      </Button>
    )
  })

  console.log('render: module Header, Components, HeaderComponent')

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme === 'dark' ? '#1A2027' : '#fff',
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Box sx={{ paddingRight: 1, flexGrow: { xs: 1, sm: 1, md: 0 } }}>
          <Logo />
        </Box>
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }}
        >
          {links}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button
            size="small"
            sx={{
              textTransform: 'none',
              display: { xs: 'none', sm: 'none', md: 'flex' },
            }}
            variant="outlined"
            endIcon={<Search />}
          >
            <Typography component="span" style={{ marginRight: 20 }}>
              Пошук...
            </Typography>
          </Button>
          <FormControlLabel
            onClick={changeSetTheme}
            control={<MaterialUISwitch checked={theme === 'dark'} />}
            label=""
          />
          <IconButton aria-label="fingerprint">
            <NotificationsOutlined />
          </IconButton>
          <IconButton sx={{ p: 0 }} onClick={handleClickUser}>
            <Avatar size={34} userData={userData} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default React.memo(HeaderComponent)
