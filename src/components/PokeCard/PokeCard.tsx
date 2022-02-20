import bulbasaur from '../../assets/bulbasaur.svg'
import heart from '../../assets/heart.svg'

//Types
import { PokeInfo } from '../../types/types'

type PokeCardProps = {
  pokemon: PokeInfo
}

import * as S from './PokeCard.styles'

export const PokeCard = ({ pokemon }: PokeCardProps) => {
  return (
    <S.CardContainer pokemonType={pokemon.types[0].type.name}>
      <S.CardHeader pokemonType={pokemon.types[0].type.name}>
        <img src={heart} alt="heart" />
        <span>{pokemon.id}</span>
      </S.CardHeader>
      <S.CardImg
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />
      <S.CardFooter pokemonType={pokemon.types[0].type.name}>
        {pokemon.name}
      </S.CardFooter>
    </S.CardContainer>
    //add type to get the color
  )
}
