import React from "react"
import { Button, Stack } from '@mui/material'

type Props = {
  tags: string[]
}

export const Tags: React.FC<Props> = ({ tags }) => {
  return <Stack direction="row" spacing={1} marginTop={1}>
    {
      tags.map((i, index) => {
        return <Button key={index} size="small">{i}</Button>
      })
    }
  </Stack>
}