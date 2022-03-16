import { Box, Button, Stack } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { noteSelector, TableItem } from '../../../lib/store/reducers/NoteSlice'
import TableLineAddItem from './TableLineAddItem'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useAppSelector } from '../../../lib/hooks/redux'

const TableLine: FC<TableItem> = (props) => {
  const { table } = useAppSelector(noteSelector)

  const [showEdit, setShowEdit] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)

  type TableState = Omit<typeof props, 'children'>
  const initialStateTableItem: TableState = {
    ...props,
  }
  const [tableItem, setTableItem] = useState<TableState>(initialStateTableItem)

  const indexObjectTableItem = Object.keys(tableItem)
  const tableLine = indexObjectTableItem.map((i, arr) => {
    switch (i) {
      case 'id':
        return null
      case 'time':
        return (
          <Box key={arr}>
            {tableItem.time?.phase
              ? `${tableItem.time?.date}, ${tableItem.time?.phase}`
              : tableItem.time?.date}
          </Box>
        )
      case 'title':
        return <Box key={arr}>{tableItem.title}</Box>
      default:
        return <Box key={arr}>{i}</Box>
    }
  })

  return (
    <Box
      onMouseOver={() => setShowEdit(true)}
      onMouseLeave={() => setShowEdit(false)}
      position={'relative'}
      py={1.5}
      w={'full'}
      borderColor={'gray.100'}
      borderBottom={'1px'}>
      {table.length !== 1 && (
        <Stack spacing={1} position={'absolute'} left={-7} top={1}>
          <Button disabled={tableItem.id === 1} size={'xs'} variant={'link'}>
            <MdKeyboardArrowUp />
          </Button>
          <Button disabled={tableItem.id === table.length} size={'xs'} variant={'link'}>
            <MdKeyboardArrowDown />
          </Button>
        </Stack>
      )}

      <Stack direction={['column', 'row']} align={'center'} justify={'space-between'}>
        <Stack direction={['column', 'row']} align={'center'}>
          {tableLine}
          <Box>
            <TableLineAddItem />
          </Box>
        </Stack>

        {showEdit && (
          <Stack direction={['column', 'row']} align={'center'}>
            <Button onClick={() => setEdit(true)} colorScheme={'red'} size={'xs'}>
              edit
            </Button>
            <Button colorScheme={'red'} size={'xs'}>
              del
            </Button>
          </Stack>
        )}
      </Stack>
    </Box>
  )
}

export default TableLine
