import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Fonts from './lib/theme/fonts'
import theme from './lib/theme/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <Fonts />
    </ChakraProvider>
  )
}

export default App
