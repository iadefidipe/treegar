import styled from "styled-components"
import { Heading2, Heading6 } from "./shared/Headings"
import { fontStyleB } from "./shared/typography"
import { BorderButton } from "./shared/Buttons"
import { maxWidth } from "./shared/BaseStyles"


const Wrapper = styled.section`
${maxWidth}
  padding: 100px 21px;

  & > *:not(:last-child) {
    margin-bottom: 25px;
  }

  @media (min-width: 768px) {
    text-align: center;
  }
`
const SectionHeader = styled(Heading2)``
const SubHeader = styled(Heading6)`
  & > span {
    color: ${(props) => props.theme.colors.shade};
  }
`
const SectionText = styled.p`
  ${fontStyleB}
`
const AboutWrap = styled.div`

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    width: 80%;
 margin: 0 auto ;
    & p {
      display: inline;
      padding-right: 1px;
    }
  }
`

const Button = styled(BorderButton)``

function About() {
  return (
    <Wrapper>
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
          financial markets in the most seamless and cost effective way possible
          to Africans.
        </SectionText>
      </AboutWrap>
      <Button> Sign me up! </Button>
    </Wrapper>
  )
}

export default About