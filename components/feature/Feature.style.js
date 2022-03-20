import styled from "styled-components"
import { fontRegular } from "../shared/typography"
import { InnerWrapper, maxWidth } from "../shared/BaseStyles"
import { Heading4, Heading5 } from "../shared/Headings"

export const Wrapper = styled.section`
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

export const SectionHeader = styled(Heading4)`
  line-height: 30px;
  max-width: 240px;
  & > span {
    color: ${(props) => props.theme.colors.shade};
  }

  @media (min-width: 768px) {
    max-width: 100%;
    line-height: 60px;
  }
`
export const FeatureContainer = styled.div`
  display: grid;
  gap: 52px;
  @media (max-width: 425px) {
    max-width: 288px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
export const FeatureWrap = styled.div``
export const FeaturesWrap = styled.div`
  margin-right: 100;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (min-width: 768px) {
    width: 785px;
  }
`

export const FeatureHeader = styled(Heading5)`
  margin-bottom: 10px;
`
export const FeatureText = styled.p`
  opacity: 0.8;

  ${fontRegular}
`
export const BackgroundWrap = styled.div`
  min-height: 379px;
  background: ${(props) =>
    ` url(${props.theme.bg.bgBrand.src}) no-repeat left center `};
  background-size: auto 379px;
  @media (min-width: 768px) {
    flex: 1 570px;
    background-size: auto;

    height: 706px;
  }
`
