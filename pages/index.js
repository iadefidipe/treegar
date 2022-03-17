import styled from "styled-components"
import About from "../components/About"
import Feature from "../components/feature/Feature"

import CTA from "../components/cta/CTA"
import Invest from "../components/invest/Invest"
import Testimonial from "../components/testimonial/Testimonial"
import Hero from "../components/hero/Hero"
import Head from 'next/head'

const Wrapper = styled.main``

export default function Home() {
  return (
    <>
    <Head>
      <title> Treegar - Fintech Platform</title>
    </Head>
    <Wrapper>
      <Hero />
      <Invest />
      <About />
      <Feature />
      <Testimonial />
      <CTA />
    </Wrapper>
    </>
  )
}
