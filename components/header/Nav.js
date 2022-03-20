import pageData from "../../data/pageData"
import Link from "next/link"
import { Button } from "../shared/Buttons"
import { Wrapper, NavLinks, NavLink, NavLinkWrap } from "./Nav.style"
import { useRouter } from "next/router"

function Nav() {
  const router = useRouter()
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
      <Link href='/getapp' passHref>
        <Button color grey={router.pathname === "/Getapp"}>
          Get the app
        </Button>
      </Link>
    </Wrapper>
  )
}

export default Nav
