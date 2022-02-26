import { useState, useEffect } from 'react';
import { getPokemonCardData } from '../../service/api';
import { PokeCard } from '../PokeCard/PokeCard';
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';

import * as S from './PokeList.styles';

//Types
import { PokemonCard } from '../../types/types';

export const PokeList = () => {
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const { checkPokemonOnFavoriteList } = useFavoritesPokemons();

  useEffect(() => {
    try {
      getPokemonCardData().then((pokemonCard) => setPokemons(pokemonCard));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log('pokemons', pokemons);

  return (
    <S.ListContainer>
      {pokemons.map((pokemon) => {
        const isFavorite = checkPokemonOnFavoriteList(pokemon.id);
        return (
          <PokeCard
            pokemon={pokemon}
            key={pokemon.id}
            isFavorite={isFavorite}
          />
        );
      })}
    </S.ListContainer>
  );
};
