import { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import { IconButton } from "../shared/Buttons"
import Image from "next/image"
import { Heading1 } from "../shared/Headings"
import pageData from "../../data/pageData"
import arrowUp from "../../public/assets/icon-arrow-up.svg"
import arrowDown from "../../public/assets/icon-arrow-down.svg"

const Wrapper = styled.section`
  padding: 0 21px;
  margin-top: 200px;
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
    /* align-items: center; */
    & > div:first-of-type {
      order: 1;
      flex: 2 1000px;
      /* border: 2px yellow solid; */
      align-self: center;
    }
    & > div:nth-of-type(2) {
      /* border: 2px yellow solid; */
      order: 1;
    }
    & > div:last-of-type {
      /* border: 2px green solid; */
      order: 1;
      margin-top: 100px;
    }
  }
`
const HeroWrap = styled.div`
  &:first-child {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`
const HeroHeader = styled(Heading1)``
const HeroText = styled.p``
const HeroButtonWrap = styled.div`
  display: flex;
  gap: 21px;
`
const HeroButton = styled(IconButton)``

const HeroImageWrap = styled.div`
  margin: 0 auto;
`
const HeroImageContainer = styled.div`
  width: 213px;
  height: 450px;
  margin: 20px auto 0 auto;
  transform: rotate(25deg);

  display: ${({ current, index }) => (index === current ? "block" : "none")};
  @media (min-width: 768px) {
    transform: rotate(0deg);
    width: 364px;
    height: 755px;
  }
`

const CarouselWrap = styled.div`
  display: flex;

  align-items: start;
  flex-direction: column;
  gap: 32px;
  border: 2px red solid;
`
const CarouselTextWrap = styled.div`
  border: 2px aqua solid;
  display: flex;
  flex-direction: column;
  gap: 20px;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 120px;
  msOverflowStyle: none;
	scrollbarWidth: none;
`
const CarouselImageWrap = styled.button`
  border: none;
  background: none;
`

const CarouselText = styled.p`
  scroll-snap-align: start;
`
function Hero() {
  const [current, setCurrent] = useState(0)
  const length = pageData.screenScroller.length

  useEffect(() => {
    const swapImage = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1)
    }, 3000)
    return () => clearInterval(swapImage)
  }, [current])

  return (
    <Wrapper>
      <HeroWrap>
        <CarouselWrap>
          <CarouselImageWrap>
            <Image src={arrowUp} alt='' />
          </CarouselImageWrap>
          <CarouselTextWrap>
            <CarouselText>Real-Time Trading</CarouselText>
            <CarouselText>Fractional Investing</CarouselText>
            <CarouselText>Full Extended Hours Trading</CarouselText>
            <CarouselText>Local Deposit Methods</CarouselText>
            <CarouselText>Latest News</CarouselText>
          </CarouselTextWrap>
          <CarouselImageWrap>
            <Image src={arrowDown} alt='' />
          </CarouselImageWrap>
        </CarouselWrap>
      </HeroWrap>
      <HeroWrap>
        <HeroImageWrap>
          {pageData.screenScroller.map((screen, index) => {
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
