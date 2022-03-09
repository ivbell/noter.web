import { Box, Button } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useAppDispatch } from '../../../lib/hooks/redux'
import { noteTableAdd } from '../../../lib/store/action/noteAction'

const TableAddNewLine: FC = () => {
  const dispatch = useAppDispatch()

  const addNewLine = () => {
    dispatch(noteTableAdd({ title: 'New line', time: { date: '00:00' } }))
  }
  return (
    <Box py={2}>
      <Button onClick={addNewLine}>Add new line</Button>
    </Box>
  )
}

export default TableAddNewLine
