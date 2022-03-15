import { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import { IconButton } from "./shared/Buttons"
import Image from "next/image"
import { Heading1 } from "./shared/Headings"
import pageData from "../data/pageData"


const Wrapper = styled.section`
  padding: 0 21px;
  margin-bottom: 100px;

  display: flex;
  gap: 25px;
  flex-direction: column;

  & > div:nth-of-type(2) {
    display: flex;
    gap: 15px;
    flex-direction: column;
    order: 1;
  }
  & > div:nth-of-type(1) {
    order: 2;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > div:nth-of-type(2) {
      order: 2;
    }
    & > div:nth-of-type(1) {
      order: 1;
    }
  }
`
const HeroWrap = styled.div``
const HeroHeader = styled(Heading1)``
const HeroText = styled.p``
const HeroButtonWrap = styled.div`
  display: flex;
  gap: 21px;
`
const HeroButton = styled(IconButton)``

const HeroImageWrap = styled.div``
const HeroImageContainer = styled.div`
  display: ${({ current, index }) => (index === current ? "block" : "none")};
`

function Hero() {
  const [current, setCurrent] = useState(0)
  const length = pageData.screenScroller.length

  const changeImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  // setInterval(changeImage, 7000)

  const autoUpdate = useCallback(() => {
    // setInterval(changeImage, 17000)
    clearInterval()
  }, [current])

  return (
    <Wrapper>
      <HeroWrap>
        <HeroImageWrap>
          {pageData.screenScroller.map((screen, index) => {
            autoUpdate()
            console.log(current)

            return (
              <HeroImageContainer key={index} index={index} current={current}>
                <Image src={screen} />
              </HeroImageContainer>
            )
          })}
        </HeroImageWrap>
      </HeroWrap>
      <HeroWrap>
        <HeroHeader>Invest Globally</HeroHeader>
        <HeroText>
          {" "}
          Invest in 8,000+ companies listed on the US and local stock exchanges
          fom as little as <span>$1</span>{" "}
        </HeroText>
        <HeroButtonWrap>
          {" "}
          <HeroButton play />
          <HeroButton />{" "}
        </HeroButtonWrap>
      </HeroWrap>
    </Wrapper>
  )
}

export default Hero
