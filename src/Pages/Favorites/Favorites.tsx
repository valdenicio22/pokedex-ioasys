import * as S from './Favorites.styles';
import returnArrow from '../../assets/returnArrow.svg';

import { Header } from '../../components/Header/Header';
import { Heart } from '../../components/SvgComponents/Heart/Heart';
import { TopHeader } from '../../components/TopHeader/TopHeader';
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
import { PokeCard } from '../../components/PokeCard/PokeCard';
import { Link, useNavigate } from 'react-router-dom';
import { ReturnArrowIcon } from '../../components/SvgComponents/ReturnArrowIcon/ReturnArrowIcon';

export const Favorites = () => {
  const { favoritesPokemons } = useFavoritesPokemons();
  const navigate = useNavigate();

  return (
    <>
      <TopHeader />
      <Header />
      <S.FavoriteContainer>
        <Heart />
        <h1>Meus Favoritos</h1>
      </S.FavoriteContainer>
      <S.FavoriteListContainer>
        {favoritesPokemons.map((pokemonCard) => (
          <PokeCard pokemonCard={pokemonCard} isFavorite={true} />
        ))}
      </S.FavoriteListContainer>
      <Link to="/">
        <ReturnArrowIcon />
        <p>Voltar</p>
      </Link>
      {/* <S.ButtonContainer type="button" onClick={() => navigate('/')}>
        <img src={returnArrow} alt="Return Arrow" />
        <p>Voltar</p>
      </S.ButtonContainer> */}
    </>
  );
};
