import styled from "styled-components"
import { buttonText } from "../shared/typography"

export const Button = styled.button`
  ${buttonText}
  border-radius: 49px;
  width: 9.25rem;
  height: 3rem;
  background-color: ${(props) =>
    props.color ? props.theme.colors.accent : "transparent"};
  border: 1px solid ${(props) => props.theme.colors.accent};
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.color ? "transparent" : props.theme.colors.accent};
      color: ${ props =>  props.theme.colors.accent} ;
  }
`
