import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 42.8rem;
  width: ${({ theme }) => theme.containers.mobile};
  margin: 0 auto;
  padding: 5rem 0rem;

  @media (min-width: 428.5px) {
    width: ${({ theme }) => theme.containers.desktop};
    max-width: 80rem;
  }
`;
