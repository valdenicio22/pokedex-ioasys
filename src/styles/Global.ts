import { createGlobalStyle, css } from 'styled-components';

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
      font-weight: ${theme.font.weight.regular};
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small}; // 14px = 1.4rem
      background-color: ${theme.colors.lightModeBg};
    }
  `}
  button{
    cursor: pointer;
  }
`;
