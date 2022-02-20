import { useState, useEffect } from 'react'
import { api, getPokemonsData } from '../../service/api'
import { PokeCard } from '../PokeCard/PokeCard'
import * as S from './PokeList.styles'

//Types
import { PokeInfo } from '../../types/types'

export const PokeList = () => {
  const [pokemons, setPokemons] = useState<PokeInfo[]>([])
  const [pokeNames, setPokeNames] = useState([''])

  useEffect(() => {
    try {
      getPokemonsData().then((pokemonsResult) => setPokemons(pokemonsResult))
    } catch (error) {
      console.log(error)
    }
  }, [])

  console.log(pokemons)
  return (
    <S.ListContainer>
      {pokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </S.ListContainer>
  )
}
