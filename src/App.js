import React from 'react'
import Container from './components/Container'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container />
      </>
    </ThemeProvider>
  )
}

export default App
