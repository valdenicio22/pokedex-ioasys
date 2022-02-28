//Types
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
import { PokemonCard } from '../../types/types';
import { Heart } from '../SvgComponents/Heart/Heart';
import * as S from './PokeCard.styles';
import { useNavigate } from 'react-router-dom';
import { formatId } from '../../utils/formatPokemon';

type PokeCardProps = {
  pokemonCard: PokemonCard;
  isFavorite: boolean;
};

export const PokeCard = ({ pokemonCard, isFavorite }: PokeCardProps) => {
  let navigate = useNavigate();
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
      <S.CardImg
        src={img}
        alt={name}
        onClick={() => navigate(`/pokemonDetails/${name}`)}
      />
      <S.CardFooter
        pokemonType={type}
        onClick={() => navigate(`/pokemonDetails/${name}`)}
      >
        {name}
      </S.CardFooter>
    </S.CardContainer>
  );
};
