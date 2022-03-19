import styled from "styled-components"
import { Heading1, Heading2, Heading3, Heading4 } from "../shared/Headings"
import { fontRegular } from "../shared/typography"
import { IconButton } from "../shared/Buttons"
import { maxWidth, InnerWrapper } from "../shared/BaseStyles"

export const Wrapper = styled.section`
  ${maxWidth}
  padding-top: 150px;

  background: ${(props) =>
    `url(${props.theme.bg.bgBeastTwo.src}) no-repeat 200px 50px`};
  @media (min-width: 400px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgBeastTwo.src}) no-repeat 250px 50px`};
  }
  @media (min-width: 422px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgBeastTwo.src}) no-repeat 300px 50px`};
  }
  @media (min-width: 458px) {
    background: none;
  }
  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 150px;
    text-align: center;
    background: ${(props) =>
      `url(${props.theme.bg.bgBeast.src}) no-repeat -30px -50px `};
  }
`

export const CTAContainer = styled(InnerWrapper)`
  display: grid;
  gap: 50px;
  padding: 0 20px 100px 20px;
`

export const SubHeader = styled(Heading4)`
  & > span {
    color: ${(props) => props.theme.colors.shade};
  }
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`
export const SectionHeader = styled(Heading2)`
  line-height: 31px;
`
export const SectionText = styled.p`
  display: grid;
  gap: 50px;
  opacity: 0.8;
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
