import { createContext, ReactNode, useContext, useState } from 'react'
import { PokeInfo } from '../types/types'

type FavoritePokemonsProviderProps = {
  children: ReactNode
}

type FavoritePokemonsContextData = {
  favoritesPokemons: PokeInfo[]
  addPokemonToFavoriteList: (pokemon: PokeInfo) => void
}

export const FavoritePokemonsContext =
  createContext<FavoritePokemonsContextData>({} as FavoritePokemonsContextData)

export const FavoritesPokemonsProvider = (
  props: FavoritePokemonsProviderProps
) => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<PokeInfo[]>([])

  const addPokemonToFavoriteList = (pokemon: PokeInfo) => {
    setFavoritesPokemons([...favoritesPokemons, pokemon])
  }

  return (
    <FavoritePokemonsContext.Provider
      value={{ addPokemonToFavoriteList, favoritesPokemons }}
    >
      {props.children}
    </FavoritePokemonsContext.Provider>
  )
}

export function useFavoritesPokemons() {
  const context = useContext(FavoritePokemonsContext)

  return context
}
