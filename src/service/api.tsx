import axios from 'axios'
import { PokemonBasicInfo, PokeInfo } from '../types/types'

export const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
})

// Get the pokemon id from the url using slice
// Get just the pokemon photo
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg
// return pokemonCardData, putting together thoses pices of data.

export const getPokemonsData = async () => {
  const response = await api.get<{ results: PokemonBasicInfo[] }>(
    'pokemon?limit=20&offset=0'
  )
  const pokemonList = response.data.results
  let pokemonIdList: PokeInfo['id'][] = []
  pokemonList.forEach((pokemon) =>
    pokemonIdList.push(+pokemon.url.slice(34, -1))
  )
  console.log(pokemonIdList)
}

export const getPokemonByName = async (pokemonName: PokeInfo['name']) => {
  const response = await api.get<PokeInfo>(`pokemon/${pokemonName}`)
  return response.data
}
