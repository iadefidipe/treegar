import styled from "styled-components"
import pageData from "../../data/pageData"
import {
  Wrapper,
  SectionHeader,
  FeatureContainer,
  FeatureWrap,
  FeaturesWrap,
  FeatureHeader,
  FeatureText,
  BackgroundWrap,
} from "./Feature.style"

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
