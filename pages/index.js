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
    border: 2px red solid;

  @media (max-width: 500px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat 228px 440px`};
    background-size: 204.24px 274px;
  }

  @media (min-width: 1200px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat 1100px 650px`};
    background-size: none;
  }
`

export default function Home() {
  return (
    <>
      <Head>
        <title> Treegar - Fintech Platform</title>
        <meta charset='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/svg'
            sizes='32x32'
            href='/favicon.svg'
          />
         
          <meta
            name='description'
            content='Treegar is a fintech platform that enable you to buy and sell local and U.S stocks directly from your mobile phone in real-time. '
          />
          <meta
            name='keyword'
            content='trading, fintech platform, financial markets ,investing'
          />
          {/* <!-- THEME COLOR FOR CHROME MOBILE BROWSERS --> */}

          <meta name='theme-color' content='#4CC800' />
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta name='twitter:creator' content='designo' key='twhandle' />
          <meta
            property='og:url'
            content='https://treegar.com/'
            key='ogurl'
          />
          <meta
            property='og:image'
            content='https://treegar.com/preview.jpg'
            key='ogimage'
          />
          <meta property='og:site_name' content='designo' key='ogsitename' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <link rel='apple-touch-icon' href='/favicon.svg' />
          <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          
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
