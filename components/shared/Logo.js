import React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/assets/logo-treegar.svg"
import styled from "styled-components"

const Wrapper = styled.div`
  min-width: 83px;
  margin-right: 15px;
`
const Logo = () => {
  return (
    <Wrapper>
      <Link href='/' passHref>
        <Image src={logo} alt='Treegar-logo' />
      </Link>
    </Wrapper>
  )
}

export default Logo
