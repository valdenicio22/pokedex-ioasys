import bulbasaur from '../../assets/bulbasaur.svg'
import heart from '../../assets/heart.svg'

//Types
import { PokeInfo } from '../../types/types'
PokeCardData

type PokeCardProps = {
  card
}

import * as S from './PokeCard.styles'

export const PokeCard = () => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <img src={heart} alt="heart" />
        <span>@001</span>
      </S.CardHeader>
      <S.CardImg src={bulbasaur} alt="bulbasaur" />
      <S.CardFooter>bulbasaur</S.CardFooter>
    </S.CardContainer>
  )
}
