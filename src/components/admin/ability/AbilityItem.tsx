import React, { FC } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

type Props = {
  name: string
  id: string
  icon: string
  wowhead_link: string
}

const AbilityItem: FC<Props> = (props) => {
  const { name, id, wowhead_link, icon } = props
  return (
    <Box p={1} rounded={4} bgColor={useColorModeValue('gray.200', 'gray.700')}>
      {name}
    </Box>
  )
}

export default AbilityItem
