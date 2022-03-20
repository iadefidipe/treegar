import styled from "styled-components"
import { Heading2, Heading3 } from "./shared/Headings"
import { fontRegular } from "./shared/typography"
import { BorderButton } from "./shared/Buttons"
import { InnerWrapper, maxWidth } from "./shared/BaseStyles"
import Link from "next/link"

const Wrapper = styled.section`
  ${maxWidth}
`

const SectionContainer = styled(InnerWrapper)`
  padding: 100px 21px;

  & > *:not(:last-child) {
    margin-bottom: 35px;
  }

  @media (min-width: 768px) {
    text-align: center;
  }
`
const SectionHeader = styled(Heading2)``
const SubHeader = styled(Heading3)`
  & > span {
    color: ${(props) => props.theme.colors.shade};
  }
  @media (min-width: 768px) {
    line-height: 40px;
  }
`
const SectionText = styled.p`
  opacity: 0.8;
  ${fontRegular}
`
const AboutWrap = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
    & p {
      display: inline;
      padding-right: 1px;
    }
  }
`

const Button = styled(BorderButton)`
  padding: 11.5px 27px;
  @media (min-width: 768px) {
    padding: 17px 58.5px;
  }
`

function About() {
  return (
    <Wrapper>
      <SectionContainer>
        <SectionHeader> Who we are </SectionHeader>
        <AboutWrap>
          <SubHeader>
            A <span>Global Investment</span> Platform for everyone
          </SubHeader>
          <SectionText>
            Treegar is a fintech platform that enable you to buy and sell local
            and U.S stocks directly from your mobile phone in real-time.
          </SectionText>
          <SectionText>
            We want to further democratize access to both local and foreign
            financial markets. Our mission is to provide access to global
            financial markets in the most seamless and cost effective way
            possible to Africans.
          </SectionText>
        </AboutWrap>
        <Link href='/getapp' passHref>
          <Button> Sign me up! </Button>
        </Link>
      </SectionContainer>
    </Wrapper>
  )
}

export default About
