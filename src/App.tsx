// Styled-components Theme
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles/Global';
//React-router-dom
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';
//Context
import { FavoritesPokemonsProvider } from './context/FavoritesPokemonsContext';

export function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <FavoritesPokemonsProvider>
          <Routes />
          <GlobalStyle />
        </FavoritesPokemonsProvider>
      </ThemeProvider>
    </Router>
  );
}
