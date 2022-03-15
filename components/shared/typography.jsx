import styled, { css } from "styled-components"

const baseStyles = css`
  font-family: "Red Hat Text", sans-serif;
  transition: color 0.3s;
  color: ${(props) => props.theme.colors.pryWhite};
`

export const fontHero = styled.p`
  ${baseStyles}
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secGrey};
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

export const fontRegular = styled.p`
  ${baseStyles}
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secGrey};
`
export const buttonText = css`
  ${baseStyles}
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: 0.75rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export const navText = css`
  ${baseStyles}
  font-size:  0.75rem;
  line-height: 1rem;
  font-weight: ${(props) => props.theme.weight.mid};
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

export const fontName = styled.p`
  ${baseStyles}
  font-size:  1em;
  line-height: 2rem;
  font-weight: ${(props) => props.theme.weight.mid};
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

export const fontInvest = styled.p`
  ${baseStyles}
  font-size: 0.875rem;
  font-weight: ${(props) => props.theme.weight.mid};
  
`

export const fontProfit = styled.p`
  ${baseStyles}
  font-size: 1.4375rem;
  font-weight: ${(props) => props.theme.weight.bold};
  
`
