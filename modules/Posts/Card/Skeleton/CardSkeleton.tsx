import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
} from '@mui/material'

interface IProps {
  md?: number
}

const CardSkeleton: React.FC<IProps> = ({ md }) => {
  return (
    <Grid item xs={12} sm={6} md={md ? md : 3} p={1}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          }
          title={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          }
          subheader={<Skeleton animation="wave" height={10} width="40%" />}
        />
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        <CardContent>
          <Skeleton animation="wave" height={15} style={{ margin: '6px 0' }} />
          <Skeleton animation="wave" height={15} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={15} width="70%" />
        </CardContent>
        <Box width="100%" padding="0 15px" style={{ marginTop: '-15px' }}>
          <Skeleton
            animation="wave"
            height={10}
            width="40%"
            style={{ margin: '15px 0 5px' }}
          />
          <Skeleton
            animation="wave"
            height={10}
            width="40%"
            style={{ marginBottom: 10 }}
          />
        </Box>
      </Card>
    </Grid>
  )
}

export default CardSkeleton
