import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: ${(props) => props.theme.containers.mobile};
  margin: 5rem auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.3rem;

  img {
    width: 2.4rem;
    height: 3.2rem;
  }
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.colors.primary};
    }
  `}
`;
