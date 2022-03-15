import styled from "styled-components"
import { Heading1, Heading2, Heading3 } from "../shared/Headings"
import { fontRegular } from "../shared/typography"
import { IconButton } from "../shared/Buttons"
import { maxWidth, InnerWrapper } from "../shared/BaseStyles"

export const Wrapper = styled.section`
${maxWidth}
  /* text-align: center; */

  
  background: ${(props) =>
    `url(${props.theme.bg.bgBeast.src}) no-repeat 250px -150px`};
  @media (min-width: 515px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgBeast.src}) no-repeat 350px -150px`};
  }
  @media (min-width: 768px) {
    text-align: center;
    background: ${(props) =>
      `url(${props.theme.bg.bgBeast.src}) no-repeat left center`};
  }
`

export const CTAContainer = styled(InnerWrapper)`
display: grid;
  gap: 50px;
  padding: 100px 20px;
`

export const SubHeader = styled(Heading3)`
  & > span {
    color: ${(props) => props.theme.colors.shade};
  }
`
export const SectionHeader = styled(Heading2)`
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 31px;
`
export const SectionText = styled.p`
  display: grid;
  gap: 50px;
  ${fontRegular}
`
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: start;
  gap: 13px;
  @media (min-width: 768px) {
    justify-content: center;
  }
`
export const TextWrap = styled.div`
  display: grid;
  gap: 20px;
`
export const Button = styled(IconButton)``
