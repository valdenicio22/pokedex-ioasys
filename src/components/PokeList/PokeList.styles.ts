import styled, { css } from 'styled-components'

export const ListContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.mobile};
  width: 100%;
  margin: 5rem auto;

  border: 1px solid black;
`
