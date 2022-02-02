import { Box, Button, Container, Link, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useColorModeValue } from '@chakra-ui/react'

const Navbar: FC = () => {
  return (
    <Box
      py={2}
      borderBottom={'1px'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW={'container.xl'}>
        <Stack
          direction={['column', 'row']}
          justify={'space-between'}
          alignItems={'center'}
        >
          <Link href='/'>Noter</Link>
          <Link href='/create'>Create</Link>
          <Link href='/login'>
            <Button>Log in</Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
