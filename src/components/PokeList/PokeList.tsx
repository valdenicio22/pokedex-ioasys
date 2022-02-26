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

  return (
    <S.ListContainer>
      {pokemons.map((pokemonCard) => {
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
