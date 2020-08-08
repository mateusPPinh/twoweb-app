import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Recursive', sans-serif;
    background: #FECEA2;
  }

  html, body, #root {
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button, input {
    font: Recursive 0.90rem;
  }
`;