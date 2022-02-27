import { useState, useEffect } from 'react';
import { getPokemonCardData } from '../../service/api';
import { PokeCard } from '../PokeCard/PokeCard';
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';

import * as S from './PokeList.styles';

//Types
import { PokemonCard } from '../../types/types';

export const PokeList = () => {
  const { checkPokemonOnFavoriteList } = useFavoritesPokemons();

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
