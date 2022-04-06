import { Box, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React, { FC } from 'react'
import MainLayouts from '../components/layouts/MainLayouts'

const Home: FC = () => {
  const test = ''
  return (
    <MainLayouts>
      <Box py={3}>
        <Heading textAlign={'center'}>
          <Text display={'inline-block'} textColor={'lime.400'}>
            Noter
          </Text>
          - note editor for World of Warcraft (MRT)
        </Heading>
      </Box>
      <Box>
        <Wrap spacing={'30px'}>
          <WrapItem>img</WrapItem>
          <WrapItem>Text</WrapItem>
        </Wrap>
      </Box>
      {test}
    </MainLayouts>
  )
}

export default Home
