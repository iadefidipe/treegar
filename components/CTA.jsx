import styled from "styled-components"
import { Heading1, Heading2, Heading3 } from "./shared/Headings"
import { fontStyleB } from "./shared/typography"
import { IconButton } from "./shared/Buttons"

const Wrapper = styled.section`
  /* text-align: center; */

  display: grid;
  gap: 50px;
  padding: 100px 21px;
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

const SubHeader = styled(Heading3)`
  & > span {
    color: ${(props) => props.theme.colors.shade};
  }
`
const SectionHeader = styled(Heading2)`
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 31px;
`
const PlainText = styled.p`
  display: grid;
  gap: 50px;

  ${fontStyleB}
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: start;
  gap: 13px;
  @media (min-width: 768px) {
    justify-content: center;
  }
`
const TextWrap = styled.div`
  display: grid;
  gap: 20px;
`
const Button = styled(IconButton)``

export default function CTA() {
  return (
    <Wrapper>
      <SectionHeader>Scared Of Investing?</SectionHeader>
      <TextWrap>
        <SubHeader>
          <span>Pull the treegar</span> on your fears!
        </SubHeader>
        <PlainText>
          Invest in the future and grow your personal finances in under 5
          minutes. Starting with just $1.
        </PlainText>

        <PlainText>
          Download the app and start your investing journey now.
        </PlainText>
      </TextWrap>
      <ButtonWrap>
        <Button play />
        <Button />
      </ButtonWrap>
    </Wrapper>
  )
}
