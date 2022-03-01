import styled, { css } from 'styled-components';

export const FavoritesContainer = styled.section`
  ${({ theme }) => css`
    width: ${theme.containers.mobile};
    margin: 0 auto;
    padding: 5rem 0rem;
  `}

  .returnLink {
    ${({ theme }) => css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-decoration: none;

      margin-top: 3.6rem;

      p {
        font-size: ${theme.font.sizes.small};
        color: rgba(178, 178, 178, 0.9);
      }
    `}
  }
`;

export const MyFavorites = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    padding: 6rem 0;

    h1 {
      color: ${theme.colors.primary};
    }
  `}
`;

// export const FavoriteListContainer = styled.main`
//   width: ${({ theme }) => theme.containers.mobile};
//   margin: 5rem auto;

//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: ${({ theme }) => theme.font.sizes.medium};
// `;

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
