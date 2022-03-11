import styled from "styled-components"
import Image from "next/image"
import Logo from "../shared/Logo"
import Nav from "./Nav"

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 20px 48px 20px;

  &>div:first-child{
    flex: 1 83px ;
  }
`

function Header() {
  return (
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  )
}

export default Header
