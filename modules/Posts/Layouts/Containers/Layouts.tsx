import React from 'react'
import dynamic from 'next/dynamic'
import { Container, Typography } from '@mui/material'

interface IChildren {
  children: React.ReactNode
}

interface IProps extends IChildren {
  home: boolean
  layout: {
    title: string
    link?: string
    linkTitle?: string
  }
}

interface IPropsHomeLayout extends IChildren {
  link?: string
  linkTitle?: string
}

interface IPropsNewsLayout extends IChildren {}

const PostsHomePage = dynamic<IPropsHomeLayout>(
  () => import('../../PostsHomePage/Containers/PostsHomePage') as any
)
const PostsNewsPage = dynamic<IPropsNewsLayout>(
  () => import('../../PostsNewsPage/Containers/PostsNewsPage') as any
)

const Layouts: React.FC<IProps> = ({
  children,
  home,
  layout: { title, link, linkTitle },
}) => {
  const marginTop = home ? '0px' : '73px'
  return (
    <Container maxWidth="xl" sx={{ marginTop }}>
      <Typography variant="h2">{title}</Typography>
      {home ? (
        <PostsHomePage link={link} linkTitle={linkTitle}>
          {children}
        </PostsHomePage>
      ) : (
        <PostsNewsPage>{children}</PostsNewsPage>
      )}
    </Container>
  )
}

export default Layouts
