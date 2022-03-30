import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
} from '@chakra-ui/react'
import React, {FC} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {useAppDispatch, useAppSelector} from '../../../../lib/hooks/redux'
import {tableItemAddNewFeature} from '../../../../lib/store/action/noteAction'
import TableLineAddItemStroke from './TableLineAddItemStroke'
import {noteSelector, TableItemName} from '../../../../lib/store/reducers/NoteSlice'

export interface TableItemHeading {
  readonly type: TableItemName
  readonly title: string
  readonly infoText: string
}

type Props = {
  idTableItem: number
}

const TableLineAddItem: FC<Props> = (props) => {
  const dispatch = useAppDispatch()
  const {table} = useAppSelector(noteSelector)

  const tableItemsHeading: TableItemHeading[] = [
    {type: 'time', title: 'Time', infoText: 'Time in battle or from a certain phase'},
    {type: 'title', title: 'Title', infoText: 'Time in battle or from a certain phase'},
    {type: 'players', title: 'Players', infoText: 'Time in battle or from a certain phase'},
    {type: 'boss_ability', title: 'Boss Ability', infoText: 'Time in battle or from a certain phase'},
    {type: 'comment', title: 'Comment', infoText: 'Time in battle or from a certain phase'},
  ]

  const addNewItem = (type: TableItemName) => {
    dispatch(tableItemAddNewFeature({id: props.idTableItem, type: type}))
  }

  const currentTableLine = table.find(item => item.id === props.idTableItem)

  const itemHeadingList = tableItemsHeading.map((i) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filterTypes = Object.keys(currentTableLine)
    return (
      <TableLineAddItemStroke
        key={i.title}
        title={i.title}
        infoText={i.infoText}
        disabled={filterTypes.includes(i.type)}
        onClick={() => addNewItem(i.type)}
      />
    )
  })
  return (
    <Popover>
      <PopoverTrigger>
        <Button size={'xs'}>
          <AiOutlinePlus/>
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow/>
          <PopoverHeader>Add item in line</PopoverHeader>
          <PopoverCloseButton/>
          <PopoverBody>
            <Stack>{itemHeadingList}</Stack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default TableLineAddItem
