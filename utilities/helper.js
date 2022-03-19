export const  mod = (a, b) => {
  return ((a % b) + b) % b
}

export const modBySlidesLength = (index, mod, slideLength) => {
  return mod(index, slideLength)
}

export const moveSlide = (direction, setIndex, modBySlidesLength) => {
  setIndex(modBySlidesLength(index + direction))
}

export const clampOffsetRadius = (offsetRadius, length) => {
  const upperBound = Math.floor((length - 1) / 2)

  if (offsetRadius < 0) {
    return 0
  }
  if (offsetRadius > upperBound) {
    return upperBound
  }

  return offsetRadius
}

export const getPresentableSlides = (slides, offSetRadius, length, index) => {
  const offsetRadius = clampOffsetRadius(offSetRadius, length)
  const presentableSlides = []

  for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
    presentableSlides.push(slides[modBySlidesLength(index + i)])
  }

  return presentableSlides
}
