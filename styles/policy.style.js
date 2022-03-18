import styled, { css } from "styled-components"
import { maxWidth, InnerWrapper } from "../components/shared/BaseStyles"
import { Heading1, Heading7 } from "../components/shared/Headings"
import { fontRegular } from "../components/shared/typography"

const baseFlex = css`
  display: flex;
  flex-direction: column;
  gap: 17px;
`

export const Wrapper = styled.main`
    margin: 0 21px;

`

export const PageContainer = styled(InnerWrapper)`
  
`

export const PageHeader = styled(Heading1)`
  margin: 200px 0 27px;
`

export const PolicyContainer = styled.div`
  ${baseFlex}
  gap: 51px;
  margin-bottom: 50px;

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
    gap:34px;

    & div:last-child {
      ${baseFlex}
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

export const PageText = styled(fontRegular)`
  font-size: 1.0625rem;
`

export const PageSection = styled.section``
export const PageSubSection = styled.div`
  ${baseFlex}
`

export const SubHeader = styled(Heading7)`
  opacity: 0.8;
`
export const SubSection = styled.div``

export const SubList = styled.ul`
  padding: 0 21px;
`
export const OrderedList = styled.li`
  color: ${(props) => props.theme.colors.secGrey};
`
export const ListSection = styled.div`
  ${baseFlex}
`
export const SectionWrap = styled.div``
