import * as S from './PokemonType.styles'
import { pokemonTypeColor } from '../../utils/pokemons'

type PokemonTypeProps = {
  typeName: keyof typeof pokemonTypeColor
}

export const PokemonType = ({ typeName }: PokemonTypeProps) => {
  return <S.PtContainer typeName={typeName}>{typeName}</S.PtContainer>
}
