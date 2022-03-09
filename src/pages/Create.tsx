import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import BossAbilityContainer from '../components/create/boss_ability/BossAbilityContainer'
import NameNote from '../components/create/NameNote'
import CreatePlayerContainer from '../components/create/player/CreatePlayerContainer'
import TableContainer from '../components/create/table/TableContainer'
import MainLayouts from '../components/layouts/MainLayouts'

const Create: FC = () => {
  return (
    <MainLayouts>
      <Heading size={'md'}>Create new note</Heading>
      <NameNote />
      <Stack justify={'space-between'} direction={['column', 'row']}>
        <Box w={'full'} minW={320}>
          <TableContainer />
        </Box>
        <Box w={'320px'}>
          <Stack>
            <CreatePlayerContainer />
            <BossAbilityContainer />
          </Stack>
        </Box>
      </Stack>
    </MainLayouts>
  )
}

export default Create
