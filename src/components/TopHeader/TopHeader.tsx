import { pokemonTypeColor } from '../../utils/pokemons';
import * as S from './TopHeader.styles';

type TopHeaderProps = {
  pokemonType?: keyof typeof pokemonTypeColor;
};

export const TopHeader = ({ pokemonType }: TopHeaderProps) => {
  return <S.TopHeaderContainer pokemonType={pokemonType} />;
};
