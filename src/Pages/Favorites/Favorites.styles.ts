import styled, { css } from 'styled-components'

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
`
