import bulbasaur from '../../assets/bulbasaur.svg'
import heart from '../../assets/heart.svg'

//Types
import { PokeCardData } from '../../types/types'

type PokeCardProps = {
  card: PokeCardData
}

import * as S from './PokeCard.styles'

export const PokeCard = ({ card }: PokeCardProps) => {
  console.log(card)
  return (
    <S.CardContainer>
      <S.CardHeader>
        <img src={heart} alt="heart" />
        <span>{card.id}</span>
      </S.CardHeader>
      <S.CardImg src={card.img} alt={card.name} />
      <S.CardFooter>{card.name}</S.CardFooter>
    </S.CardContainer>
    //add type to get the color
  )
}
