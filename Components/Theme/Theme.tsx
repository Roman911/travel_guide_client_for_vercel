import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useTypedSelector } from '../../hooks'

type Props = {
  children?: React.ReactNode
}

export const Theme: React.FC<Props> = ({ children }) => {
  const { theme: myTheme } = useTypedSelector(state => state.layout)

  const theme = createTheme({
    palette: {
      mode: myTheme,
      secondary: {
        main: '#cb2c3b',
      },
      success: {
        main: '#a5a5a5',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1120,
        xl: 1536,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
