//Types
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
import { PokemonCard } from '../../types/types';
import { Heart } from '../SvgComponents/Heart/Heart';
import * as S from './PokeCard.styles';
import { Link } from 'react-router-dom';
import { formatId } from '../../utils/formatPokemon';

type PokeCardProps = {
  pokemonCard: PokemonCard;
  isFavorite: boolean;
};

export const PokeCard = ({ pokemonCard, isFavorite }: PokeCardProps) => {
  const { id, name, img, type } = pokemonCard;

  const { toggleFavoritePokemons } = useFavoritesPokemons();

  return (
    <S.CardContainer pokemonType={type}>
      <S.CardHeader pokemonType={type}>
        <button onClick={() => toggleFavoritePokemons(pokemonCard)}>
          <Heart size={12} color={isFavorite ? 'primary' : 'white'} />
        </button>
        <span>{formatId(id)}</span>
      </S.CardHeader>
      <S.CardImg src={img} alt={name} />
      {/* <Link to={`/pokemonDetails/${name}`}> */}
      <S.CardFooter pokemonType={type}>{name}</S.CardFooter>
      {/* </Link> */}
    </S.CardContainer>
  );
};
