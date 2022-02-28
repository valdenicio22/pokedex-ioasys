//components
import { PokeCard } from '../PokeCard/PokeCard';
//context
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
//styles
import * as S from './PokemonsList.styles';
//Types
import { PokemonCard } from '../../types/types';

type pokemonsListDataProps = {
  pokemonsListData: PokemonCard[];
};

export const PokemonsList = ({ pokemonsListData }: pokemonsListDataProps) => {
  const { checkPokemonOnFavoriteList } = useFavoritesPokemons();

  return (
    <S.ListContainer>
      {pokemonsListData.map((pokemonCard) => {
        const isFavorite = checkPokemonOnFavoriteList(pokemonCard.id);
        return (
          <PokeCard
            key={pokemonCard.id}
            pokemonCard={pokemonCard}
            isFavorite={isFavorite}
          />
        );
      })}
    </S.ListContainer>
  );
};
