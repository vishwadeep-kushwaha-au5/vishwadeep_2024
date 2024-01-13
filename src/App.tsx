
import { ThemeProvider } from 'styled-components'
import Router from './router'
import { theme } from './styled/theme'
import GlobalStyles from './styled/globalStyles'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router/>
    </ThemeProvider>
  )
}

export default App
