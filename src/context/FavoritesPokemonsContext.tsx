import { createContext, ReactNode, useContext, useState } from 'react'
import { PokeInfo } from '../types/types'
import { pokemonTypeColor } from '../utils/pokemons'

type FavoritePokemonsProviderProps = {
  children: ReactNode
}

type FavoritePokemonsContextData = {
  favoritesPokemons: PokeInfo[]
  addPokemonToFavoriteList: (pokemon: PokeInfo) => void
  toggleFavoritePokemons: (pokemon: PokeInfo) => void
  removePokemonFromFavoriteList: (pokemonid: PokeInfo['id']) => void
  checkPokemonOnFavoriteList: (pokemonid: PokeInfo['id']) => void
}

export const FavoritePokemonsContext =
  createContext<FavoritePokemonsContextData>({} as FavoritePokemonsContextData)

export const FavoritesPokemonsProvider = (
  props: FavoritePokemonsProviderProps
) => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<PokeInfo[]>([])

  const checkPokemonOnFavoriteList = (pokemonId: PokeInfo['id']) => {
    return favoritesPokemons.some((pokemon) => pokemon.id === pokemonId)
  }

  const toggleFavoritePokemons = (pokemon: PokeInfo) => {
    if (checkPokemonOnFavoriteList(pokemon.id)) {
      removePokemonFromFavoriteList(pokemon.id)
    } else {
      addPokemonToFavoriteList(pokemon)
    }
  }

  const addPokemonToFavoriteList = (pokemon: PokeInfo) => {
    if (favoritesPokemons.length > 12) return alert('Favorite list is full') // Should pass false and the error msg

    const updatedFavoritePokemonList = [...favoritesPokemons, pokemon]
    setFavoritesPokemons(updatedFavoritePokemonList)
  }

  const removePokemonFromFavoriteList = (pokemonId: PokeInfo['id']) => {
    const updatedFavoritePokemonList = favoritesPokemons.filter(
      (pokemon) => pokemon.id !== pokemonId
    )
    setFavoritesPokemons(updatedFavoritePokemonList)
  }

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
  )
}

export function useFavoritesPokemons() {
  const context = useContext(FavoritePokemonsContext)

  return context
}
