import { createGlobalStyle } from 'styled-components';

import { colors, fonts } from 'styles/variables';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: ${colors.snow};
    color: ${colors.gray};
    font-family: ${fonts.raleway};
    margin: 0;
  }
  body, input, button {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;
