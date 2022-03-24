import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { noteSelector, TableItem } from '../../../lib/store/reducers/NoteSlice'
import TableLineAddItem from './TableLineAddItem'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useAppSelector } from '../../../lib/hooks/redux'
import TimeMaskTableItem from './input/TimeMaskTableItem'
import PhaseMaskInput from './input/PhaseMaskInput'

const TableLine: FC<TableItem> = (props) => {
  const { table } = useAppSelector(noteSelector)

  const [showEdit, setShowEdit] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)

  type TableState = Omit<typeof props, 'children'>
  const initialStateTableItem: TableState = {
    ...props,
    time: { phase: '', date: props.time?.date || '00:00' },
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

  const tableItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTableItem({ ...tableItem, [e.target.name]: e.target.value })
  }
  const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTableItem({
      ...tableItem,
      time: { date: e.target.value, phase: tableItem.time?.phase },
    })
  }
  const phaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTableItem({
      ...tableItem,
      time: { date: tableItem.time?.date || '00:00', phase: e.target.value || '' },
    })
  }

  const tableLineEdit = indexObjectTableItem.map((i, arr) => {
    switch (i) {
      case 'id':
        return null
      case 'time':
        return (
          <Stack key={arr} direction={['column', 'row']}>
            <Box display={'inline-block'} w={'52px'}>
              <TimeMaskTableItem value={tableItem.time?.date} onChange={dateChange} />
              <Text textAlign={'center'} fontSize={'x-small'}>
                MM:SS
              </Text>
            </Box>
            <Box display={'inline-block'} w={'32px'}>
              <PhaseMaskInput value={tableItem.time?.phase} onChange={phaseChange} />
              <Text textAlign={'center'} fontSize={'x-small'}>
                phase
              </Text>
            </Box>
          </Stack>
        )
      default:
        return (
          <Box key={arr} display={'inline-block'} w={'auto'}>
            <Input onChange={tableItemChange} key={arr} name={i} value={tableItem.title} />
            <Text pl={2} fontSize={'x-small'}>
              Title
            </Text>
          </Box>
        )
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
        <Stack direction={['column', 'row']} align={'top'}>
          {edit ? tableLineEdit : tableLine}
          <Box pt={edit ? '6px' : 0}>
            <TableLineAddItem />
          </Box>
        </Stack>

        {showEdit && (
          <Stack direction={['column', 'row']} align={'center'}>
            <Button onClick={() => setEdit(!edit)} colorScheme={'blue'} size={'xs'}>
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
