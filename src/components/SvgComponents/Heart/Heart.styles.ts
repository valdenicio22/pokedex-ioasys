import styled from 'styled-components';
import { LogoProps } from './Heart';

export const Wrapper = styled.div<LogoProps>`
  color: ${({ theme, color }) => theme.colors[color!]};
`;
