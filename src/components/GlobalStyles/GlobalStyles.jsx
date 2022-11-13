import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

html,body {
  margin: 0;
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${p => p.theme.colors.primaryWhiteColor};
  color: ${p => p.theme.colors.primaryTextColor};
}

a{
  text-decoration:none
}

h1, h2, h3, h4, h5, h6, p, hr {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
}

img{
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyles;
