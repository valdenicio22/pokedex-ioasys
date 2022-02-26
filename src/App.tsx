// Styled-components Theme
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles/Global';
//React-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Pages
import { Home } from './Pages/Home/Home';
import { Favorites } from './Pages/Favorites/Favorites';
import { PokemonDetails } from './Pages/PokemonDetails/PokemonDetails';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
//Context
import { FavoritesPokemonsProvider } from './context/FavoritesPokemonsContext';

export function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <FavoritesPokemonsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route
              path="/pokemonDetails/:pokemonName"
              element={<PokemonDetails />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <GlobalStyle />
        </FavoritesPokemonsProvider>
      </ThemeProvider>
    </Router>
  );
}
