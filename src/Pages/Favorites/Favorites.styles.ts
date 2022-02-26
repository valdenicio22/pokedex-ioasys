import styled, { css } from 'styled-components';

export const FavoriteContainer = styled.section`
  ${({ theme }) => css`
    width: ${theme.containers.mobile};
    margin: 7.2rem auto;
    color: ${theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    h1 {
      size: 1.8rem;
      line-height: 1.6rem;
      font-weight: ${theme.font.weight.semiBold};
    }
  `}
`;

export const FavoriteListContainer = styled.main`
  width: ${({ theme }) => theme.containers.mobile};
  margin: 5rem auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.font.sizes.medium};
`;

export const ButtonContainer = styled.button`
  ${({ theme }) => css`
    width: ${theme.containers.mobile};
    margin: 3.5rem auto;
    border: none;
    background-color: transparent;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: ${theme.font.sizes.small};
      color: rgba(178, 178, 178, 0.9);
    }
  `}
`;
