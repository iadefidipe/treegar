import styled from "styled-components"
import About from "../components/About"
import Feature from "../components/feature/Feature"

import CTA from "../components/cta/CTA"
import Invest from "../components/invest/Invest"
import Testimonial from "../components/testimonial/Testimonial"
import Hero from "../components/hero/Hero"
import Head from "next/head"

const Wrapper = styled.main``
const BgWrap = styled.div`
  @media (max-width: 500px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat 210px 380px`};
    background-size: 204.24px 274px;
  }

  @media (min-width: 768px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat 1000px 420px`};
    background-size: none;
  }
`

export default function Home() {
  return (
    <>
      <Head>
        <title> Treegar - Fintech Platform</title>
      </Head>
      <Wrapper>
        <BgWrap>
          <Hero />
          <Invest />
        </BgWrap>
        <About />
        <Feature />
        <Testimonial />
        <CTA />
      </Wrapper>
    </>
  )
}
