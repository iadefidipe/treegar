import {
  Wrapper,
  SubHeader,
  SectionHeader,
  SectionText,
  ButtonWrap,
  TextWrap,
  Button,CTAContainer
} from "./CTA.style"

export default function CTA() {
  return (
    <Wrapper>
      <CTAContainer>
        <SectionHeader>Scared Of Investing?</SectionHeader>
        <TextWrap>
          <SubHeader>
            <span>Pull the treegar</span> on your fears!
          </SubHeader>
          <SectionText>
            Invest in the future and grow your personal finances in under 5
            minutes. Starting with just $1.
          </SectionText>
          <SectionText>
            Download the app and start your investing journey now.
          </SectionText>
        </TextWrap>
        <ButtonWrap>
          <Button play />
          <Button />
        </ButtonWrap>
      </CTAContainer>
    </Wrapper>
  )
}
