//Types
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
import { PokemonCard } from '../../types/types';
import { Heart } from '../SvgComponents/Heart/Heart';
import * as S from './PokeCard.styles';
import { useNavigate, useParams } from 'react-router-dom';

type PokeCardProps = {
  pokemonCard: PokemonCard;
  isFavorite: boolean;
};

export const PokeCard = ({ pokemonCard, isFavorite }: PokeCardProps) => {
  const navigate = useNavigate();
  const { pokemonName } = useParams();

  console.log(pokemonCard);

  const { toggleFavoritePokemons } = useFavoritesPokemons();

  const formattedId = (pokemonId: PokemonCard['id']) => {
    if (pokemonId < 10) return `#00${pokemonId}`;
    if (pokemonId < 100) return `#0${pokemonId}`;
    return `#${pokemonId}`;
  };

  return (
    <S.CardContainer pokemonType={pokemonCard.type}>
      <S.CardHeader pokemonType={pokemonCard.type}>
        <button onClick={() => toggleFavoritePokemons(pokemonCard)}>
          <Heart color={isFavorite ? 'primary' : 'white'} />
        </button>
        <span>{formattedId(pokemonCard.id)}</span>
      </S.CardHeader>
      <S.CardBtn
        onClick={() => navigate(`/pokemonDetails/${pokemonCard.name}`)}
      >
        <S.CardImg src={pokemonCard.img} alt={pokemonCard.name} />
        <S.CardFooter pokemonType={pokemonCard.type}>
          {pokemonCard.name}
        </S.CardFooter>
      </S.CardBtn>
    </S.CardContainer>
  );
};
