import { createGlobalStyle } from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background: #2e933c no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }
  button {
    cursor: pointer;
  }
  #root {
    max-width: 1360px;
    margin: 0 auto;
    padding: 70px 50px 20px 50px;
  }
`;
