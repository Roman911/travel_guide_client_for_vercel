import React from 'react'
import { Box, Grid, Link, Typography } from '@mui/material'
import { useTypedSelector } from '../../../../hooks'
import { Logo } from '../../../'
import { SocSetBlock } from '../../../../Components'

const socials = {
  facebook: 'facebook',
  instagram: 'instagram',
  twitter: 'twitter',
  youtube: 'youtube',
  telegram: 'telegram',
}

const Footer: React.FC = () => {
  const { theme } = useTypedSelector(state => state.layout)

  console.log('render: Components, Footer')

  return (
    <Box p={2}>
      <Grid
        container
        alignItems="center"
        sx={{
          flexDirection: {
            xs: 'column-reverse',
            sm: 'column-reverse',
            md: 'row',
          },
        }}
      >
        <Grid item xs={12} sm={12} md={6} p={1}>
          <Box marginBottom={2}>
            <Link
              href="#"
              variant="body2"
              underline="none"
              color={
                theme === 'dark'
                  ? 'rgba(255, 255, 255, 0.6)'
                  : 'rgba(0, 0, 0, 0.6)'
              }
            >
              Про нас
            </Link>
          </Box>
          <Typography variant="body2" sx={{ fontSize: 10 }}>
            © 2019 Codeguida.com. При використанні матеріалів зворотнє посилання
            на сайт обов&apos;язкове
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} p={1}>
          <SocSetBlock socials={socials} color="gray" jc="flex-end" />
        </Grid>
      </Grid>
      <Box
        textAlign="center"
        sx={{
          marginTop: '30px',
          marginBottom: { xs: '50px', sm: '50px', md: '0px' },
        }}
      >
        <Logo />
      </Box>
    </Box>
  )
}

export default React.memo(Footer)
