import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import AddPlayer from './AddPlayer'
import PlayerList from './PlayerList'

const CreatePlayerContainer = () => {
  return (
    <Box py={2}>
      <Heading size={'md'}>Players:</Heading>
      <PlayerList />
      <AddPlayer />
    </Box>
  )
}

export default CreatePlayerContainer
