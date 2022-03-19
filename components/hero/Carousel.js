import React, { useState, useEffect } from "react"
import arrowUp from "../../public/assets/icon-arrow-up.svg"
import arrowDown from "../../public/assets/icon-arrow-down.svg"
import {
  moveSlide,
  getPresentableSlides,
  mod,
  modBySlidesLength,
  clampOffsetRadius,
} from "../../utilities/helper"
import {
  CarouselWrap,
  CarouselImageWrap,
  CarouselTextWrap,
  CarouselText,
} from "./Hero.style"
import Image from "next/image"
import pageData from "../../data/pageData"

function Carousel() {
  const [index, setIndex] = useState(0)

  const [offSetRadius, setOffsetRadius] = useState(2)
  const slides =  pageData.slides
  const slideLength = slides.length

  function mod(a, b) {
    return ((a % b) + b) % b
  }

  const modBySlidesLength = (index) => {
    return mod(index, slideLength)
  }

  const moveSlide = (direction) => {
    setIndex(modBySlidesLength(index + direction))
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

    return presentableSlides
  }

  useEffect(() => {
    getPresentableSlides()
  }, [])

  return (
    <CarouselWrap>
      <CarouselImageWrap
        onClick={() => moveSlide(-1)}
      >
        <Image src={arrowUp} alt='' />
      </CarouselImageWrap>
      <CarouselTextWrap>
        {getPresentableSlides(
        ).map((slide, index) => (
          <CarouselText key={index}> {slide} </CarouselText>
        ))}
      </CarouselTextWrap>
      <CarouselImageWrap
        onClick={() => moveSlide(1)}
      >
        <Image src={arrowDown} alt='' />
      </CarouselImageWrap>
    </CarouselWrap>
  )
}

export default Carousel
