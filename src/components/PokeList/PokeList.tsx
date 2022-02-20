import { useState, useEffect } from 'react'
import { api } from '../../service/api'
import { PokeCard } from '../PokeCard/PokeCard'
import * as S from './PokeList.styles'

//Types
import { PokeInfo, PokeCardData } from '../../types/types'

export const PokeList = () => {
  const [pokeCardsData, setPokeCardsData] = useState<PokeCardData[]>([])
  const [pokeNames, setPokeNames] = useState([''])

  useEffect(() => {
    try {
      const pokesData = async () => {
        const pokeList = await api.get('pokemon?limit=20&offset=0')
        const { data: pokeListData } = pokeList
        const pokeListInfo = pokeListData
        console.log(pokeListData)
      }

      pokesData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <S.ListContainer>
      {/* {pokeCardsData.map((card) => console.log(card))} */}
    </S.ListContainer>
  )
}
