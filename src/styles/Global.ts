import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%; //10px = 1rem
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small}; // 14px
    }
  `}
  button{
    cursor: pointer;
  }
`
