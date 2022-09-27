import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { types } from '../../../../../../pages/registration'

type Props = {
  config: {
    isDisabled: boolean
    showPassword: boolean
  }
  handleClickShowPassword: () => void
}

const RegistrationForm: React.FC<Props> = ({
  config,
  handleClickShowPassword,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <Controller
        name={types.NAME}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Ваше ім'я"
            variant="standard"
            error={!!errors[types.NAME]}
            sx={{ width: '100%', margin: '5px 0' }}
          />
        )}
      />
      <Controller
        name={types.EMAIL}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Ел. пошта"
            variant="standard"
            error={!!errors[types.EMAIL]}
            sx={{ width: '100%', margin: '5px 0' }}
          />
        )}
      />
      <Controller
        name={types.PASSWORD}
        control={control}
        render={({ field }) => (
          <FormControl
            error={!!errors[types.PASSWORD]}
            {...field}
            sx={{ width: '100%', margin: '5px 0' }}
            variant="standard"
          >
            <InputLabel htmlFor={types.PASSWORD}>Пароль</InputLabel>
            <Input
              type={config.showPassword ? 'text' : types.PASSWORD}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {config.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      />
      <Controller
        name={types.PASSWORD_CONFIRMATION}
        control={control}
        render={({ field }) => (
          <FormControl
            error={!!errors[types.PASSWORD_CONFIRMATION]}
            {...field}
            sx={{ width: '100%', margin: '5px 0' }}
            variant="standard"
          >
            <InputLabel htmlFor={types.PASSWORD_CONFIRMATION}>
              Повторіть пароль
            </InputLabel>
            <Input
              type={config.showPassword ? 'text' : types.PASSWORD}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {config.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ width: '180px', marginTop: '20px' }}
        color="secondary"
        disabled={config.isDisabled}
      >
        Зареєструватися
      </Button>
    </>
  )
}

export default RegistrationForm
