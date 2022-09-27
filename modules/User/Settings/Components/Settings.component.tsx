import React from 'react'
import type { IUserData } from '../../../../types'
import {
  Badge,
  Container,
  Grid,
  Paper,
  Typography,
  styled,
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { Avatar } from '../../'
import { Dialog, Form } from '../'

interface IProps {
  userData: null | IUserData
}

const SettingsComponent: React.FC<IProps> = ({ userData }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const MyIcon = styled(PhotoCamera)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    width: 34,
    height: 34,
    border: `2px solid ${theme.palette.background.paper}`,
    borderRadius: '50%',
    padding: '3px',
  }))

  return (
    <Container maxWidth="lg">
      <Typography
        marginTop={10}
        textTransform="uppercase"
        variant="h2"
        sx={{ fontSize: { xs: '2rem', sm: '2.75rem', md: '3.75rem' } }}
      >
        Налаштування
      </Typography>
      <Paper elevation={6} sx={{ padding: 4 }}>
        <Typography
          variant="body1"
          textTransform="uppercase"
          marginBottom={4}
          sx={{
            borderBottom: '1px solid hsla(0,0%,89.8%,.8)',
            paddingBottom: 2,
          }}
        >
          Профіль
        </Typography>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={2}
            lg={2}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              sx={{ cursor: 'pointer' }}
              badgeContent={<MyIcon onClick={handleClickOpen} />}
            >
              <Avatar userData={userData} size={140} />
            </Badge>
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Form />
          </Grid>
        </Grid>
      </Paper>
      <Dialog isOpen={isOpen} handleClose={handleClose} />
    </Container>
  )
}

export default SettingsComponent
