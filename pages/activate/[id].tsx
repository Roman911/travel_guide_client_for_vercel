import type { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import { Container, Typography } from '@mui/material'
import { useActions } from '../../hooks'
import { MainLayout } from '../../modules'
import { USER_ACTIVATION } from '../../apollo/queries/user'

const isOk = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom component="div" marginTop={10}>
        Реєстрація пройшла успішно, перед Вами відкриваються нові можливості!
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        {/*Вітаю {data.activate?.user?.name}!*/}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Вітаю з реєстрацією на travelguide, який є місцем зустрічі людей які
        неможуть уявити своє життя без подорожей.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Заповнюйте інформацію про себе http://travelguide.space/user,
        завантажуйте свою аватару та поділіться своїми цікавими локаціями
        http://travelguide.space/create-location, та стаєте новим учасником
        спільноти travelguide.space.
      </Typography>
      <Typography variant="body1" gutterBottom>
        А якщо виникнуть питання, уточнення чи побажання, пишіть мені.
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Я з радістю відповім.
      </Typography>
      <Typography variant="body1" gutterBottom>
        roma-lysyk@ukr.net
      </Typography>
    </>
  )
}

const isNotOk = (link: string | string[] | undefined) => {
  return (
    <Typography variant="h4" gutterBottom component="div" marginTop={10}>
      {link}
    </Typography>
  )
}

const Activate: NextPage = () => {
  const router = useRouter()
  const activationLink = router.query.id
  const [activation, { data, error, loading }] = useLazyQuery(USER_ACTIVATION)
  const { addUserData } = useActions()

  React.useEffect(() => {
    if (activationLink) {
      activation({ variables: { activationLink } })
    }
  }, [activationLink])

  React.useEffect(() => {
    if (data) {
      addUserData(data.activate)
      localStorage.setItem('userData', JSON.stringify({ ...data.activate }))
    }
  }, [data])

  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ minHeight: 'calc(100vh - 260px)' }}>
        {data ? isOk() : isNotOk(activationLink)}
      </Container>
    </MainLayout>
  )
}

export default Activate
