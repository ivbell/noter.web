import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import AddAbility from './AddAbility'
import { useClassAbility } from '../../../lib/data/useClassAbility'
import AbilityItem from './AbilityItem'

type Props = {
  class_id: string | undefined
}

const AbilityContainer: FC<Props> = (props) => {
  const { class_id } = props
  const { abilityClass, abilityClassLoading } = useClassAbility(class_id)
  const abilityList = abilityClass?.map((ability) => (
    <AbilityItem
      key={ability._id}
      name={ability.name}
      id={ability._id}
      icon={ability.icon}
      wowhead_link={ability.wowhead_id}
    />
  ))
  return (
    <Box ml={2} w={320}>
      <Heading mb={1} textAlign={'center'} size={'md'}>
        Class ability:
      </Heading>
      <Stack spacing={2}>
        {abilityList}

        <AddAbility />
      </Stack>
    </Box>
  )
}

export default AbilityContainer
