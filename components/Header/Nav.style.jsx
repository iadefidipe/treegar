import styled from "styled-components"
import { navText } from "../shared/typography"

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 5rem;
  }
`
export const NavLinks = styled.div``

export const NavLink = styled.a`
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
