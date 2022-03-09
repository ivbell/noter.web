import { Box, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { TableItem } from '../../../lib/store/reducers/NoteSlice'
import TimeTableLine from './line/time/TimeTableLine'
import TableLineAddItem from './TableLineAddItem'

const TableLine: FC<TableItem> = (props) => {
  const { title, id, boss_ability, comment, players, time } = props
  return (
    <Box py={1} w={'full'} borderColor={'gray.100'} borderBottom={'1px'}>
      <Stack direction={['column', 'row']} align={'center'}>
        {time && <TimeTableLine {...time} />}
        <Box>{title}</Box>
        <Box>
          <TableLineAddItem />
        </Box>
      </Stack>
    </Box>
  )
}

export default TableLine
