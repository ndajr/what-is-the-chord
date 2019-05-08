import React from 'react'
import Main from './containers'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'
import { StateProvider } from './redux'
import { reducer, initialState } from './redux/reducer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <GlobalStyle />
        <Main />
      </StateProvider>
    </ThemeProvider>
  )
}

export default App
