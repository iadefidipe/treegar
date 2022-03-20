import React from "react"
import pageData from "../data/pageData"
import {
  Wrapper,
  PolicyContainer,
  PageHeader,
  PageContainer,
  PageText,
  PageSection,
  SubHeader,
  SubSection,
  SubList,
  OrderedList,
  ListSection,
  PageSubSection,
  SectionWrap,
} from "../styles/policy.style"
import Head from "next/head"

function policy() {
  const { privacyPolicy } = pageData
  return (
    <>
      <Head>
      <title> treegar - Invest in US stocks from Africa</title>
      </Head>
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
              <PageSubSection>
                {privacyPolicy.customerData.text.map((text, index) => (
                  <PageText key={index}>{text}</PageText>
                ))}
              </PageSubSection>

              <PageSubSection>
                <SubHeader> {privacyPolicy.personData.headerText} </SubHeader>
                <PageText>{privacyPolicy.personData.text}</PageText>
                <SubSection>
                  <ListSection>
                    <SubHeader>
                      {privacyPolicy.personData.sub[0].header}
                    </SubHeader>
                    <SubList>
                      {privacyPolicy.personData.sub[0].text.map(
                        (list, index) => (
                          <OrderedList key={index}>{list}</OrderedList>
                        )
                      )}
                    </SubList>
                  </ListSection>

                  <ListSection>
                    <SubHeader>
                      {privacyPolicy.personData.sub[1].header}
                    </SubHeader>
                    <PageText>{privacyPolicy.personData.sub[1].text}</PageText>
                  </ListSection>
                </SubSection>
              </PageSubSection>
            </PageSection>

            <PageSection>
              <SectionWrap>
                <SubHeader>{privacyPolicy.personalInfo.header}</SubHeader>
                <PageText>{privacyPolicy.personalInfo.text}</PageText>
              </SectionWrap>

              <PageSubSection>
                <SectionWrap>
                  <SubHeader>{privacyPolicy.usePersonalInfo.header}</SubHeader>
                  <PageText>{privacyPolicy.usePersonalInfo.subText}</PageText>
                </SectionWrap>
                <SubSection>
                  {privacyPolicy.usePersonalInfo.sub.map((section, index) => (
                    <ListSection key={index}>
                      <SubHeader>{section.header}</SubHeader>
                      <PageText>{section.text}</PageText>
                    </ListSection>
                  ))}
                </SubSection>
              </PageSubSection>
            </PageSection>

            <PageSection>
              <SubHeader>{privacyPolicy.sharePersonalInfo.header}</SubHeader>

              {privacyPolicy.sharePersonalInfo.text.map((text, index) => (
                <PageText key={index}>{text}</PageText>
              ))}
            </PageSection>

            <PageSection>
              <SubHeader>{privacyPolicy.yourChoices.header}</SubHeader>
              <PageSubSection>
                {privacyPolicy.yourChoices.sub.map((sub, index) => (
                  <ListSection key={index}>
                    <SubHeader>{sub.header}</SubHeader>
                    <PageText>{sub.text}</PageText>
                  </ListSection>
                ))}
              </PageSubSection>
              <PageSubSection>
                <SubHeader>{privacyPolicy.trackingAdvert.header}</SubHeader>
                <PageText>{privacyPolicy.trackingAdvert.text}</PageText>
              </PageSubSection>
              <PageSubSection>
                <SubHeader>{privacyPolicy.socialMedia.header}</SubHeader>
                <PageText>{privacyPolicy.socialMedia.text}</PageText>
              </PageSubSection>
              <PageSubSection>
                <SubHeader>{privacyPolicy.paymentInfo.header}</SubHeader>
                <PageText>{privacyPolicy.paymentInfo.text}</PageText>
              </PageSubSection>
              <PageSubSection>
                <SubHeader>{privacyPolicy.security.header}</SubHeader>
                <PageText>{privacyPolicy.security.text}</PageText>
              </PageSubSection>
              <PageSubSection>
                <SubHeader>{privacyPolicy.thirdParty.header}</SubHeader>
                <PageText>{privacyPolicy.thirdParty.text}</PageText>
              </PageSubSection>
              <PageSubSection>
                <SubHeader>{privacyPolicy.childrenPrivacy.header}</SubHeader>
                <PageText>{privacyPolicy.childrenPrivacy.text}</PageText>
              </PageSubSection>
              <PageSubSection>
                <SubHeader>{privacyPolicy.changePolicy.header}</SubHeader>
                {privacyPolicy.changePolicy.text.map((text, index) => (
                  <PageText key={index}>{text}</PageText>
                ))}
              </PageSubSection>
            </PageSection>

            <PageSection>
              <SubHeader>{privacyPolicy.lawfulBases.header}</SubHeader>
              {privacyPolicy.lawfulBases.text.map((text, index) => (
                <PageText key={index}>{text}</PageText>
              ))}
            </PageSection>

            <PageSection>
              <PageSubSection>
                <SubHeader> {privacyPolicy.accessRight.header} </SubHeader>
                <PageText> {privacyPolicy.accessRight.subText} </PageText>
              </PageSubSection>

              <PageSubSection>
                <ListSection>
                  <SubHeader>
                    {privacyPolicy.accessRight.sub[0].header}{" "}
                  </SubHeader>
                  <PageText>{privacyPolicy.accessRight.sub[0].sub}</PageText>
                  <SubList>
                    {privacyPolicy.accessRight.sub[0].text.map(
                      (list, index) => (
                        <OrderedList key={index}> {list} </OrderedList>
                      )
                    )}
                  </SubList>
                </ListSection>

                <ListSection>
                  <SubHeader>
                    {privacyPolicy.accessRight.sub[1].header}
                  </SubHeader>
                  {privacyPolicy.accessRight.sub[1].text.map((list, index) => (
                    <PageText key={index}> {list} </PageText>
                  ))}
                </ListSection>

                <ListSection>
                  <SubHeader>
                    {privacyPolicy.accessRight.sub[2].header}
                  </SubHeader>
                  <PageText>{privacyPolicy.accessRight.sub[2].sub}</PageText>
                  <SubList>
                    {privacyPolicy.accessRight.sub[2].text.map(
                      (list, index) => (
                        <OrderedList key={index}> {list} </OrderedList>
                      )
                    )}
                  </SubList>
                </ListSection>

                <ListSection>
                  <SubHeader>
                    {privacyPolicy.accessRight.sub[3].header}
                  </SubHeader>

                  <PageText> {privacyPolicy.accessRight.sub[3].text} </PageText>
                </ListSection>

                <ListSection>
                  <SubHeader>
                    {privacyPolicy.accessRight.sub[4].header}
                  </SubHeader>
                  {privacyPolicy.accessRight.sub[4].text.map((list, index) => (
                    <PageText key={index}> {list} </PageText>
                  ))}
                </ListSection>
              </PageSubSection>
            </PageSection>

            <PageSection>
              <SubHeader>{privacyPolicy.retention.header}</SubHeader>
              {privacyPolicy.retention.text.map((text, index) => (
                <PageText key={index}> {text} </PageText>
              ))}
            </PageSection>

            <PageSection>
              <SubHeader>{privacyPolicy.crossBorder.header}</SubHeader>

              <PageText> {privacyPolicy.crossBorder.text} </PageText>
            </PageSection>

            <PageSection>
              <SubHeader>{privacyPolicy.contactUs.header}</SubHeader>

              <PageText> {privacyPolicy.contactUs.sub} </PageText>
              <PageSubSection>
                {privacyPolicy.contactUs.text.map((text, index) => (
                  <PageText key={index}> {text} </PageText>
                ))}
              </PageSubSection>
            </PageSection>
          </PolicyContainer>
        </PageContainer>
      </Wrapper>
    </>
  )
}

export default policy
