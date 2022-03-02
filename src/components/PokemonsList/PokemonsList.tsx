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
  if (pokemonsListData.length === 0) return <h1>Pokemon não encontrado :(</h1>;

  return (
    <S.ListContainer>
      {pokemonsListData.map((pokemonCard) => {
        return (
          <>
            <PokeCard key={pokemonCard.id} pokemonCard={pokemonCard} />
          </>
        );
      })}
    </S.ListContainer>
  );
};
