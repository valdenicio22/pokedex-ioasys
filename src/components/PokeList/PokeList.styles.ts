import styled, { css } from 'styled-components';

export const ListContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.mobile};
  width: 100%;
  margin: 5rem auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.font.sizes.medium};
`;
