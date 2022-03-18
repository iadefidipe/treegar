import { Heading2 } from "../shared/Headings"
import styled from "styled-components"
import { fontRegular, fontName } from "../shared/typography"
import { InnerWrapper } from "../shared/BaseStyles"

export const Wrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
  margin: 0 21px;
`

export const SectionContainer = styled(InnerWrapper )``

export const SectionHeader = styled(Heading2)`
  text-align: center;
  margin-bottom: 30px;
`

export const SectionWrap = styled.div`
  max-width: 631px;
  margin: 0 auto;
`
export const ImageWrap = styled.div`
  margin-bottom: 38px;
`

export const TestimonialContainer = styled.div``
export const TestimonialWrap = styled.div`
  display: ${({ active, index }) => (active === index ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;
`
export const TestimonialText = styled(fontRegular)`
  text-align: center;
`
export const TextWrap = styled.div`
  height: 170px;
  @media (min-width: 428px) {
    height: 130px;
  }

  @media (min-width: 568px) {
    height: 100px;
  }
`
export const DetailsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`

export const Detailscontainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled(fontName)`
  text-align: center;
  @media (min-width: 768px) {
    order: 1;
  }
`
export const Title = styled(fontRegular)`
  text-align: center;
  @media (min-width: 768px) {
    order: 2;
  }
`
export const Arrow = styled.button`
  outline: none;
  border: none;
  background: none;
`
