import { TopHeader } from '../../components/TopHeader/TopHeader'
import { Header } from '../../components/Header/Header'
import { Search } from '../../components/Search/Search'
import { useFavoritesPokemons } from '../../context/FavoritesPokemonsContext'

export const Favorites = () => {
  const { favoritesPokemons } = useFavoritesPokemons()

  console.log(favoritesPokemons)
  return (
    <div>
      <TopHeader />
      <Header />
      <Search />
      <ul>
        {favoritesPokemons.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}
