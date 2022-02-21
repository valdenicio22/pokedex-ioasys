import * as S from './Favorites.styles'

import { Header } from '../../components/Header/Header'
import { Heart } from '../../components/SvgComponents/Heart'
import { TopHeader } from '../../components/TopHeader/TopHeader'
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext'
import { PokeCard } from '../../components/PokeCard/PokeCard'

export const Favorites = () => {
  const { favoritesPokemons } = useFavoritesPokemons()

  console.log(favoritesPokemons)
  return (
    <>
      <TopHeader />
      <Header />
      <S.FavoriteContainer>
        <Heart width="30" height="30" fill="#EC0344" />
        <h1>Meus Favoritos</h1>
      </S.FavoriteContainer>
      {favoritesPokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} />
      ))}
    </>
  )
}
