import { Box, Button } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/redux'
import { noteTableAdd } from '../../../lib/store/action/noteAction'
import { noteSelector } from '../../../lib/store/reducers/NoteSlice'

const TableAddNewLine: FC = () => {
  const dispatch = useAppDispatch()
  const { table } = useAppSelector(noteSelector)
  const index = table.length + 1

  const addNewLine = () => {
    dispatch(
      noteTableAdd({
        time: { date: '00:00' },
        title: `New line ${index}`,
      })
    )
  }
  return (
    <Box py={2}>
      <Button onClick={addNewLine}>Add new line</Button>
    </Box>
  )
}

export default TableAddNewLine
