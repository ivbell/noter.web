import { Box, Button, Center, Heading, Input, Stack, useToast } from '@chakra-ui/react'
import axios, { AxiosError } from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookie from 'universal-cookie'
import MainLayouts from '../components/layouts/MainLayouts'
import { useAppDispatch, useAppSelector } from '../lib/hooks/redux'
import { userAuthToken } from '../lib/store/action/userAction'
import { userSelector } from '../lib/store/reducers/UserSlice'

interface UserState {
  readonly login: string
  readonly password: string
}

const Login: FC = () => {
  const initialUserState: UserState = {
    login: '',
    password: '',
  }

  const toast = useToast()
  const navigate = useNavigate()
  const cookie = new Cookie()
  const dispatch = useAppDispatch()

  const { isAuth } = useAppSelector(userSelector)

  useEffect(() => {
    if (isAuth) {
      navigate('/dashboard')
    }
  }, [])

  const [user, setUser] = useState<UserState>(initialUserState)
  const { login, password } = user

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const logged = () => {
    const validate = login.length > 0 && password.length > 0

    if (!validate) {
      toast({
        title: 'Error',
        status: 'error',
        description: 'Login or password cannot be empty',
        isClosable: true,
        duration: 5000,
      })
    } else {
      axios
        .post(`${import.meta.env.VITE_SERVER}/auth/login`, {
          login: login,
          password: password,
        })
        .then((res) => {
          const token = res.data.accessToken
          dispatch(userAuthToken(token))
          cookie.set('token', token, {
            path: '/',
            maxAge: 3600,
          })
          toast({
            title: 'Success login',
            status: 'success',
            description: 'Welcome to the Noter',
            isClosable: true,
            duration: 5000,
          })
          navigate('/profile')
        })
        .catch((err: AxiosError) => {
          if (err.response) {
            toast({
              title: err.response.data.message,
              status: 'error',
              isClosable: true,
              duration: 3000,
            })
          }
        })
    }
  }

  return (
    <MainLayouts>
      <Box>
        <Center h={500}>
          <Stack>
            <Heading textAlign={'center'}>Login</Heading>
            <Input value={login} name={'login'} onChange={handleUser} placeholder={'Login'} />
            <Input
              value={password}
              name={'password'}
              onChange={handleUser}
              placeholder={'Password'}
              type={'password'}
            />
            <Stack direction={['column', 'row']} justify={'space-between'}>
              <Button onClick={logged}>Login</Button>
              <Link to={'/registration'}>
                <Button colorScheme={'blue'}>Registration</Button>
              </Link>
            </Stack>
          </Stack>
        </Center>
      </Box>
    </MainLayouts>
  )
}

export default Login
