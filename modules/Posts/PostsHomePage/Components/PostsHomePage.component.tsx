import React from 'react'
import { Container, Link, Stack, Typography } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material'

interface IProps {
  children: React.ReactNode
  linkTitle: string
  clickToNextPage: () => void
}

const PostHomePageComponents: React.FC<IProps> = ({
  children,
  linkTitle,
  clickToNextPage,
}) => {
  return (
    <>
      {children}
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
        marginTop={1}
        marginRight={3}
      >
        <Link
          onClick={clickToNextPage}
          variant="button"
          underline="none"
          sx={{ cursor: 'pointer' }}
        >
          <Stack flexDirection="row" alignItems="center">
            <Typography variant="subtitle2">{linkTitle}</Typography>
            <ArrowRightAlt />
          </Stack>
        </Link>
      </Stack>
    </>
  )
}

export default PostHomePageComponents
