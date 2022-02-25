import { useState, useEffect } from 'react'
import { getPokemonsData } from '../../service/api'
import { PokeCard } from '../PokeCard/PokeCard'
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext'

import * as S from './PokeList.styles'

//Types
import { PokeInfo } from '../../types/types'

export const PokeList = () => {
  const [pokemons, setPokemons] = useState<PokeInfo[]>([])
  const { checkPokemonOnFavoriteList } = useFavoritesPokemons()

  /*
   pokemonImg
   https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg
   */

  useEffect(() => {
    try {
      getPokemonsData().then((pokemonsResult) => setPokemons(pokemonsResult))
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <S.ListContainer>
      {pokemons.map((pokemon) => {
        const isFavorite = checkPokemonOnFavoriteList(pokemon.id)
        return (
          <PokeCard
            pokemon={pokemon}
            key={pokemon.id}
            isFavorite={isFavorite}
          />
        )
      })}
    </S.ListContainer>
  )
}
