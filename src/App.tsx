// Styled-components Theme
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { GlobalStyle } from './styles/Global'
//Components
import { TopHeader } from './components/TopHeader/TopHeader'
import { Header } from './components/Header/Header'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopHeader />
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  )
}
