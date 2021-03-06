import { Box, Button, Container, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../lib/hooks/redux'
import { userSelector } from '../lib/store/reducers/UserSlice'
import Logo from './common/Logo'
import ToggleColorMode from './common/ToggleColorMode'

const Navbar: FC = () => {
  const { role, isAuth } = useAppSelector(userSelector)
  return (
    <Box py={3}>
      <Container maxW={'container.xl'}>
        <Stack justify={'space-between'} direction={['column', 'row']}>
          <Link to={'/'}>
            <Logo />
            <Box w={'40px'} position={'absolute'} rounded={4} top={4} left={'140px'} bgColor={'red.500'} textAlign={'center'}>beta</Box>
          </Link>
          <Stack direction={['column', 'row']}>
            <Link to={'/create'}>
              <Button variant={'text'}>Create</Button>
            </Link>
            {role === 'admin' && (
              <Link to={'/admin'}>
                <Button variant={'text'}>Admin panel</Button>
              </Link>
            )}
            {isAuth && (
              <Link to={'/collection'}>
                <Button variant={'text'}>Collection</Button>
              </Link>
            )}
          </Stack>
          <Stack direction={['column', 'row']} spacing={5} alignItems={'center'}>
            {!isAuth ? (
              <Link to={'/login'}>
                <Button>Login</Button>
              </Link>
            ) : (
              <Link to={'/profile'}>
                <Button>Profile</Button>
              </Link>
            )}
            <ToggleColorMode />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
