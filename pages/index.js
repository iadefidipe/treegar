import styled from "styled-components"
import About from "../components/About"
import Feature from "../components/Feature"

import CTA from "../components/CTA"
import Invest from "../components/invest/Invest"
import Testimonial from "../components/Testimonial"
import Hero from "../components/Hero"

const Wrapper = styled.main``

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Invest />
      <About />
      <Feature />
      <Testimonial />
      <CTA />
    </Wrapper>
  )
}
