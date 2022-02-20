import axios from 'axios'
import { PokeBasicInfo, PokeInfo } from '../types/types'

export const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
})

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
