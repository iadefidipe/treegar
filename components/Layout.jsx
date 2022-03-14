import React from "react"
import Styled, { ThemeProvider } from "styled-components"
import theme from "../data/theme"
import Header from "./Header/Header"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"

function Layout({children}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
