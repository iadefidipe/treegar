import styled from "styled-components"
import { buttonText } from "./typography"
import Image from "next/image"
import apple from "../../public/assets/btn-apple.svg"
import playStore from "../../public/assets/btn-play-store.svg"

export const Button = styled.button`
  ${buttonText}
  border-radius: 49px;
  padding: 13px 10px;

  background-color: ${(props) =>
    props.color ? props.theme.colors.accent : "transparent"};
  border: 1px solid ${(props) => props.theme.colors.accent};
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.color ? "transparent" : props.theme.colors.accent};
    color: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: 768px) {
    padding: 13px 18px;
  }
`
const IconWrapper = styled.span`
  margin-right: 7px;
`
export const BorderButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.pryWhite};
  transition: border 500ms ease-in-out, color 500ms ease-in-out;
  font-size: 12px;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.pryWhite};
    border: 1px solid ${(props) => props.theme.colors.accent};
  }
`
const StyledButton = styled(BorderButton)`
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.weight.regular};
`

export function IconButton({ play }) {
  return (
    <StyledButton>
      <IconWrapper>
        <Image src={play ? playStore : apple} alt='' />
      </IconWrapper>
      {play ? "Get on Andriod" : "Get on iPhone"}
    </StyledButton>
  )
}
