import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'
import Header from '../components/common/Header'
import theme from '../assets/theme'

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{...theme.box.variant_container}}>
            <Header />
            Contact
        </Box>
    </ThemeProvider>
  )
}
