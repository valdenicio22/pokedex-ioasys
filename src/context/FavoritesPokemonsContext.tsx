import { createContext, ReactNode, useContext, useState } from 'react';
import { PokemonCard } from '../types/types';

type FavoritePokemonsProviderProps = {
  children: ReactNode;
};

type FavoritePokemonsContextData = {
  favoritesPokemons: PokemonCard[];
  addPokemonToFavoriteList: (pokemon: PokemonCard) => void;
  toggleFavoritePokemons: (pokemon: PokemonCard) => void;
  removePokemonFromFavoriteList: (pokemonId: PokemonCard['id']) => void;
  checkPokemonOnFavoriteList: (pokemonId: PokemonCard['id']) => boolean;
};

export const FavoritePokemonsContext =
  createContext<FavoritePokemonsContextData>({} as FavoritePokemonsContextData);

export const FavoritesPokemonsProvider = (
  props: FavoritePokemonsProviderProps
) => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<PokemonCard[]>(
    () => {
      const savedPokemons = localStorage.getItem('favoritesPokemons');
      if (!savedPokemons) return [];
      return JSON.parse(savedPokemons) as PokemonCard[];
    }
  );

  const checkPokemonOnFavoriteList = (pokemonId: PokemonCard['id']) => {
    return favoritesPokemons.some((pokemon) => pokemon.id === pokemonId);
  };

  const toggleFavoritePokemons = (pokemon: PokemonCard) =>
    checkPokemonOnFavoriteList(pokemon.id)
      ? removePokemonFromFavoriteList(pokemon.id)
      : addPokemonToFavoriteList(pokemon);

  const addPokemonToFavoriteList = (pokemon: PokemonCard) => {
    if (favoritesPokemons.length >= 12) return alert('Favorite list is full'); // Should pass false and the error msg
    const updatedFavoritePokemonList = [...favoritesPokemons, pokemon];

    localStorage.setItem(
      'favoritesPokemons',
      JSON.stringify(updatedFavoritePokemonList)
    );
    setFavoritesPokemons(updatedFavoritePokemonList);
  };

  const removePokemonFromFavoriteList = (pokemonId: PokemonCard['id']) => {
    const updatedFavoritePokemonList = favoritesPokemons.filter(
      (pokemon) => pokemon.id !== pokemonId
    );
    localStorage.setItem(
      'favoritesPokemons',
      JSON.stringify(updatedFavoritePokemonList)
    );
    setFavoritesPokemons(updatedFavoritePokemonList);
  };

  return (
    <FavoritePokemonsContext.Provider
      value={{
        addPokemonToFavoriteList,
        toggleFavoritePokemons,
        removePokemonFromFavoriteList,
        checkPokemonOnFavoriteList,
        favoritesPokemons,
      }}
    >
      {props.children}
    </FavoritePokemonsContext.Provider>
  );
};

export function useFavoritesPokemons() {
  const context = useContext(FavoritePokemonsContext);

  return context;
}
