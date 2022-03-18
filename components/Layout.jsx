import React from "react"
import Styled, { ThemeProvider } from "styled-components"
import theme from "../data/theme"
import Header from "./header/Header"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./footer/Footer"
import { useRouter } from "next/router"

function Layout({ children }) {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}

      {router.pathname === "/Getapp" ? null : <Footer />}
    </ThemeProvider>
  )
}

export default Layout
