import { Box, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useAppSelector } from '../../../lib/hooks/redux'
import { noteSelector } from '../../../lib/store/reducers/NoteSlice'
import AddBossAbility from './AddBossAbility'
import BossAbilityItem from './BossAbilityItem'

const BossAbilityContainer: FC = () => {
  const { boss_ability } = useAppSelector(noteSelector)
  const bossAbilityList = boss_ability.map((ability, index) => (
    <WrapItem key={index}>
      <BossAbilityItem name={ability.name} id={ability.id} />
    </WrapItem>
  ))
  return (
    <Box>
      <Heading size={'md'}>Boss ability:</Heading>
      <Wrap py={2}>{bossAbilityList}</Wrap>
      <AddBossAbility />
    </Box>
  )
}

export default BossAbilityContainer
