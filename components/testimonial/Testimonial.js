import { useState } from "react"
import Image from "next/image"
import quote from "../../public/assets/icon-quote.svg"
import pageData from "../../data/pageData"
import leftArrow from "../../public/assets/icon-arrow-left.svg"
import rightArrow from "../../public/assets/icon-arrow-right.svg"
import { InnerWrapper } from "../shared/BaseStyles"
import {
  Wrapper,
  SectionHeader,SectionContainer,
  ImageWrap,
  TestimonialContainer,
  TestimonialWrap,
  TestimonialText,
  TextWrap,
  DetailsWrap,
  Detailscontainer,
  Name,
  Title,
  Arrow,
  SectionWrap,
} from "./Testimonial.style"

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
      <SectionContainer>
        <SectionHeader>What our early user say about us</SectionHeader>
        <SectionWrap>
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
                    <Title>{data.title}</Title>
                    <Name>{data.name}</Name>
                  </Detailscontainer>
                  <Arrow onClick={nextSlide}>
                    <Image src={rightArrow} alt='' />
                  </Arrow>
                </DetailsWrap>
              </TestimonialWrap>
            ))}
          </TestimonialContainer>
        </SectionWrap>
      </SectionContainer>
    </Wrapper>
  )
}

export default Testimonial
