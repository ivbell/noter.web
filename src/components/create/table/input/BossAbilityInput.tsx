import { Box, Input, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useAppSelector } from '../../../../lib/hooks/redux'
import { BossAbilityState, noteSelector } from '../../../../lib/store/reducers/NoteSlice'

type Props = {
  onChange: React.ReactEventHandler
  bossAbility?: BossAbilityState | string
}

const BossAbilityInput: FC<Props> = (props) => {
  const { boss_ability } = useAppSelector(noteSelector)
  console.log(boss_ability)

  return (
    <Box display={'inline-block'}>
      {/* <Input placeholder={'Boss ability'} value={''} onChange={props.onChange} /> */}
      <Text textAlign={'left'} fontSize={'x-small'}>
        Boss ability
      </Text>
    </Box>
  )
}

export default BossAbilityInput
