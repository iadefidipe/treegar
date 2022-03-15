import { Heading2, Heading3 } from "../shared/Headings"
import styled, { css } from "styled-components"
import { InnerWrapper, maxWidth } from "../shared/BaseStyles"
import Image from "next/image"
import { fontInvest, fontProfit } from "../shared/typography"

export const tabBasestyle = css`
  width: 100px;
  height: 40px;
  border-radius: 21px;
`
export const Wrapper = styled.section`
  ${maxWidth}
`

export const SectionContainer = styled(InnerWrapper)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const SectionHeader = styled(Heading2)`
  @media (min-width: 768px) {
    text-align: center;
  }
`
export const InvestContainer = styled.div`
  display: flex;
  max-width: 572px;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`
export const InvestWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
`
export const IconWrap = styled.button`
  outline: none;
  background: none;
  border: none;
`
export const Icon = styled(Image)``

export const YearTabContaner = styled.div`
  display: flex;

  gap: 24px;
`
export const YearTab = styled.button`
  ${tabBasestyle}
  outline: none;
  background: none;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: ${(props) => props.theme.weight.mid};
  background-color: ${({ theme, active, index }) =>
    active === index ? theme.colors.accent : theme.colors.tab};
  color: ${(props) => props.theme.colors.pryWhite};
`
export const InvestText = styled(fontInvest)`
  font-weight: ${(props) => props.theme.weight.mid};
`

export const InvestBar = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  background: ${(props) => props.theme.colors.shade};
  opacity: 0.7;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background: ${(props) => props.theme.colors.accent};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: red;
    cursor: pointer;
  }
`
export const PercentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(199, 255, 165, 0.11);
  ${tabBasestyle}
`
export const Percentage = styled.p``

export const ProfitWrap = styled.div`

  & > p:first-of-type {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.secGrey};
  }
`
export const Profit = styled(fontProfit)``
