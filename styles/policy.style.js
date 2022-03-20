import styled, { css } from "styled-components"
import { maxWidth, InnerWrapper } from "../components/shared/BaseStyles"
import { Heading1, Heading7 } from "../components/shared/Headings"
import { fontRegular } from "../components/shared/typography"

const baseFlex = css`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 17px;
  }
`

const fontSize = css`
  font-size: 0.625rem;
  @media (min-width: 768px) {
    font-size: 1.0625rem;
  }
`

export const Wrapper = styled.main`
  margin: 0 21px;
`

export const PageContainer = styled(InnerWrapper)``

export const PageHeader = styled(Heading1)`
  margin: 200px 0 27px;
`

export const PolicyContainer = styled.div`
  ${baseFlex}
  gap: 30px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    gap: 51px;
  }

  & section:first-child {
    ${baseFlex}
  }

  & section:nth-child(2) {
    ${baseFlex}

    & > div:nth-child(3) {
      gap: 0;

      & > :nth-child(3) {
        ${baseFlex}
      }
    }
  }

  & section:nth-child(3) {
    ${baseFlex}

    & > div:last-child {
      ${baseFlex}

      & > div:last-child {
        ${baseFlex}
      }
    }
  }

  & section:nth-child(4) {
    ${baseFlex}
  }
  & section:nth-child(5) {
    ${baseFlex}
    gap:20px;

    & div:last-child {
      ${baseFlex}
    }

    @media (min-width: 768px) {
      gap: 34px;
    }
  }

  & section:nth-child(6) {
    ${baseFlex}

    & div:last-child {
      ${baseFlex}
    }
  }

  & section:last-child {
    ${baseFlex}

    &> div {
      gap: 0;
    }
  }
`

export const PageText = styled.p`
  ${fontSize}
  opacity: 0.8;
`

export const PageSection = styled.section``
export const PageSubSection = styled.div`
  ${baseFlex}
`

export const SubHeader = styled(Heading7)`
  ${fontSize}
`
export const SubSection = styled.div``

export const SubList = styled.ul`
  padding: 0 21px;
`
export const OrderedList = styled.li`
  ${fontSize}
  opacity: 0.8;
`
export const ListSection = styled.div`
  ${baseFlex}
`
export const SectionWrap = styled.div``
