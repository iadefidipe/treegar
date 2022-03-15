import { useState } from "react"
import pageData from "../../data/pageData"
import Image from "next/image"
import arrow from "../../public/assets/icon-double-arrow.svg"
import {
  Wrapper,
  SectionHeader,
  InvestContainer,
  InvestWrap,
  IconContainer,
  IconWrap,
  Icon,
  YearTabContaner,
  YearTab,
  InvestText,
  InvestBar,
  PercentWrap,
  Percentage,
  ProfitWrap,
  Profit,
  SectionContainer,
} from "./Invest.style"

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
      <SectionContainer>
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
      </SectionContainer>
    </Wrapper>
  )
}
export default Invest
