import * as S from './Favorites.styles';
import returnArrow from '../../assets/returnArrow.svg';

import { Header } from '../../components/Header/Header';
import { Heart } from '../../components/SvgComponents/Heart/Heart';
import { TopHeader } from '../../components/TopHeader/TopHeader';
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
import { Link, useNavigate } from 'react-router-dom';
import { ReturnArrowIcon } from '../../components/SvgComponents/ReturnArrowIcon/ReturnArrowIcon';
import { PokemonsList } from '../../components/PokemonsList/PokemonsList';

export const Favorites = () => {
  const { favoritesPokemons } = useFavoritesPokemons();
  const navigate = useNavigate();

  return (
    <>
      <TopHeader />
      <S.FavoritesContainer>
        <Header />
        <S.MyFavorites>
          <Heart size={30} color={'primary'} />
          <h1>Meus Favoritos</h1>
        </S.MyFavorites>
        {/* <S.FavoriteListContainer> */}
        <PokemonsList pokemonsListData={favoritesPokemons} />
        {/* </S.FavoriteListContainer> */}
        <Link to="/" className="returnLink">
          <ReturnArrowIcon />
          <p>Voltar</p>
        </Link>
      </S.FavoritesContainer>
      {/* <S.ButtonContainer type="button" onClick={() => navigate('/')}>
        <img src={returnArrow} alt="Return Arrow" />
        <p>Voltar</p>
      </S.ButtonContainer> */}
    </>
  );
};
