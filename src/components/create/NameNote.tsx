import React, { FC, useState } from 'react'
import { Box, Button, Input, Stack, useColorModeValue } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux'
import { noteNameChange } from '../../lib/store/action/noteAction'

const NameNote: FC = () => {
  const { name } = useAppSelector((state) => state.note)
  const [noteName, setNoteName] = useState<string>(name)
  const dispatch = useAppDispatch()

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteName(e.target.value)
  }

  const saveName = () => {
    if (noteName.length > 0) {
      dispatch(noteNameChange(noteName))
    } else {
      const _newName = 'New note name'
      dispatch(noteNameChange(_newName))
      setNoteName(_newName)
    }
  }

  return (
    <Box
      py={2}
      borderBottom={'1px'}
      borderColor={useColorModeValue('gray.100', 'gray.600')}>
      <Stack
        maxW={320}
        direction={['column', 'row']}
        justifyContent={'space-between'}
        alignItems={'center'}>
        <Input
          placeholder={'Note name'}
          value={noteName}
          onChange={handleName}
        />
        <Button onClick={saveName}>Save</Button>
      </Stack>
    </Box>
  )
}

export default NameNote
