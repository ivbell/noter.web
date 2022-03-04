import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useOneClass } from '../../../lib/data/useOneClass'
import { useOneSpec } from '../../../lib/data/useOneSpec'
import { useAppDispatch } from '../../../lib/hooks/redux'
import { notePlayerDelete } from '../../../lib/store/action/noteAction'
import { PlayerState } from '../../../lib/store/reducers/NoteSlice'

type Props = {
  name: string
  class_id?: string
  spec_id?: string
  delete?: boolean
}

const PlayerItem: FC<Props> = (props) => {
  const name = props.name.length > 29 ? props.name.substr(0, 26) + '...' : props.name
  const initialPlayerState: PlayerState = {
    name: name,
    class_id: props.class_id,
    spec_id: props.spec_id,
  }
  const [player, setPlayer] = useState<PlayerState>(initialPlayerState)
  const { oneClass } = useOneClass(props.delete ? props.class_id : player.class_id)
  const { oneSpec } = useOneSpec(props.delete ? props.spec_id : player.spec_id)

  const dispatch = useAppDispatch()
  const deleteClass = (name_1: string) => {
    dispatch(notePlayerDelete(name_1))
  }

  const avatarSrc = props.delete
    ? props.spec_id
      ? oneSpec?.icon
      : oneClass?.icon
    : player.spec_id
    ? oneSpec?.icon
    : oneClass?.icon

  const playerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer({ ...player, [e.target.name]: e.target.value })
  }

  const savePlayer = () => {
    console.log(player)
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Box
          position={'relative'}
          cursor={'pointer'}
          rounded={'8px'}
          p={2}
          border={'1px'}
          maxW={'320px'}
          w={'auto'}
          display={'inline-block'}
          borderColor={oneClass?.color || useColorModeValue('gray.400', 'gray.600')}>
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Avatar bgColor={oneClass?.color} size={'sm'} src={avatarSrc} name={player.name} />
            <Text fontSize={'sm'}>{name}</Text>
          </Stack>
          {!props.delete && (
            <Box
              onClick={() => deleteClass(player.name)}
              _hover={{ color: 'red.400' }}
              color={'red.200'}
              rounded={'full'}
              bgColor={useColorModeValue('white', 'gray.800')}
              cursor={'pointer'}
              right={'-5px'}
              top={'-5px'}
              position={'absolute'}>
              <AiOutlineCloseCircle />
            </Box>
          )}
        </Box>
      </PopoverTrigger>
      {!props.delete && (
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Edit player: {props.name}</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Stack>
                <FormControl>
                  <FormLabel htmlFor={'name'}>Player name:</FormLabel>
                  <Input id={'name'} name={'name'} value={player.name} onChange={playerHandler} />
                </FormControl>
              </Stack>
            </PopoverBody>
            <PopoverFooter>
              <Stack direction={['column', 'row']} justify={'end'}>
                <Button variant={'ghost'}>Save</Button>
                <Button onClick={() => setPlayer(initialPlayerState)} colorScheme={'blue'}>
                  Reset
                </Button>
              </Stack>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      )}
    </Popover>
  )
}

export default PlayerItem
