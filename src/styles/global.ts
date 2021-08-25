import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-image: url('https://data.1freewallpapers.com/download/the-other-side-of-the-desktop-in-august-2014-calendar-blue-sea.jpg');
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 0px 20px;
  }

  button {
    cursor: pointer;
  }

`;
