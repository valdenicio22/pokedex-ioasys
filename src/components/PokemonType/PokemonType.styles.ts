import styled, { css } from 'styled-components';
import { pokemonTypeColor } from '../../utils/pokemons';

type PtContainerProps = {
  typeName: keyof typeof pokemonTypeColor;
};
//Pt = Pokemon Type
export const PtContainer = styled.div<PtContainerProps>`
  width: fit-content;
  height: 2rem;
  border-radius: 1rem;
  padding: 0.2rem 0.8rem;
  ${({ theme, typeName }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.bold};
    line-height: 1.6rem;

    color: ${theme.colors.white};
    background-color: ${theme.pokemonTypeColor[typeName]};
  `}
`;
