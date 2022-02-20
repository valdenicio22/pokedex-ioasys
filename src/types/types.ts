export type PokeInfo = {
  id: number
  img: string
  name: string
  isFavorite: boolean
  type: string
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

export type PokeCardData = Pick<
  PokeInfo,
  'id' | 'img' | 'name' | 'type' | 'isFavorite'
>
