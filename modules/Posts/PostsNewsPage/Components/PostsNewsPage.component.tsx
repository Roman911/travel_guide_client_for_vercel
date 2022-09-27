import React from 'react'
import { Grid, Pagination, PaginationItem, Stack } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { PostsSort } from '../'
import { Regions } from '../../../'

interface IProps {
  children: React.ReactNode
}

const PostsNewsPageComponent: React.FC<IProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={10} padding="10px 0">
        <PostsSort />
        {children}
        <Stack
          spacing={2}
          marginTop={4}
          direction="row"
          justifyContent="center"
        >
          <Pagination
            count={10}
            renderItem={item => (
              <PaginationItem
                components={{ previous: ArrowBack, next: ArrowForward }}
                {...item}
              />
            )}
          />
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Regions isMap={false} />
      </Grid>
    </Grid>
  )
}

export default PostsNewsPageComponent
