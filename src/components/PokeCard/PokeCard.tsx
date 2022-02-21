//Types
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext'
import { PokeInfo } from '../../types/types'
import { Heart } from '../SvgComponents/Heart'

type PokeCardProps = {
  pokemon: PokeInfo
}

import * as S from './PokeCard.styles'

export const PokeCard = ({ pokemon }: PokeCardProps) => {
  const { addPokemonToFavoriteList } = useFavoritesPokemons()

  return (
    <S.CardContainer pokemonType={pokemon.types[0].type.name}>
      <S.CardHeader pokemonType={pokemon.types[0].type.name}>
        <button onClick={() => addPokemonToFavoriteList(pokemon)}>
          <Heart width={'12'} height={'12'} fill={'#FFFFFF'} />
        </button>
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
