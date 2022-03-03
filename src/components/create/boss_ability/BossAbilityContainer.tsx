import {Box, Heading} from '@chakra-ui/react'
import React, {FC} from 'react'
import AddBossAbility from './AddBossAbility'

const BossAbilityContainer: FC = () => {
  return (
    <Box>
      <Heading size={'md'}>Boss ability:</Heading>
      <AddBossAbility />
    </Box>
  )
}

export default BossAbilityContainer