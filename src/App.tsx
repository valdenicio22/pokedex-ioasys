// Styled-components Theme
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { GlobalStyle } from './styles/Global'
//Components
import { TopHeader } from './components/TopHeader/TopHeader'
import { Header } from './components/Header/Header'
import { Search } from './components/Search/Search'
import { PokeList } from './components/PokeList/PokeList'
import { Favorites } from './components/Favorites/Favorites'
//React-router-dom
import { Link } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopHeader />
      <Header />
      <Search />
      <PokeList />
      <Link to="/favorites">Favorites</Link>
      <GlobalStyle />
    </ThemeProvider>
  )
}
