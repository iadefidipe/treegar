import styled, { css } from "styled-components"

const baseStyles = css`
  color: ${(props) => props.theme.colors.pryWhite};
  font-family: ${(props) => props.theme.font.redHat};
  transition: color 0.3s;
`

export const Heading1 = styled.h1`
  ${baseStyles}
  font-size: 2.25rem;
  line-height: 2.9375rem;
  font-weight: ${(props) => props.theme.weight.bold};

  @media (min-width: 768px) {
    font-size: 2.875rem;
    line-height: 3.75rem;
  }
`

export const Heading2 = styled.h2`
  ${baseStyles}
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.weight.mid};

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`

export const Heading3 = styled.h3`
  ${baseStyles}
  font-size: 1.375rem;
  font-weight: ${(props) => props.theme.weight.semiBold};

  @media (min-width: 768px) {
    font-size: 2.55rem;
  }
`

export const Heading4 = styled.h4`
  ${baseStyles}
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.weight.semiBold};
  /* line-height: 60px; */

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`
export const Heading5 = styled.h5`
  ${baseStyles}
  font-size: 1.25rem;
  font-weight: ${(props) => props.theme.weight.mid};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

export const Heading6 = styled.h6`
  font-size: 1.0625rem;
  line-height: auto;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`
