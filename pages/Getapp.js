import styled from "styled-components"
import { Heading1, Heading2 } from "../components/shared/Headings"
import { IconButton } from "../components/shared/Buttons"
import Head from "next/head"
import { maxWidth, InnerWrapper } from "../components/shared/BaseStyles"

const Wrapper = styled.main`
  ${maxWidth}
  height: 100vh;
  @media (min-width: 768px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat right 750px`};
  }
`

const MainText = styled(Heading1)``
const SecText = styled(Heading2)`
  margin: 0 auto;
  max-width: 400px;
  font-size: 1.6875rem;
  line-height: 31px;
  & > span {
    color: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 60px;
  }
`
const PageContainer = styled(InnerWrapper)`
  text-align: center;
  display: grid;
  gap: 50px;
  margin-top: 150px;
  padding: 100px 0;
`
const PlainText = styled.p`
  font-size: 1rem;

  opacity: 0.8;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
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
    <>
      <Head>
        <title> Treegar - Get App</title>
      </Head>
      <Wrapper>
        <PageContainer>
          <MainText>Hey there!👋</MainText>
          <TextWrap>
            <SecText>
              Get started with <span>treegar</span> in seconds
            </SecText>
            <PlainText>Tap on an icon to get started</PlainText>
          </TextWrap>
          <ButtonWrap>
            <Button play />
            <Button />
          </ButtonWrap>
        </PageContainer>
      </Wrapper>
    </>
  )
}

export default Getapp
