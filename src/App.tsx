import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { useAppDispatch } from './lib/hooks/redux'
import useUserTokenCookie from './lib/hooks/useUserTokenCookie'
import { userAuthToken } from './lib/store/action/userAction'
import Fonts from './lib/theme/fonts'
import theme from './lib/theme/theme'

function App() {
  const { token } = useUserTokenCookie()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (token) {
      dispatch(userAuthToken(token))
    }
  }, [])

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
