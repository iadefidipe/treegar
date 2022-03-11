import React from "react"
import Styled, { ThemeProvider } from "styled-components"
import theme from "../data/theme"
import Header from "./Header/Header"
import GlobalStyles from "../styles/GlobalStyles"

function Layout({children}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
    </ThemeProvider>
  )
}

export default Layout
