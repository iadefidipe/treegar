import React from "react"
import pageData from "../data/pageData"
import {
  Wrapper,
  PolicyContainer,
  PageHeader,
  PageContainer,
  PageText,
  PageSection,
  SubHeader,SubSection
} from "../styles/policy.style"

function policy() {
  const { privacyPolicy } = pageData
  return (
    <Wrapper>
      <PageContainer>
        <PageHeader> {privacyPolicy.headerText} </PageHeader>
        <PolicyContainer>
          <PageSection>
            {privacyPolicy.policyText.map((text, index) => (
              <PageText key={index}>{text}</PageText>
            ))}
          </PageSection>

          <PageSection>
            <SubHeader> {privacyPolicy.customerData.headerText} </SubHeader>
            {privacyPolicy.customerData.text.map((text, index) => (
              <PageText key={index}>{text}</PageText>
            ))}
          </PageSection>

          <PageSection>
            <SubHeader> {privacyPolicy.personData.headerText} </SubHeader>
            <PageText>{privacyPolicy.personData.text}</PageText>
            <SubSection></SubSection>
          </PageSection>
        </PolicyContainer>
      </PageContainer>
    </Wrapper>
  )
}

export default policy
