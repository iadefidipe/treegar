import styled, { css } from "styled-components"
import { maxWidth, InnerWrapper } from "../shared/BaseStyles"
import { Heading1 } from "../shared/Headings"
import { IconButton } from "../shared/Buttons"
import { fontHero } from "../shared/typography"

const flex = css`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.section`
  ${maxWidth}
`

export const HeroContainer = styled(InnerWrapper)`
  ${flex}
  padding: 0 21px;
  margin-top: 200px;
  margin-bottom: 100px;
  gap: 25px;

  & > div:nth-of-type(2) {
    ${flex}
    gap: 15px;
    order: 1;
  }
  & > div:nth-of-type(1) {
    order: 2;
  }
  & > div:last-of-type {
 
    & > p {
      margin-bottom: 18px;
    }
  }

  @media (max-width: 568px) {
    & > div:last-of-type {
     
      & > p {
        max-width: 328px;
      }
    }
  }

  @media (min-width: 768px) {
    gap: 90px;

    flex-direction: row;
    justify-content: space-between;

    & > div:first-of-type {
      order: 1;
      flex: 2 800px;
      
      align-self: center;
    }
    & > div:nth-of-type(2) {
    
      order: 1;
    }
    & > div:last-of-type {
      
      order: 1;

      min-width: 384px;
      & > p {
      margin-bottom: 44px;
    }
    }
  }
`
export const HeroWrap = styled.div`
  &:first-child {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`
export const HeroHeader = styled(Heading1)`
  margin-bottom: 7px;
  @media (min-width: 768px) {
    width: 237px;
    margin: 20px 0;
  }
`
export const HeroText = styled(fontHero)`
  & Span {
    color: ${(props) => props.theme.colors.accent};
  }
`
export const HeroButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  @media (min-width: 768px) {
  gap: 21px;
   
  }

`
export const HeroButton = styled(IconButton)``

export const HeroImageWrap = styled.div`
  margin: 0 auto;
`
export const HeroImageContainer = styled.div`
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

export const CarouselWrap = styled.div`
  display: flex;

  align-items: start;
  flex-direction: column;
  gap: 32px;
  /* border: 2px red solid; */
`
export const CarouselTextWrap = styled.div`
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
export const CarouselImageWrap = styled.button`
  border: none;
  background: none;
`

export const CarouselText = styled.p`
  /* scroll-snap-align: start; */
`
