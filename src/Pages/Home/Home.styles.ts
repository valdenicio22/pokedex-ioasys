import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 42.8rem;
  width: ${({ theme }) => theme.containers.mobile};
  margin: 0 auto;
  padding: 5rem 0rem;

  @media (width > 42.8) {
    max-width: 65rem;
  }
`;
