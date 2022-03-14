import { css } from "styled-components"

const baseStyles = css`
  font-family: "Red Hat Text", sans-serif;
  transition: color 0.3s;
  color: ${(props) => props.theme.colors.pryWhite};
`

export const fontStyleA = css`
  ${baseStyles}
  font-size: 1.25rem;
`

export const fontStyleB = css`
  ${baseStyles}
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secGrey};

`
export const buttonText = css`
  ${baseStyles}
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: 1.125rem;
`

export const navText = css`
  ${baseStyles}
  font-size:  1rem;
  line-height: 1rem;
  font-weight: ${(props) => props.theme.weight.mid};
`

export const footerText = css`
  ${baseStyles}
  font-size:  0.8125rem;
  line-height: 1.5rem;
  font-weight: ${(props) => props.theme.weight.regular};
  color: ${(props) => props.theme.colors.secGrey};
`
