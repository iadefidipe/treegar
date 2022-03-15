import styled from "styled-components"
import { Heading6 } from "../shared/Headings"
import { fontRegular } from "../shared/typography"
import { maxWidth, InnerWrapper } from "../shared/BaseStyles"

export const Wrapper = styled.footer`
  ${maxWidth}
  background-color: ${(props) => props.theme.colors.black};
`
export const FooterContainer = styled(InnerWrapper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  &:first-of-type div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &:last-of-type div {
    display: flex;
    gap: 18px;
  }
`
export const ContactHeader = styled(Heading6)``
export const ContactText = styled(fontRegular)`
  & > span {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: underline;
  }
`
export const ContactLink = styled(fontRegular)``
export const ContactLinkWrap = styled.div``
export const FooterWrap = styled.div``
