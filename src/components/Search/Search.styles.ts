import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnFavorites = styled.button`
  background-color: transparent;
  border: none;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    width: 100%;
    margin-right: 2rem;

    padding: 4rem 0;
  `}
`;
