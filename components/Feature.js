import styled from "styled-components"
import { Heading4, Heading5 } from "./shared/Headings"
import pageData from "../data/pageData"
import { fontStyleB } from "./shared/typography"
import { maxWidth } from "./shared/BaseStyles"

const Wrapper = styled.section`
  ${maxWidth}
  display: flex;
  flex-direction: column;
  gap: 37px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  margin-bottom: 70px;
`

const SectionHeader = styled(Heading4)`
  & > span {
    color: ${(props) => props.theme.colors.shade};
  }
`
const FeatureContainer = styled.div`
  display: grid;
  gap: 52px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
const FeatureWrap = styled.div``
const FeaturesWrap = styled.div`
  padding: 21px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const FeatureHeader = styled(Heading5)`
  margin-bottom: 10px;
`
const FeatureText = styled.p`
  ${fontStyleB}
`
const BackgroundWrap = styled.div`
  /* border: 2px solid green; */
  min-height: 379px;
  background: ${(props) =>
    ` url(${props.theme.bg.bgBrand.src}) no-repeat left center `};
  background-size: auto 379px;
  @media (min-width: 768px) {
    flex: 1 576px;
  }
`

function Feature() {
  return (
    <Wrapper>
      <BackgroundWrap></BackgroundWrap>
      <FeaturesWrap>
        <SectionHeader>
          Investing Today. <span>Transforming Tomorrow</span>
        </SectionHeader>
        <FeatureContainer>
          {pageData.featuresData.map((element, index) => (
            <FeatureWrap key={index}>
              <FeatureHeader> {element.header} </FeatureHeader>
              <FeatureText>{element.text}</FeatureText>
            </FeatureWrap>
          ))}
        </FeatureContainer>
      </FeaturesWrap>
    </Wrapper>
  )
}

export default Feature
