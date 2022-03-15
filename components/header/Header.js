import styled from "styled-components"
import Image from "next/image"
import Logo from "../shared/Logo"
import Nav from "./Nav"
import { maxWidth, InnerWrapper } from "../shared/BaseStyles"

const Wrapper = styled.header`
  ${maxWidth}
`
const HeaderContainer = styled(InnerWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0;

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
