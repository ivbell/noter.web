import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AppRouter from './components/AppRouter'
import GlobalStyles from './lib/theme/global'
import { baseTheme } from './lib/theme/theme'

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
