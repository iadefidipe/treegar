import styled from "styled-components"
import Image from "next/image"
import Logo from "../shared/Logo"
import Nav from "./Nav"
import { maxWidth, InnerWrapper } from "../shared/BaseStyles"

const Wrapper = styled.header`

  background-color: ${(props) => props.theme.colors.bg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`
const HeaderContainer = styled(InnerWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 21px;
  & > div:first-child {
    flex: 1 83px;
  }
`

function Header() {
  return (
    <Wrapper>
      <HeaderContainer>
        <Logo />
        <Nav />
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header
