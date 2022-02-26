//Types
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
import { PokemonCard } from '../../types/types';
import { Heart } from '../SvgComponents/Heart';
import * as S from './PokeCard.styles';
import { useNavigate, useParams } from 'react-router-dom';

type PokeCardProps = {
  pokemon: PokemonCard;
  isFavorite: boolean;
};

export const PokeCard = ({ pokemon, isFavorite }: PokeCardProps) => {
  const navigate = useNavigate();
  const { pokemonName } = useParams();

  console.log(pokemon);
  console.log(pokemon.type);

  const { toggleFavoritePokemons } = useFavoritesPokemons();

  const handleDetailsPokemonPage = () => {
    console.log('Oni-Chan');
  };

  const formattedId = (pokemonId: PokemonCard['id']) => {
    if (pokemonId < 10) return `#00${pokemonId}`;
    if (pokemonId < 100) return `#0${pokemonId}`;
    return `#${pokemonId}`;
  };

  return (
    <S.CardContainer pokemonType={pokemon.type}>
      <S.CardHeader pokemonType={pokemon.type}>
        <button onClick={() => toggleFavoritePokemons(pokemon)}>
          <Heart
            width={'12'}
            height={'12'}
            fill={isFavorite ? '#EC0344' : '#FFFFFF'}
          />
        </button>
        <span>{formattedId(pokemon.id)}</span>
      </S.CardHeader>
      <S.CardBtn onClick={() => navigate(`/pokemonDetails/${pokemon.name}`)}>
        <S.CardImg src={pokemon.img} alt={pokemon.name} />
        <S.CardFooter pokemonType={pokemon.type}>{pokemon.name}</S.CardFooter>
      </S.CardBtn>
    </S.CardContainer>
    //add type to get the color
  );
};
