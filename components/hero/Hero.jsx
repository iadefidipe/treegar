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

  @media (max-width: 500px) {
    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat 210px 280px`};
    background-size: 204.24px 274px;
  }

  & > div:nth-of-type(2) {
    display: flex;
    gap: 15px;
    flex-direction: column;
    order: 1;
  }
  & > div:nth-of-type(1) {
    order: 2;
  }
  & > div:last-of-type {
      

      & > p {
        opacity: 0.8;
        margin-bottom: 44px;
      }
  }
  @media (min-width: 768px) {
    gap: 90px;

    background: ${(props) =>
      `url(${props.theme.bg.bgTree.src}) no-repeat 970px 380px`};
    background-size: none;

    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    & > div:first-of-type {
      order: 1;
      flex: 2 800px;
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
      min-width: 384px;

      
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
const HeroHeader = styled(Heading1)`
  margin: 20px 0;
  width: 237px;
`
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
  /* border: 2px red solid; */
`
const CarouselTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 120px;

  color: ${({ theme }) => theme.colors.secGrey};
  transition: 500ms ease-in-out;

  & p:nth-child(4),
  & p:nth-child(5) {
    display: none;
  }

  & p:nth-child(1),
  & p:nth-child(3) {
    /* display: none; */
  }

  & p:nth-child(2) {
    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ theme }) => theme.colors.pryWhite};
    font-size: 20px;
  }
`
const CarouselImageWrap = styled.button`
  border: none;
  background: none;
`

const CarouselText = styled.p`
  /* scroll-snap-align: start; */
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

  const [index, setIndex] = useState(0)
  const [goToSlide, SetGoToSlide] = useState(null)
  const [offSetRadius, setOffsetRadius] = useState(2)

  let slides = [
    "Real-Time Trading",

    "Fractional Investing",

    "Full Extended Hours Trading",

    "Local Deposit Methods",

    "Stocks & ETFs",
    "Latest News",
  ]
  const slideLength = slides.length

  function mod(a, b) {
    return ((a % b) + b) % b
  }

  const modBySlidesLength = (index) => {
    return mod(index, slideLength)
  }

  const moveSlide = (direction) => {
    setIndex(modBySlidesLength(index + direction))
    SetGoToSlide(null)
  }

  const clampOffsetRadius = (offsetRadius) => {
    const upperBound = Math.floor((slides.length - 1) / 2)

    if (offsetRadius < 0) {
      return 0
    }
    if (offsetRadius > upperBound) {
      return upperBound
    }

    return offsetRadius
  }

  const getPresentableSlides = () => {
    const offsetRadius = clampOffsetRadius(offSetRadius)
    const presentableSlides = []

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)])
    }

    console.log("slides", presentableSlides)

    return presentableSlides
  }
  useEffect(() => {
    getPresentableSlides()
  }, [])
  return (
    <Wrapper>
      <HeroWrap>
        <CarouselWrap>
          <CarouselImageWrap onClick={() => moveSlide(-1)}>
            <Image src={arrowUp} alt='' />
          </CarouselImageWrap>
          <CarouselTextWrap>
            {getPresentableSlides().map((slide, index) => (
              <CarouselText key={index}> {slide} </CarouselText>
            ))}
          </CarouselTextWrap>
          <CarouselImageWrap onClick={() => moveSlide(1)}>
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
