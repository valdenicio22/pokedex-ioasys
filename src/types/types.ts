import { pokemonTypeColor } from '../utils/pokemons'

export type PokeBasicInfo = {
  name: string
  url: string
}

export type PokeInfo = {
  id: number
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  name: string
  isFavorite: boolean
  types: Array<{
    type: {
      name: keyof typeof pokemonTypeColor
    }
  }>
  weight: string
  height: string
  abilities: string
  about?: string
  baseStats: {
    hp: string
    atk: string
    def: string
    satk: string
    sdef: string
    spd: string
  }
}
