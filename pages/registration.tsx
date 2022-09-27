import React from 'react'
import type { NextPage } from 'next'
import { useMutation } from '@apollo/client'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { useActions } from '../hooks'
import { AuthLayout, RegistrationForm } from '../modules'
import { REGISTRATION } from '../apollo/mutations/registration'
import Redirect from '../hooks/useRedirect'

export enum types {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password',
  PASSWORD_CONFIRMATION = 'passwordConfirmation',
}

const schema = yup.object().shape({
  name: yup.string().required('Поле не може бути пустим'),
  email: yup
    .string()
    .required('Поле не може бути пустим')
    .email('Некоректний емейл'),
  password: yup.string().required().min(6, 'Мінімум 6 символів'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Не співпадає пароль'),
})

interface IFormInput {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const defaultValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

const Registration: NextPage = () => {
  const [config, setConfig] = React.useState({
    isDisabled: false,
    showPassword: false,
  })
  const { addedNotification, changeLinearProgress } = useActions()
  const [registration, { data, loading, error }] = useMutation(REGISTRATION)
  const methods = useForm<IFormInput>({
    mode: 'onTouched',
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit, setError } = methods

  const handleClickShowPassword = () =>
    setConfig({ ...config, showPassword: !config.showPassword })

  const onSubmit: SubmitHandler<IFormInput> = data => {
    setConfig({ ...config, isDisabled: true })
    const { email, name, password } = data
    registration({ variables: { input: { name, email, password } } })
  }

  React.useEffect(() => {
    if (loading) {
      changeLinearProgress(true)
    }
    if (error) {
      addedNotification({
        message: 'Користувач з таким емейлом уже зараєстрований',
        key: `${new Date().getTime()}+${Math.random()}`,
      })
      setError(types.NAME, { type: 'custom', message: 'error' })
      setError(types.EMAIL, { type: 'custom', message: 'error' })
      setError(types.PASSWORD, { type: 'custom', message: 'error' })
      setError(types.PASSWORD_CONFIRMATION, {
        type: 'custom',
        message: 'error',
      })
      setConfig({ ...config, isDisabled: false })
      changeLinearProgress(false)
    }
    if (data) {
      addedNotification({
        message: 'Ви успішно зареєструвалися!',
        key: `${new Date().getTime()}+${Math.random()}`,
      })
      changeLinearProgress(true)
    }
  }, [error, loading, data])

  if (data) return <Redirect href={'/activate'} />

  return (
    <AuthLayout
      title="Реєстрація"
      bottomText="Реєструючись"
      subtitle={{ title: 'Вже є акаунт?', btn: 'Вхід', link: '/login' }}
    >
      <FormProvider {...methods}>
        <Box
          component="form"
          maxWidth="360px"
          margin="auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <RegistrationForm
            config={config}
            handleClickShowPassword={handleClickShowPassword}
          />
        </Box>
      </FormProvider>
    </AuthLayout>
  )
}

export default Registration
