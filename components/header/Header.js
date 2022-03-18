import styled from "styled-components"
import Image from "next/image"
import Logo from "../shared/Logo"
import Nav from "./Nav"
import { maxWidth, InnerWrapper } from "../shared/BaseStyles"
import {useState, useEffect} from 'react' 
import { useRouter } from "next/router"

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
  // const router = useRouter()
  // const [route, setRoute] = useState(null)

  // useEffect( ( ) => {

  //   const handleRouteChange = (url, { shallow }) => {
  //     if(url )
  //   }

  // },[route] )
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
