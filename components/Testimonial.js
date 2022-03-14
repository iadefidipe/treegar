import { useState } from "react"
import styled from "styled-components"
import { Heading2 } from "./shared/Headings"
import Image from "next/image"
import quote from "../public/assets/icon-quote.svg"
import pageData from "../data/pageData"
import leftArrow from "../public/assets/icon-arrow-left.svg"
import rightArrow from "../public/assets/icon-arrow-right.svg"

const Wrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
`
const InnerWrapper = styled.section`
  margin: 0 21px;
`
const SectionHeader = styled(Heading2)`
  text-align: center;
  margin-bottom: 30px;
`
const ImageWrap = styled.div``
const TestimonialContainer = styled.div`
  display: flex;
`
const TestimonialWrap = styled.div`
  display: ${({ active, index }) => (active === index ? "flex" : "none")};
  flex-direction: column;
`
const TestimonialText = styled.p`
  text-align: center;
`
const TextWrap = styled.div``
const DetailsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;
  margin: 0 auto;
  gap: 100px;
`

const Detailscontainer = styled.div``
const Name = styled.p`
  text-align: center;
`
const Title = styled.p`
  text-align: center;
`
const Arrow = styled.button`
  outline: none;
  border: none;
  background: none;
`
function Testimonial() {
  const [active, setActive] = useState(0)
  const length = pageData.testimonialData.length

  const prevSlide = () => {
    setActive(active === 0 ? length - 1 : active - 1)
  }

  const nextSlide = () => {
    setActive(active === length - 1 ? 0 : active + 1)
  }
  console.log(active)

  return (
    <Wrapper>
      <InnerWrapper>
        <SectionHeader>What our early user say about us</SectionHeader>
        <ImageWrap>
          <Image src={quote} alt='' />
        </ImageWrap>
        <TestimonialContainer>
          {pageData.testimonialData.map((data, index) => (
            <TestimonialWrap key={index} active={active} index={index}>
              <TextWrap>
                <TestimonialText>{data.testimony}</TestimonialText>
              </TextWrap>
              <DetailsWrap>
                <Arrow onClick={prevSlide}>
                  <Image src={leftArrow} alt='' />
                </Arrow>
                <Detailscontainer>
                  <Name>{data.name}</Name>
                  <Title>{data.title}</Title>
                </Detailscontainer>
                <Arrow onClick={nextSlide}>
                  <Image src={rightArrow} alt='' />
                </Arrow>
              </DetailsWrap>
            </TestimonialWrap>
          ))}
        </TestimonialContainer>
      </InnerWrapper>{" "}
    </Wrapper>
  )
}

export default Testimonial
