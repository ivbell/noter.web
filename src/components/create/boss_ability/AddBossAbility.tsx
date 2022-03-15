import React, { FC, useState } from 'react'
import { Box, Button, Heading, Stack } from '@chakra-ui/react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import AddBossAbilityField from './AddBossAbilityField'

const AddBossAbility: FC = () => {
  const [edit, setEdit] = useState<boolean>(false)
  return (
    <Box>
      <Heading size={'sm'} as={'div'}>
        <Stack align={'center'} direction={['column', 'row']}>
          <Box>Add new boss ability:</Box>
          <Button
            colorScheme={edit ? 'red' : 'lime'}
            variant={'ghost'}
            onClick={() => setEdit(!edit)}>
            {!edit ? (
              <AiFillPlusCircle fontSize={20} />
            ) : (
              <AiFillMinusCircle fontSize={20} />
            )}
          </Button>
        </Stack>
        {edit && <AddBossAbilityField />}
      </Heading>
    </Box>
  )
}

export default AddBossAbility
