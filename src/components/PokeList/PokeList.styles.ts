import styled, { css } from 'styled-components'

export const ListContainer = styled.div`
  width: ${({ theme }) => theme.containers.mobile};
  margin: 5rem auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
