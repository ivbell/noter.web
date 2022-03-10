import { ChakraProvider } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { useAppDispatch, useAppSelector } from './lib/hooks/redux'
import useUserTokenCookie from './lib/hooks/useUserTokenCookie'
import { userAuthToken } from './lib/store/action/userAction'
import { userSelector } from './lib/store/reducers/UserSlice'
import Fonts from './lib/theme/fonts'
import theme from './lib/theme/theme'

function App() {
  const { token } = useUserTokenCookie()
  const dispatch = useAppDispatch()
  const { isAuth, role } = useAppSelector(userSelector)

  useEffect(() => {
    if (token) {
      dispatch(userAuthToken(token))
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRouter isAuth={isAuth} role={role} />
      </BrowserRouter>
      <Fonts />
    </ChakraProvider>
  )
}

export default App
