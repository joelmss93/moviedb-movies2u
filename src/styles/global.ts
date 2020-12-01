import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #0D1317;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
    color: #FFF;
  }
  #root {
    max-width: 1280px;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`;
