import { Box, Heading, Stack, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { FC } from 'react'
import BossAbilityContainer from '../components/create/boss_ability/BossAbilityContainer'
import NameNote from '../components/create/NameNote'
import CreatePlayerContainer from '../components/create/player/CreatePlayerContainer'
import TableContainer from '../components/create/table/TableContainer'
import MainLayouts from '../components/layouts/MainLayouts'
import { useClass } from '../lib/data/useClass'
import { useAppDispatch, useAppSelector } from '../lib/hooks/redux'
import { loadClass } from '../lib/store/action/dataAction'
import { dataSelector } from '../lib/store/reducers/DataSlice'
import { Classes } from '../lib/type'

const Create: FC = () => {
  const { classes } = useAppSelector(dataSelector)
  const dispatch = useAppDispatch()

  const classLoading = async () => {
    await axios.get<Classes[]>(`${import.meta.env.VITE_SERVER}/classes`).then((res) => {
      dispatch(loadClass(res.data))
    })
  }

  if (classes.length === 0) {
    classLoading()
  }

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
