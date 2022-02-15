import { Box, Button, Container, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Logo from './common/Logo'
import ToggleColorMode from './common/ToggleColorMode'

const Navbar: FC = () => {
  const userRole = 'admin'
  return (
    <Box py={3}>
      <Container maxW={'container.xl'}>
        <Stack justify={'space-between'} direction={['column', 'row']}>
          <Link to={'/'}>
            <Logo />
          </Link>
          <Stack direction={['column', 'row']}>
            <Link to={'/create'}>
              <Button variant={'text'}>Create</Button>
            </Link>
            {userRole === 'admin' && (
              <Link to={'/admin'}>
                <Button variant={'text'}>Admin panel</Button>
              </Link>
            )}
          </Stack>
          <Stack
            direction={['column', 'row']}
            spacing={5}
            alignItems={'center'}>
            <Link to={'/login'}>
              <Button>Login</Button>
            </Link>
            <ToggleColorMode />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
