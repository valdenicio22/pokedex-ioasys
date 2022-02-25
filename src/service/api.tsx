import axios from 'axios'
import { PokemonBasicInfo, PokeInfo, PokemonCard} from '../types/types'

export const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
})

export const getPokemonCardData = async () => {
  const responsePokemonNameUrl = await api.get<{ results: PokemonBasicInfo[] }>(
    'pokemon?limit=20&offset=0'
  )
  const pokemonList = responsePokemonNameUrl.data.results

  let pokemonIdList: PokeInfo['id'][] = []
  pokemonList.forEach(
    (pokemon) => pokemonIdList.push(+pokemon.url.slice(34, -1)) // getting the pokemonId out of the url
  )
  const pendingPokemonImgList = pokemonIdList.map((id) =>
    axios.get<string>(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    )
  )
  const responsePokemonImgList = await Promise.all(pendingPokemonImgList)

  const pokemonCard: PokemonCard[] = pokemonIdList.map((id, index) => {
    return {
      id: id,
      name: pokemonList[index].name,
      img: responsePokemonImgList[index].data,
    }
  })
  return pokemonCard.map((Card) => Card)
}

export const getPokemonByName = async (pokemonName: PokeInfo['name']) => {
  const response = await api.get<PokeInfo>(`pokemon/${pokemonName}`)
  return response.data
}
