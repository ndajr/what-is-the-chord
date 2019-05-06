import React from 'react'
import MainContainer from './containers/MainContainer'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <MainContainer />
      </>
    </ThemeProvider>
  )
}

export default App
