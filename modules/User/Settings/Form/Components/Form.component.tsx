import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Stack,
} from '@mui/material'
import {
  Instagram,
  Facebook,
  Telegram,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import { types } from '../../../../../pages/profile/settings'

const FormComponent: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <Controller
            name={types.NAME}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Ім'я"
                error={!!errors[types.NAME]}
                sx={{ width: '100%', margin: '5px 0 15px' }}
              />
            )}
          />
          <Controller
            name={types.ABOUT_MY}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Про себе"
                sx={{ width: '100%', margin: '5px 0 0' }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Controller
            name={types.FACEBOOK}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: '100%', margin: '5px 0 15px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Facebook sx={{ color: '#3b5998' }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name={types.TWITTER}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: '100%', margin: '5px 0 15px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Twitter sx={{ color: '#5ea9dd' }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name={types.INSTAGRAM}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: '100%', margin: '5px 0 15px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Instagram sx={{ color: '#fb3958' }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name={types.TELEGRAM}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: '100%', margin: '5px 0 15px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Telegram sx={{ color: '#0088CC' }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Controller
            name={types.YOUTUBE}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ width: '100%', margin: '5px 0 15px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <YouTube sx={{ color: '#FF0000' }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid>
      </Grid>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        marginTop={3}
      >
        <Link
          underline="none"
          sx={{
            marginRight: 3,
            color: 'rgba(48,51,53,.8)',
            transition: '300ms',
            ':hover': { color: '#cb2c3b' },
          }}
        >
          Повернутись до профілю
        </Link>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: '140px' }}
          color="secondary"
        >
          зберегти
        </Button>
      </Stack>
    </Box>
  )
}

export default FormComponent
