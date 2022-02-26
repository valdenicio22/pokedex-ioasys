import styled, { css } from 'styled-components';

// Nfp = Not Found Page
export const NfpContainer = styled.main`
  ${({ theme }) => css`
    width: ${theme.containers.mobile};
    margin: 90 auto;

    color: ${theme.colors.mediumGray};

    h1 {
      font-size: 14.8rem;
      line-height: 13.95rem;
    }
    h2 {
      font-size: 2.2rem;
      line-height: 3.1;
    }
  `}
`;
