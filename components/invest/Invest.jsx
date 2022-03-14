import { useState } from "react"
import styled, { css } from "styled-components"
import pageData from "../../data/pageData"
import { Heading2, Heading3 } from "../shared/Headings"
import Image from "next/image"
import arrow from "../../public/assets/icon-double-arrow.svg"
const tabBasestyle = css`
  width: 100px;
  height: 40px;
  border-radius: 21px;
`
const Wrapper = styled.section`
  display: grid;
  place-content: center;
  gap: 20px;
  border: 2px solid green;
`
const SectionHeader = styled(Heading2)`
  @media (min-width: 768px) {
    text-align: center;
  }
`
const InvestContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  border: 2px solid yellow;
`
const InvestWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  border: 2px solid red;
`
const IconWrap = styled.button`
  outline: none;
  background: none;
  border: none;
`
const Icon = styled(Image)``

const YearTabContaner = styled.div`
  display: flex;
  justify-content: space-between;
`
const YearTab = styled.button`
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
const InvestText = styled.p`
  font-weight: ${(props) => props.theme.weight.mid};
`

const InvestBar = styled.input`
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
const PercentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(199, 255, 165, 0.11);
  ${tabBasestyle}
`
const Percentage = styled.p``

const ProfitWrap = styled.div``
const Profit = styled(Heading3)``

function Invest() {
  const getProfit = (percent, amount) => {
    const profit = Math.round((1 + percent / 100) * amount)
    return profit
  }
  const [toggle, setToggle] = useState(0)
  const [percentages, setPercentages] = useState([
    50.97, 1204.67, 1464.21, 1571.06,
  ])
  const [active, setActive] = useState(0)

  const [tabIndex, setTabIndex] = useState(0)
  const [amount, setAmount] = useState(1)
  const [percent, setPercent] = useState(percentages[0])
  const [profit, setProfit] = useState(getProfit(percent, amount))
  console.log("array", percentages)

  const handleToggle = (index, percentages) => {
    console.log("index", index)

    setToggle(index)

    setPercentages(pageData.investData.brand[index].percentages)

    console.log("derived", pageData.investData.brand[index].percentages)
    setPercent(percentages[tabIndex])

    // setPercent(data[index])
  }
  const handleTabToggle = (index) => {
    setActive(index)

    setTabIndex(index)
    setPercent(percentages[index])
  }

  return (
    <Wrapper>
      <SectionHeader> {pageData.investData.headerText} </SectionHeader>

      <IconContainer>
        {pageData.investData.brand.map((data, index) => (
          <IconWrap
            onClick={
              () => handleToggle(index, percentages)

              // setProfit(getProfit(percent, amount))
            }
            key={index}
          >
            <Icon src={toggle == index ? data.icon[1] : data.icon[0]} />
          </IconWrap>
        ))}
      </IconContainer>

      <InvestContainer>
        <YearTabContaner>
          {pageData.investData.year.map((data, index) => (
            <YearTab
              key={index}
              index={index}
              onClick={() => {
                handleTabToggle(index)
                setProfit(getProfit(percent, amount))
              }}
              active={active}
            >
              <p> {data === 1 ? `${data} yr ago` : `${data} yrs ago`} </p>
            </YearTab>
          ))}
        </YearTabContaner>
        <InvestWrap>
          <InvestText>If you invested</InvestText>
          <InvestText>${amount}</InvestText>
        </InvestWrap>
        <InvestBar
          type='range'
          min='0'
          max='1000'
          step='1'
          onChange={(e) => {
            setAmount(e.target.value)
            setProfit(getProfit(percent, amount))
          }}
        />
        <InvestWrap>
          <ProfitWrap>
            <InvestText>You will have</InvestText>
            <Profit>${profit}</Profit>
          </ProfitWrap>
          <PercentWrap>
            <Image src={arrow} alt='' />
            <Percentage>{percent}%</Percentage>
          </PercentWrap>
        </InvestWrap>
      </InvestContainer>
    </Wrapper>
  )
}
export default Invest
