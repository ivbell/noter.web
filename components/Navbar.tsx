import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import logo from '../public/logo.svg'
import Image from 'next/image'
import { HiOutlineSun } from 'react-icons/hi'

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
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
          <Link href='/'>
            <Stack direction={['column', 'row']} alignItems={'center'}>
              <Image src={logo} alt={'Noter logo'} />
              <Box>
                <Text fontSize={'xl'}>Noter</Text>
              </Box>
            </Stack>
          </Link>
          <Link href='/create'>Create</Link>
          <Box>
            <Stack direction={['column', 'row']}>
              <Button
                onClick={toggleColorMode}
                variant={'solid'}
                colorScheme={useColorModeValue('blue', 'yellow')}
              >
                <HiOutlineSun />
              </Button>
              <Link href='/login'>
                <Button>Log in</Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
