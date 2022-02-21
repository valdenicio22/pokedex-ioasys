import * as S from './Favorites.styles'
import returnArrow from '../../assets/returnArrow.svg'

import { Header } from '../../components/Header/Header'
import { Heart } from '../../components/SvgComponents/Heart'
import { TopHeader } from '../../components/TopHeader/TopHeader'
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext'
import { PokeCard } from '../../components/PokeCard/PokeCard'
import { useNavigate } from 'react-router-dom'

export const Favorites = () => {
  const { favoritesPokemons } = useFavoritesPokemons()
  const navigate = useNavigate()

  console.log(favoritesPokemons)
  return (
    <>
      <TopHeader />
      <Header />
      <S.FavoriteContainer>
        <Heart width="30" height="30" fill="#EC0344" />
        <h1>Meus Favoritos</h1>
      </S.FavoriteContainer>
      <S.FavoriteListContainer>
        {favoritesPokemons.map((pokemon) => (
          <PokeCard pokemon={pokemon} />
        ))}
      </S.FavoriteListContainer>
      <S.ButtonContainer type="button" onClick={() => navigate('/')}>
        <img src={returnArrow} alt="Return Arrow" />
        <p>Voltar</p>
      </S.ButtonContainer>
    </>
  )
}
