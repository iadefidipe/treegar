import pageData from "../../data/pageData"
import Link from "next/link"
import { Button } from "../shared/Buttons"
import { Wrapper, NavLinks, NavLink, NavLinkWrap } from "./Nav.style"

function Nav() {
  return (
    <Wrapper>
      <NavLinks>
        {pageData.navText.map((text, index) => (
          <NavLinkWrap key={index}>
            <Link href={text.link} passHref>
              <NavLink>{text.text}</NavLink>
            </Link>
          </NavLinkWrap>
        ))}
      </NavLinks>
      <Link href='/Getapp' passHref>
        <Button color={true} >Get the app</Button>
      </Link>
    </Wrapper>
  )
}

export default Nav
