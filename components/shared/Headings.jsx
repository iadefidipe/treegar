import styled, { css } from "styled-components"

const baseStyles = css`
  color: ${(props) => props.theme.colors.pryWhite};
  font-family: ${(props) => props.theme.font.redHat};
  transition: color 0.3s;
`

export const Heading1 = styled.h1`
  ${baseStyles}
  font-size: 2.875rem;
  line-height: 3.75rem;
  font-weight: ${(props) => props.theme.weight.bold};
`

export const Heading2 = styled.h2`
  ${baseStyles}
  font-size: 2.25rem;
  font-weight: ${(props) => props.theme.weight.mid};
`

export const Heading3 = styled.h3`
  ${baseStyles}
  font-size: 1.375rem;
  font-weight: ${(props) => props.theme.weight.semiBold};
`

export const Heading4 = styled.h4`
  ${baseStyles}
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.weight.bold};
`
export const Heading5 = styled.h5`
  ${baseStyles}
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.weight.mid};
`
export const FooterHeading = styled.h2`
  ${baseStyles}
  font-size: 1.0625rem;
  font-weight: ${(props) => props.theme.weight.bold};
`

export const Heading6 = styled(Heading3)`
  font-size: 2.5rem;
  line-height: auto;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`
