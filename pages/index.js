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
  @media (max-width: 393px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat 210px 235px`};
    background-size: 204.24px 274px;
  }

  @media (max-width: 425px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat 228px 230px`};
    background-size: 204.24px 274px;
  }

  @media (min-width: 1200px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat 1100px 450px`};
    background-size: none;
  }
`

export default function Home() {
  return (
    <>
      <Head>
        <title> treegar - Invest in US stocks from Africa</title>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta
          name='description'
          content='Treegar will enable you to become a global investor with the tap of a button. Buy and sell local and U.S stocks with ease from your mobile phone and grow your portfolio in a foreign market. '
        />
        <meta
          name='keyword'
          content='trading, fintech platform, financial markets ,investing'
        />
        {/* <!-- THEME COLOR FOR CHROME MOBILE BROWSERS --> */}

        <meta name='theme-color' content='#4CC800' />
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='treegar' key='twhandle' />
        <meta property='og:url' content='https://treegar.com/' key='ogurl' />
        <meta
          property='og:image'
          content='https://treegar.com/preview.png'
          key='ogimage'
        />
        <meta property='og:site_name' content='treegar' key='ogsitename' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        
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
