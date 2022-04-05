import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import { TableItem } from '../../../lib/store/reducers/NoteSlice'
import BossAbilityItem from '../boss_ability/BossAbilityItem'

type Props = {
  indexObjectTableItem: string[]
  tableItem: TableItem
}

const TableLineNoEdit: FC<Props> = (props) => {
  const { indexObjectTableItem, tableItem } = props
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
      case 'comment':
        return <Box key={arr}>{tableItem.comment}</Box>
      case 'boss_ability':
        if (typeof tableItem.boss_ability === 'string') {
          return <Box key={arr}>{tableItem.boss_ability}</Box>
        } else {
          if (tableItem.boss_ability?.name && tableItem.boss_ability.id) {
            return (
              <BossAbilityItem
                key={arr}
                delete
                string
                name={tableItem.boss_ability.name}
                id={tableItem.boss_ability.id}
              />
            )
          }
        }
        break
      default:
        return <Box key={arr}>{i}</Box>
    }
  })

  return <>{tableLine}</>
}

export default TableLineNoEdit
