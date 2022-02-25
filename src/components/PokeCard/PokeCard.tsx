//Types
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext'
import { PokemonCard } from '../../types/types'
import { Heart } from '../SvgComponents/Heart'
import * as S from './PokeCard.styles'
import { useNavigate, useParams } from 'react-router-dom'

type PokeCardProps = {
  pokemon: PokemonCard
  isFavorite: boolean
}

export const PokeCard = ({ pokemon, isFavorite }: PokeCardProps) => {
  const navigate = useNavigate()
  const { pokemonName } = useParams()

  const { toggleFavoritePokemons } = useFavoritesPokemons()

  const handleDetailsPokemonPage = () => {
    console.log('Oni-Chan')
  }

  return (
    <S.CardContainer pokemonType={pokemon.types[0].type.name}>
      <S.CardHeader pokemonType={pokemon.types[0].type.name}>
        <button onClick={() => toggleFavoritePokemons(pokemon)}>
          <Heart
            width={'12'}
            height={'12'}
            fill={isFavorite ? '#EC0344' : '#FFFFFF'}
          />
        </button>
        <span>{pokemon.id}</span>
      </S.CardHeader>
      <S.CardBtn onClick={() => navigate(`/pokemonDetails/${pokemon.name}`)}>
        <S.CardImg
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
        <S.CardFooter pokemonType={pokemon.types[0].type.name}>
          {pokemon.name}
        </S.CardFooter>
      </S.CardBtn>
    </S.CardContainer>
    //add type to get the color
  )
}
