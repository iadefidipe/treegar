import styled from "styled-components"
import { Heading1, Heading2 } from "../components/shared/Headings"
import { fontRegular } from "../components/shared/typography"
import { IconButton } from "../components/shared/Buttons"

const Wrapper = styled.main`
  text-align: center;
  display: grid;
  gap: 50px;
  margin-top: 150px;
  padding: 100px 0;

  @media (min-width: 768px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat right 380px`};
  }
`

const MainText = styled(Heading1)``
const SecText = styled(Heading2)`
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 31px;
  & > span {
    color: ${(props) => props.theme.colors.accent};
  }
`
const PlainText = styled.p`
  display: grid;
  gap: 50px;

  ${fontRegular}
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 13px;
`
const TextWrap = styled.div`
  display: grid;
  gap: 20px;
`

const Button = styled(IconButton)``
function Getapp() {
  return (
    <Wrapper>
      <MainText>Hey there!👋</MainText>
      <TextWrap>
        <SecText>
          Get started with <br /> <span>treegar</span> in seconds
        </SecText>
        <PlainText>Tap on an icon to get started</PlainText>
      </TextWrap>
      <ButtonWrap>
        <Button play />

        <Button />
      </ButtonWrap>
    </Wrapper>
  )
}

export default Getapp
