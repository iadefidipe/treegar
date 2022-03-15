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
export const NavLinks = styled.div`
  display: flex;
  position: relative;
  gap: 1.25rem;

  & div:first-of-type {
    display: none;
  }

  @media (min-width: 768px) {
    gap: 5rem;

    & div:first-of-type {
      display: block;
    }
  }
`

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
`
export const NavLinkWrap = styled.div`
  &:hover {
    &::after {
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.accent};
      height: 3px;
      width: 30px;
      border-radius: 1px;
      top: 25px;
    }
  }

  &:first-of-type {
    &::after {
      transform: translateX(-42px);
    }
  }

  &:nth-of-type(2) {
    &::after {
      transform: translateX(-39px);
    }
  }

  &:last-of-type {
    &::after {
      transform: translateX(-32px);
    }
  }
`
