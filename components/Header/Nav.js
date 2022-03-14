import styled from "styled-components"
import pageData from "../../data/pageData"
import Link from "next/link"
import { Button } from "../shared/Buttons"
import { navText } from "../shared/typography"

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 5rem;
  }
`
const NavLinks = styled.div``

const NavLink = styled.a`
  ${navText}
  position: relative;
  cursor: pointer;

  &::after {
    position: absolute;
    background-color: red;
    height: 3px;
    width: 30px;
    border-radius: 1px;
    top: 10px;
  }

  &:not(:last-of-type) {
    margin-right: 1.25rem;
  }
  &:first-of-type {
    display: none;
  }

  @media (min-width: 768px) {
    &:first-of-type {
      display: inline;
    }
    &:not(:last-of-type) {
      margin-right: 5rem;
    }
  }
`

function Nav() {
  return (
    <Wrapper>
      <NavLinks>
        {pageData.navText.map((text, index) => (
          <Link href={text.link} passHref key={index}>
            <NavLink>{text.text}</NavLink>
          </Link>
        ))}
      </NavLinks>
      <Link href='/Getapp' passHref>
        <Button color>Get the app</Button>
      </Link>
    </Wrapper>
  )
}

export default Nav
