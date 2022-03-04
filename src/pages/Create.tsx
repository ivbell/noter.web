import { Box, Heading, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React, { FC } from 'react'
import BossAbilityContainer from '../components/create/boss_ability/BossAbilityContainer'
import NameNote from '../components/create/NameNote'
import CreatePlayerContainer from '../components/create/player/CreatePlayerContainer'
import MainLayouts from '../components/layouts/MainLayouts'

const Create: FC = () => {
  return (
    <MainLayouts>
      <Heading size={'md'}>Create new note</Heading>
      <NameNote />
      <Wrap justify={'space-between'}>
        <WrapItem minW={320}>
          <Box>Table</Box>
          <a href="#" data-wowhead="item=2828">hai</a>
        </WrapItem>
        <WrapItem w={'320px'}>
          <Stack>
            <CreatePlayerContainer />
            <BossAbilityContainer />
          </Stack>
        </WrapItem>
      </Wrap>
    </MainLayouts>
  )
}

export default Create
