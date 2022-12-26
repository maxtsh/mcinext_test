import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root{
    --pm-color: rgba(31, 53, 76,1);
    --pm-color-dark-1: rgba(21, 36, 52, 1);
    --dark-blue-1: #2058f2;
    --dark-1: #999;
    --dark-2: #bbb;
    --pm-red: #ed4337;

    // Box shadows
    --bx-sh-1: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
      --bx-sh-2: rgba(0, 0, 0, 0.15) 0px 2px 8px;

    // Borders
    --border-1: rgba(219, 219, 219, 1);
  }

  *{
    box-sizing: border-box;
  }

  html, body{
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Roboto";
  }

  h1, h2, h3, h4, h5, h6, p, ul, ol{
    padding: 0;
    margin: 0;
  }

  .center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }



`;

export default GlobalStyles;
