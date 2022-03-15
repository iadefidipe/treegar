import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Red Hat Text", sans-serif;
  font-size: 1rem;
  font-size: 1 rem;
  line-height: 1.625rem;
  color: ${ ({theme}) => theme.colors.pryWhite };
  height: 100vh;
  background-color: ${ props => props.theme.colors.bg } ;
}


`
 export default GlobalStyles
