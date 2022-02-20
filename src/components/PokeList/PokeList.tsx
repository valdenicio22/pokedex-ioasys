import { useState, useEffect } from 'react'
import { api } from '../../service/api'
import { PokeCard } from '../PokeCard/PokeCard'
import * as S from './PokeList.styles'

//Types
import { PokeInfo } from '../../types/types'

type PokeCardData = Pick<
  PokeInfo,
  'id' | 'img' | 'name' | 'type' | 'isFavorite'
>

export const PokeList = () => {
  const [pokeCardsData, setPokeCardsData] = useState<PokeCardData[]>([])
  const [pokeNames, setPokeNames] = useState([''])

  useEffect(() => {
    try {
      api.get('pokemon?limit=20&offset=0').then(({ data }) => {
        const { results } = data
        for (let i = 0; i < results.length; i++) {
          api.get(`pokemon/${results[i].name}`).then(({ data }) => {
            const newPoke = {
              id: data.id,
              img: data.sprites.other.dream_world.front_default,
              name: data.species.name,
              type: data.types[0].type.name,
              isFavorite: false,
            }
            setPokeCardsData([...pokeCardsData, newPoke])
          })
        }
        // setPokeNames(data.results.name)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <S.ListContainer>
      {pokeCardsData.map((card) => (
        <PokeCard card={card} />
      ))}
    </S.ListContainer>
  )
}
