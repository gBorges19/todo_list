import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  body{
    background: linear-gradient(to bottom, #b833ff 0%, #29a7d1 50%, #ff52bf 100%);
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

`;
