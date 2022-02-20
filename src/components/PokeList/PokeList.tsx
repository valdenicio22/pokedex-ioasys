import { useState } from 'react'
import { PokeCard } from '../PokeCard/PokeCard'
import * as S from './PokeList.styles'

type PokeCardData = {
  id?: 'string'
  img?: 'string'
  name?: 'string'
  isFavorite?: boolean
}

export const PokeList = () => {
  const [pokecardsData, setPokeCardsData] = useState<PokeCardData[]>([])

  return (
    <S.ListContainer>
      {pokecardsData.map((card) => (
        <PokeCard />
      ))}
    </S.ListContainer>
  )
}
