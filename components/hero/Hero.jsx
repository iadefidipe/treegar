import { useState, useEffect } from "react"
import { IconButton } from "../shared/Buttons"
import Image from "next/image"
import { Heading1 } from "../shared/Headings"
import pageData from "../../data/pageData"
import arrowUp from "../../public/assets/icon-arrow-up.svg"
import arrowDown from "../../public/assets/icon-arrow-down.svg"
import { maxWidth, InnerWrapper } from "../shared/BaseStyles"
import Carousel from "./Carousel"
import { Wrapper, HeroContainer, HeroWrap, HeroImageWrap, HeroImageContainer, HeroHeader, HeroText, HeroButtonWrap, HeroButton  } from "./Hero.style"



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
      <HeroContainer>
        <HeroWrap>
          <Carousel />
        </HeroWrap>
        <HeroWrap>
          <HeroImageWrap>
            {pageData.screenScroller.map((screen, index) => {
              return (
                <HeroImageContainer key={index} index={index} current={current}>
                  <Image src={screen} alt='screen-roller' quality={100} />
                </HeroImageContainer>
              )
            })}
          </HeroImageWrap>
        </HeroWrap>
        <HeroWrap>
          <HeroHeader>Invest Globally</HeroHeader>
          <HeroText>
            Invest in 8,000+ companies listed on the US and local stock
            exchanges fom as little as <span>$1</span>.
          </HeroText>
          <HeroButtonWrap>
            <HeroButton play />
            <HeroButton />
          </HeroButtonWrap>
        </HeroWrap>
      </HeroContainer>
    </Wrapper>
  )
}

export default Hero
