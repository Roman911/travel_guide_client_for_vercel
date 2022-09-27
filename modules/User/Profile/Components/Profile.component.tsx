import type { IUserProfile } from '../../../../types/user'
import React from 'react'
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { Rating, SocSetBlock } from '../../../../Components'
import { Avatar } from '../../'

interface IProps {
  isHolder: boolean
  user: IUserProfile
  handleClickToSettings: () => void
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const ProfileComponent: React.FC<IProps> = ({
  isHolder,
  user,
  handleClickToSettings,
}) => {
  const [value, setValue] = React.useState(0)
  const { name, aboutMy, rating, socials } = user

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="lg">
      <Box marginTop={14}>
        <Paper
          elevation={0}
          sx={{ background: 'hsla(0,0%,89.8%,.25)', padding: '30px 40px' }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row">
              <Avatar userData={user} size={140} />
              <Box marginLeft={3}>
                <Typography variant="h5" marginTop={1} marginBottom={1}>
                  {name}
                </Typography>
                <Rating rating={rating} />
                {aboutMy && (
                  <Typography variant="body2" marginTop={2}>
                    {aboutMy}
                  </Typography>
                )}
              </Box>
            </Stack>
            <Stack alignItems="flex-end" justifyContent="space-between">
              {isHolder && (
                <Button
                  onClick={handleClickToSettings}
                  variant="contained"
                  color="secondary"
                >
                  Налаштування
                </Button>
              )}
              <SocSetBlock color="fullcolor" socials={socials} />
            </Stack>
          </Stack>
        </Paper>
        <Box marginTop={10}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab label="Обране" {...a11yProps(0)} />
              <Tab label="Мої статті" {...a11yProps(1)} />
              <Tab label="Мої маршрути" {...a11yProps(2)} />
              <Tab label="Чорновики" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box>1231</Box>
        </Box>
      </Box>
    </Container>
  )
}

export default ProfileComponent
