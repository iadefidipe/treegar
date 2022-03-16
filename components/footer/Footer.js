import {
  Wrapper,
  ContactWrap,
  FooterContact,
  ContactHeader,
  ContactText,
  ContactLink,
  ContactLinkWrap,
  FooterContainer,
  SocialWrap,
} from "./Footer.style"

import pageData from "../../data/pageData"
import Link from "next/link"
import Image from "next/image"
import Disclaimer from "./Disclaimer"

function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
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
            <Link href={"/"} passHref>
              <ContactLink> {pageData.footerData.contact.email} </ContactLink>
            </Link>
            <ContactText> {pageData.footerData.contact.phoneNo} </ContactText>
          </FooterContact>
          {pageData.footerData.address.map((address, index) => (
            <FooterContact key={index}>
              <ContactHeader>{address.city}</ContactHeader>
              <ContactText>{address.address}</ContactText>
            </FooterContact>
          ))}
          <FooterContact>
            <ContactHeader>
              {pageData.footerData.social.headerText}
            </ContactHeader>
            <ContactLinkWrap>
              {pageData.footerData.social.icons.map((icon, index) => (
                <SocialWrap key={index}>
                  <Link href={icon.link} passHref>
                    <Image src={icon.icon} alt={icon.alt} />
                  </Link>
                </SocialWrap>
              ))}
            </ContactLinkWrap>
          </FooterContact>
        </ContactWrap>
        <Disclaimer />
      </FooterContainer>
    </Wrapper>
  )
}

export default Footer
