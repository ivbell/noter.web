import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useAppSelector } from '../../../lib/hooks/redux'
import { noteSelector } from '../../../lib/store/reducers/NoteSlice'
import TableAddNewLine from './TableAddNewLine'
import TableLine from './TableLine'

const TableContainer: FC = () => {
  const { table } = useAppSelector(noteSelector)
  const tableListItem = table.map((item) => <TableLine key={item.id} {...item} />)
  return (
    <Box py={2}>
      {table.length > 0 && tableListItem}
      <TableAddNewLine />
    </Box>
  )
}

export default TableContainer
