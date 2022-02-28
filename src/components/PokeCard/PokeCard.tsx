//Types
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
import { PokemonCard } from '../../types/types';
import { Heart } from '../SvgComponents/Heart/Heart';
import * as S from './PokeCard.styles';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { formatId } from '../../utils/formatPokemon';

type PokeCardProps = {
  pokemonCard: PokemonCard;
  isFavorite: boolean;
};

export const PokeCard = ({ pokemonCard, isFavorite }: PokeCardProps) => {
  const { id, name, img, type } = pokemonCard;
  // const navigate = useNavigate();
  // const { pokemonName } = useParams();

  const { toggleFavoritePokemons } = useFavoritesPokemons();

  return (
    <S.CardContainer pokemonType={type}>
      <S.CardHeader pokemonType={type}>
        <button onClick={() => toggleFavoritePokemons(pokemonCard)}>
          <Heart color={isFavorite ? 'primary' : 'white'} />
        </button>
        <span>{formatId(id)}</span>
      </S.CardHeader>
      <Link to={`/pokemonDetails/${name}`}>
        <S.CardBtn>
          <S.CardImg src={img} alt={name} />
          <S.CardFooter pokemonType={type}>{name}</S.CardFooter>
        </S.CardBtn>
      </Link>
    </S.CardContainer>
  );
};
