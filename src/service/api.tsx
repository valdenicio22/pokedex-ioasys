import axios from 'axios'
import { PokeBasicInfo, PokeInfo } from '../types/types'

export const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
})

// Get the pokemon id from the url using slice
// Get just the pokemon photo
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg
// return pokemonCardData, putting together thoses pices of data.

export const getPokemonsData = async () => {
  const response = await api.get<{ results: PokeBasicInfo[] }>(
    'pokemon?limit=20&offset=0'
  )
  const pokeList = response.data.results
  const pendingPokeListInfo = pokeList.map((poke) => {
    return axios.get<PokeInfo>(poke.url)
  })
  const pokeListInfo = await Promise.all(pendingPokeListInfo)
  return pokeListInfo.map((poke) => poke.data)
}

export const getPokemonByName = async (pokemonName: PokeInfo['name']) => {
  const response = await api.get<PokeInfo>(`pokemon/${pokemonName}`)
  return response.data
}
