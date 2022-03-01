//Components
import { TopHeader } from '../../components/TopHeader/TopHeader';
import { Header } from '../../components/Header/Header';
import { Heart } from '../../components/SvgComponents/Heart/Heart';
import { PokemonsList } from '../../components/PokemonsList/PokemonsList';
//Context
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext';
//React router dom
import { Link, useNavigate } from 'react-router-dom';
//Styled Components
import * as S from './Favorites.styles';
//SvgComponents
import { ReturnArrowIcon } from '../../components/SvgComponents/ReturnArrowIcon/ReturnArrowIcon';

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
        <PokemonsList pokemonsListData={favoritesPokemons} />
        <Link to="/" className="returnLink">
          <ReturnArrowIcon />
          <p>Voltar</p>
        </Link>
      </S.FavoritesContainer>
    </>
  );
};
