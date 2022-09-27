import type { NextPage } from 'next'
import React from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { useLazyQuery, useMutation } from '@apollo/client'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Redirect from '../../hooks/useRedirect'
import { useActions, useTypedSelector } from '../../hooks'
import { MainLayout, SettingsContainer } from '../../modules'
import { USER } from '../../apollo/queries/user'
import { UPDATE_USER } from '../../apollo/mutations/user'

export enum types {
  NAME = 'name',
  ABOUT_MY = 'aboutMy',
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  YOUTUBE = 'youtube',
  TELEGRAM = 'telegram',
}

const schema = yup.object().shape({
  name: yup.string().required('Поле не може бути пустим'),
})

interface IFormInput {
  name: string
  aboutMy: null | string
  facebook: null | string
  instagram: null | string
  twitter: null | string
  youtube: null | string
  telegram: null | string
}

const defaultValues = {
  name: '',
  aboutMy: '',
  facebook: '',
  instagram: '',
  twitter: '',
  youtube: '',
  telegram: '',
}

const Settings: NextPage = () => {
  const { userData, refreshToken } = useTypedSelector(state => state.user)
  const methods = useForm<IFormInput>({
    mode: 'onTouched',
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit, setError, setValue } = methods
  const [user, { loading, error, data }] = useLazyQuery(USER)
  const [
    updateUser,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_USER)
  const { changeLinearProgress, addUserData, addedNotification } = useActions()

  React.useEffect(() => {
    if (userData) user({ variables: { userID: userData._id } })
  }, [userData])
  React.useEffect(() => {
    if (data) {
      setValue(`${types.NAME}`, data.user.name)
      setValue(`${types.ABOUT_MY}`, data.user.aboutMy)
      setValue(`${types.FACEBOOK}`, data.user.socials.facebook)
      setValue(`${types.INSTAGRAM}`, data.user.socials.instagram)
      setValue(`${types.TWITTER}`, data.user.socials.twitter)
      setValue(`${types.YOUTUBE}`, data.user.socials.youtube)
      setValue(`${types.TELEGRAM}`, data.user.socials.telegram)
    }
  }, [data])

  const onSubmit: SubmitHandler<IFormInput> = value => {
    updateUser({
      variables: {
        input: {
          token: refreshToken,
          name: value.name,
          aboutMy: value.aboutMy,
          socials: {
            facebook: value.facebook,
            instagram: value.instagram,
            twitter: value.twitter,
            youtube: value.youtube,
            telegram: value.telegram,
          },
        },
      },
    })
  }

  React.useEffect(() => {
    if (updateLoading) {
      changeLinearProgress(true)
    }
    if (updateError) {
      addedNotification({
        message: 'Щось пішло нетак',
        key: `${new Date().getTime()}+${Math.random()}`,
      })
      changeLinearProgress(false)
    }
    if (updateData) {
      addUserData(updateData.updateUser)
      localStorage.setItem(
        'userData',
        JSON.stringify({ ...updateData.updateUser })
      )
      addedNotification({
        message: 'Інформація оновленна',
        key: `${new Date().getTime()}+${Math.random()}`,
      })
    }
  }, [updateError, updateLoading, updateData])

  if (!userData) return <Redirect href="/" />
  if (updateData) return <Redirect href={'/'} />

  return (
    <MainLayout>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SettingsContainer userData={userData} />
        </form>
      </FormProvider>
    </MainLayout>
  )
}

export default Settings
