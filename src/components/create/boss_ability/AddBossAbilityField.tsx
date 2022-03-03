import { Box, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import BossAbilityItem from './BossAbilityItem'

const AddBossAbilityField: FC = () => {
  const initialStateAbility = {
    name: '',
    wowhead_id: '',
  }
  const [ability, setAbility] = useState(initialStateAbility)
  const abilityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbility({ ...ability, [e.target.name]: e.target.value })
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
            type={'number'}
            value={ability.wowhead_id}
            name={'wowhead_id'}
            id={'wowhead_id'}
            placeholder='Ability ID'
          />
        </FormControl>
      </Stack>
      <Button disabled={ability.name.length === 0} mt={2} display={'inline-block'}>
        Add boss ability
      </Button>
      {ability.name.length > 0 && (
        <Box mt={2}>
          <BossAbilityItem name={ability.name} id={ability.wowhead_id} />
        </Box>
      )}
    </Box>
  )
}

export default AddBossAbilityField
