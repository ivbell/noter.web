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
  Select,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useOneClass } from '../../../lib/data/useOneClass'
import { useOneSpec } from '../../../lib/data/useOneSpec'
import { useSpeClass } from '../../../lib/data/useSpecClass'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/redux'
import { notePlayerDelete, notePlayerUpdate } from '../../../lib/store/action/noteAction'
import { dataSelector } from '../../../lib/store/reducers/DataSlice'
import { PlayerState } from '../../../lib/store/reducers/NoteSlice'

type Props = {
  name: string
  class_id?: string
  spec_id?: string
  delete?: boolean
}

const PlayerItem: FC<Props> = (props) => {
  const toast = useToast()
  const dispatch = useAppDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { classes } = useAppSelector(dataSelector)

  const name = props.name.length > 29 ? props.name.substr(0, 26) + '...' : props.name
  const initialPlayerState: PlayerState = {
    name: name,
    class_id: props.class_id,
    spec_id: props.spec_id,
  }
  const [player, setPlayer] = useState<PlayerState>(initialPlayerState)
  const { classSpec, isClassSpecLoading } = useSpeClass(player.class_id)
  const { oneClass } = useOneClass(props.delete ? props.class_id : player.class_id)
  const { oneSpec } = useOneSpec(props.delete ? props.spec_id : player.spec_id)

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

  const playerSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === 'class_id') {
      setPlayer({ ...player, [e.target.name]: e.target.value, spec_id: '' })
    } else {
      setPlayer({ ...player, [e.target.name]: e.target.value })
    }
  }

  const playerChange: boolean =
    player.name === props.name &&
    player.class_id === props.class_id &&
    player.spec_id === props.spec_id

  const savePlayer = () => {
    if (playerChange) {
      toast({
        status: 'error',
        title: 'Error',
        description: '',
      })
    } else {
      dispatch(notePlayerUpdate({ ...player, old_name: props.name }))
      onClose()
      toast({
        status: 'success',
        title: 'Player update',
        isClosable: true,
        duration: 5000,
      })
    }
  }

  const classesList = classes.map((c) => (
    <option key={c._id} value={c._id}>
      {c.name}
    </option>
  ))

  const specClassPlayerList = classSpec?.map((s) => (
    <option key={s._id} value={s._id}>
      {s.name}
    </option>
  ))

  return (
    <Popover isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
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
                <FormControl>
                  <FormLabel htmlFor={'class_id'}>Player class:</FormLabel>
                  <Select
                    id={'class_id'}
                    name={'class_id'}
                    value={player.class_id}
                    onChange={playerSelectHandler}>
                    {classesList}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={'spec_id'}>Player class:</FormLabel>
                  <Select
                    id={'spec_id'}
                    name={'spec_id'}
                    value={player.spec_id}
                    placeholder={'Null'}
                    onChange={playerSelectHandler}>
                    {specClassPlayerList}
                  </Select>
                </FormControl>
              </Stack>
            </PopoverBody>
            <PopoverFooter>
              <Stack direction={['column', 'row']} justify={'end'}>
                <Button disabled={playerChange} onClick={savePlayer} variant={'ghost'}>
                  Save
                </Button>
                <Button
                  disabled={playerChange}
                  onClick={() => setPlayer(initialPlayerState)}
                  colorScheme={'blue'}>
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
