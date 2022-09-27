import React from 'react'
import { Stack, Typography } from '@mui/material'

const PostsSortComponent: React.FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      spacing={2}
      marginRight={2}
    >
      <Typography variant="body2">Сортувати за популярністю</Typography>
      <Typography variant="body2">За тиждень | місяць | рік</Typography>
    </Stack>
  )
}

export default PostsSortComponent
