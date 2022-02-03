import { Box, Container, Link, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import RouterLink from './common/RouterLink'

const Navbar: FC = () => {
  return (
    <Box
      py={2}
      borderBottom={'1px'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW={'container.xl'}>
        <Stack
          alignItems={'center'}
          justify={'space-between'}
          direction={['column', 'row']}
        >
          <Box>Logo</Box>

          <Box>
            <RouterLink to={'/create'}>Create</RouterLink>
          </Box>

          <Box>
            <Stack direction={['column', 'row']} alignItems={'center'}>
              <Box>Toggle</Box>
              <Box>Profile | Login</Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
