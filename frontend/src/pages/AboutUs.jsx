import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'
import React from 'react'
import theme from '../assets/theme'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{...theme.box.variant_container}}>
            <Header />
            ABOUT US
            <Footer />
        </Box>
    </ThemeProvider>
  )
}
