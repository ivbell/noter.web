import { Box, Heading, Stack } from '@chakra-ui/react'
import React, { FC } from 'react'
import AddAbility from './AddAbility'

type Props = {
  class_id: string | undefined
}

const AbilityContainer: FC<Props> = (props) => {
  const { class_id } = props
  return (
    <Box w={320}>
      <Heading textAlign={'center'} size={'md'}>
        Class ability:
      </Heading>
      <Stack>
        <AddAbility />
      </Stack>
    </Box>
  )
}

export default AbilityContainer
