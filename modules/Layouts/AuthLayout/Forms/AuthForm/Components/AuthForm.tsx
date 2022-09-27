import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { types } from '../../../../../../pages/login'

type Props = {
  config: {
    isDisabled: boolean
    showPassword: boolean
  }
  handleClickShowPassword: () => void
}

const AuthForm: React.FC<Props> = ({ config, handleClickShowPassword }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <>
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
      <Box sx={{ margin: '20px 0' }}>
        <FormControlLabel
          control={<Checkbox size="small" defaultChecked color="secondary" />}
          label="Запам'ятати мене"
        />
        <Link component="button" underline="none" variant="body2">
          Забули пароль?
        </Link>
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{ width: '140px' }}
        color="secondary"
        disabled={config.isDisabled}
      >
        Увійти
      </Button>
    </>
  )
}

export default AuthForm
