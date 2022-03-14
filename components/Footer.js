import styled from "styled-components"
import { FooterHeading } from "./shared/Headings"
import { footerText } from "./shared/typography"
import pageData from "../data/pageData"
import Link from "next/link"
import Image from "next/image"

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FooterContact = styled.div`
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
const ContactHeader = styled(FooterHeading)``
const ContactText = styled.p`
  ${footerText}
`
const ContactLink = styled.a`
  ${footerText}
`
const ContactLinkWrap = styled.div``
const FooterWrap = styled.div``

function Footer() {
  return (
    <Wrapper>
      <ContactWrap>
        <FooterContact>
          <ContactHeader>
            {pageData.footerData.company.headerText}
          </ContactHeader>

          <ContactLinkWrap>
            {pageData.footerData.company.link.map((link, index) => (
              <Link href={link.link} passHref key={index}>
                <ContactLink> {link.text} </ContactLink>
              </Link>
            ))}
          </ContactLinkWrap>
        </FooterContact>
        <FooterContact>
          <ContactHeader>
            {pageData.footerData.contact.headerText}
          </ContactHeader>
          <ContactLink> {pageData.footerData.contact.email} </ContactLink>
          <ContactText> {pageData.footerData.contact.phoneNo} </ContactText>
        </FooterContact>
        {pageData.footerData.address.map((address, index) => (
          <FooterContact key={index}>
            <ContactHeader>{address.city}</ContactHeader>
            <ContactText>{address.address}</ContactText>
          </FooterContact>
        ))}
        <FooterContact>
          <ContactHeader>{pageData.footerData.social.headerText}</ContactHeader>
          <ContactLinkWrap>
            {pageData.footerData.social.icons.map((icon, index) => (
              <Link key={index} href={icon.link}>
                <Image src={icon.icon} alt={icon.alt} />
              </Link>
            ))}
          </ContactLinkWrap>
        </FooterContact>
      </ContactWrap>

      <FooterContact>
        {pageData.footerData.policy.map((par, index) => (
          <ContactText key={index}> {par} </ContactText>
        ))}
      </FooterContact>
    </Wrapper>
  )
}

export default Footer
