import styled from 'styled-components';
import { pokemonTypeColor } from '../../utils/pokemons';

type Props = {
  pokemonType?: keyof typeof pokemonTypeColor;
};

export const TopHeaderContainer = styled.header<Props>`
  width: 100%;
  height: 1.5rem;
  background-color: ${(props) =>
    props.pokemonType
      ? props.theme.pokemonTypeColor[props.pokemonType]
      : props.theme.colors.primary};
`;
