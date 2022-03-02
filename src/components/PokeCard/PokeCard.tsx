//Context
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
//Svg Components
import { Heart } from '../SvgComponents/Heart/Heart';
//React-Router-Dom
import { useNavigate } from 'react-router-dom';
//Styled-Components
import * as S from './PokeCard.styles';
//Utils
import { formatId } from '../../utils/formatPokemon';
//Types
import { PokemonCard } from '../../types/types';

type PokeCardProps = {
  pokemonCard: PokemonCard;
};

export const PokeCard = ({ pokemonCard }: PokeCardProps) => {
  let navigate = useNavigate();
  const { id, name, img, type } = pokemonCard;

  const { toggleFavoritePokemons, checkPokemonOnFavoriteList } =
    useFavoritesPokemons();
  const isFavorite = checkPokemonOnFavoriteList(pokemonCard.id);

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
