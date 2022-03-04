import { Box, Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/redux'
import { noteBossAbilityAdded } from '../../../lib/store/action/noteAction'
import { BossAbilityState } from '../../../lib/store/reducers/NoteSlice'
import BossAbilityItem from './BossAbilityItem'

const AddBossAbilityField: FC = () => {
  const dispatch = useAppDispatch()
  const { boss_ability } = useAppSelector((state) => state.noteReducer)
  const toast = useToast()

  const initialAbilityState: BossAbilityState = {
    name: '',
    id: '',
  }
  const [ability, setAbility] = useState<BossAbilityState>(initialAbilityState)
  const abilityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbility({ ...ability, [e.target.name]: e.target.value })
  }

  const saveAbility = () => {
    if (ability.name.length > 0) {
      const candidate = boss_ability.find((a) => a.name === ability.name)
      if (candidate) {
        toast({
          status: 'error',
          title: 'Error',
          description: 'This ability has already been added',
          isClosable: true,
          duration: 5000,
        })
      } else {
        dispatch(noteBossAbilityAdded(ability))
        setAbility(initialAbilityState)
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
      <Stack spacing={'10px'}>
        <FormControl>
          <FormLabel htmlFor={'name'}>Ability name:</FormLabel>
          <Input
            onChange={abilityHandler}
            value={ability.name}
            id={'name'}
            name={'name'}
            placeholder='Ability name'
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={'wowhead_id'}>Ability ID:</FormLabel>
          <Input
            onChange={abilityHandler}
            disabled={ability.name.length === 0}
            type={'number'}
            value={ability.id}
            name={'id'}
            id={'wowhead_id'}
            placeholder='Ability ID'
          />
        </FormControl>
      </Stack>
      <Button
        onClick={saveAbility}
        disabled={ability.name.length === 0}
        mt={2}
        display={'inline-block'}>
        Add boss ability
      </Button>
      {ability.name.length > 0 && (
        <Box mt={2}>
          <BossAbilityItem name={ability.name} id={ability.id} />
        </Box>
      )}
    </Box>
  )
}

export default AddBossAbilityField
