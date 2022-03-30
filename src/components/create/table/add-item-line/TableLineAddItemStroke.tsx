import {Button, Stack, Text, Tooltip} from '@chakra-ui/react'
import React, {FC} from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {TableItemHeading} from './TableLineAddItem'


interface PropsInput extends TableItemHeading {
  readonly onClick: React.MouseEventHandler
  readonly disabled: boolean
}

type Props = Omit<PropsInput, 'type'>

const TableLineAddItemStroke: FC<Props> = (props) => {
  return (
    <Stack direction={['column', 'row']} justify={'space-between'} align={'center'}>
      <Text textDecoration={props.disabled ? 'line-through' : ''}>{props.title}</Text>
      <Stack direction={['column', 'row']} align={'center'}>
        <Tooltip label={props.disabled ? 'Already added' : props.infoText} aria-label="A tooltip">
          <Button fontSize={'20px'} variant={'ghost'} colorScheme={props.disabled ? 'red' : 'blue'}>
            <AiOutlineInfoCircle/>
          </Button>
        </Tooltip>
        <Button disabled={props.disabled} variant={props.disabled ? 'outline' : 'solid'} onClick={props.onClick}>Add</Button>
      </Stack>
    </Stack>
  )
}

export default TableLineAddItemStroke
