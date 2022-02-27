import styled, { css } from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10.4rem, 1fr));
  gap: ${({ theme }) => theme.font.sizes.medium};
`;
