import { useState, useEffect } from 'react';
import { getPokemonCardData } from '../../service/api';
import { PokeCard } from '../PokeCard/PokeCard';
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';

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
