import React, { FC, useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  useToast,
} from '@chakra-ui/react'
import PlayerItem from './PlayerItem'
import { useClass } from '../../../lib/data/useClass'
import { useSpeClass } from '../../../lib/data/useSpecClass'
import { noteSelector, PlayerState } from '../../../lib/store/reducers/NoteSlice'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/redux'
import { notePlayerAdded } from '../../../lib/store/action/noteAction'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const AddPlayer: FC = () => {
  const dispatch = useAppDispatch()
  const { players } = useAppSelector(noteSelector)
  const toast = useToast()

  const [edit, setEdit] = useState<boolean>(false)
  const playerAddToggle = () => {
    setEdit(!edit)
  }

  const initialPlayerState: PlayerState = {
    name: '',
    class_id: '',
    spec_id: '',
  }
  const [player, setPlayer] = useState<PlayerState>(initialPlayerState)
  const handlePlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer({ ...player, [e.target.name]: e.target.value })
  }
  const selectPlayer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlayer({ ...player, [e.target.name]: e.target.value })
  }

  const { classes, classLoading } = useClass()
  const classListOption = classes?.map((c) => (
    <option key={c._id} value={c._id}>
      {c.name}
    </option>
  ))

  const { classSpec, isClassSpecLoading } = useSpeClass(player.class_id)
  const classSpecListOption = classSpec?.map((c) => (
    <option key={c._id} value={c._id}>
      {c.name}
    </option>
  ))

  const addPlayer = () => {
    if (player.name.length > 0) {
      const candidate = players.find((element) => element.name === player.name)
      if (candidate) {
        toast({
          status: 'error',
          title: 'Error',
          description: 'Such a player has already been added',
          isClosable: true,
          duration: 5000,
        })
      } else {
        dispatch(notePlayerAdded(player))
        setPlayer(initialPlayerState)
      }
    } else {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Name not null',
        isClosable: true,
        duration: 5000,
      })
    }
  }

  return (
    <Box py={2}>
      <Stack direction={['column', 'row']} align={'center'}>
        <Heading size={'sm'}>Add new player:</Heading>
        <Button colorScheme={!edit ? 'lime' : 'red'} variant={'ghost'} onClick={playerAddToggle}>
          {!edit ? <AiFillPlusCircle fontSize={20} /> : <AiFillMinusCircle fontSize={20} />}
        </Button>
      </Stack>
      {edit && (
        <>
          <Box pt={2}>
            <Stack>
              <FormControl>
                <FormLabel htmlFor={'player-name'}>Name:</FormLabel>
                <Input
                  maxW={'320px'}
                  onChange={handlePlayer}
                  id={'player-name'}
                  name={'name'}
                  value={player.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor={'player-class'}>Class:</FormLabel>
                <Select
                  onChange={selectPlayer}
                  id={'plyer-class'}
                  name={'class_id'}
                  value={player.class_id}
                  placeholder='Select class'
                  disabled={classLoading}>
                  {classListOption}
                </Select>
              </FormControl>
              {player.class_id && (
                <FormControl>
                  <FormLabel htmlFor={'player-spec'}>Spec:</FormLabel>
                  <Select
                    onChange={selectPlayer}
                    id={'plyer-spec'}
                    name={'spec_id'}
                    value={player.spec_id}
                    placeholder='Select spec'
                    disabled={isClassSpecLoading}>
                    {classSpecListOption}
                  </Select>
                </FormControl>
              )}
            </Stack>
          </Box>
          {player.name.length > 0 && (
            <Box py={2}>
              <PlayerItem
                delete={true}
                name={player.name}
                class_id={player.class_id}
                spec_id={player.spec_id}
              />
            </Box>
          )}
          <Box py={1}>
            <Button onClick={addPlayer} disabled={player.name.length === 0}>
              Add player
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}

export default AddPlayer
