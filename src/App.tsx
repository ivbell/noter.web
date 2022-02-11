import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import React from 'react'
import theme from './lib/router/theme/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
