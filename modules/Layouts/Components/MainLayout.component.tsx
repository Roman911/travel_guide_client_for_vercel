import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { Header } from '../'
import { BottomNavigation, Drawer, Footer, PreviewImage } from '../'

interface IProps {
  children?: React.ReactNode
  img?: string
}

const MainLayoutComponent: React.FC<IProps> = ({ children, img }) => {
  //const callback = (id: any, phase: any, actualTime: any, baseTime: any, startTime: any, commitTime: any) => {
  //console.log(`${id}'s ${phase} phase:`);
  //console.log(`Actual time: ${actualTime}`);
  //console.log(`Base time: ${baseTime}`);
  //console.log(`Start time: ${startTime}`);
  //console.log(`Commit time: ${commitTime}`);
  //}

  return (
    <Box>
      <Header />
      {img && (
        <PreviewImage img={img}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              mr: 10,
              transform: 'translateY(-50%)',
            }}
          >
            <Paper elevation={6} sx={{ p: 2, opacity: 0.9 }}>
              <Typography variant="h2" textAlign="end">
                У нас:
              </Typography>
              <Typography variant="h3" textAlign="end">
                327 локацій
              </Typography>
              <Typography variant="h4" textAlign="end">
                і 124 маршрути
              </Typography>
            </Paper>
          </Box>
        </PreviewImage>
      )}
      {children}
      <Footer />
      <Drawer />
      <BottomNavigation />
    </Box>
  )
}

export default MainLayoutComponent
