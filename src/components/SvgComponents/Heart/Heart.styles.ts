import styled from 'styled-components';

type HeartProps = {
  color?: 'primary' | 'white';
};

export const Wrapper = styled.div<HeartProps>`
  color: ${({ theme, color }) => theme.colors[color!]};
`;
