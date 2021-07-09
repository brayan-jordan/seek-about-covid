import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-image: url('https://s2.glbimg.com/YVDwa_VXlwAgHfNghjWXQGjbIuM=/0x600/s.glbimg.com/po/tt2/f/original/2014/09/11/abe018ed012d203012313b012911.jpeg');
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
