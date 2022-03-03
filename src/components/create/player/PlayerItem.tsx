import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useOneClass } from '../../../lib/data/useOneClass'
import { useOneSpec } from '../../../lib/data/useOneSpec'

type Props = {
  name: string
  class_id?: string
  spec_id?: string
}

const PlayerItem: FC<Props> = (props) => {
  const name =
    props.name.length > 29 ? props.name.substr(0, 26) + '...' : props.name

  const { oneClass } = useOneClass(props.class_id)
  const { oneSpec } = useOneSpec(props.spec_id)

  return (
    <Box
      rounded={'8px'}
      p={2}
      border={'1px'}
      maxW={'320px'}
      w={'auto'}
      display={'inline-block'}
      borderColor={
        oneClass?.color || useColorModeValue('gray.100', 'gray.600')
      }>
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Avatar
          bgColor={oneClass?.color}
          size={'sm'}
          src={props.spec_id ? oneSpec?.icon : oneClass?.icon}
          name={props.name}
        />
        <Text fontSize={'sm'}>{name}</Text>
      </Stack>
    </Box>
  )
}

export default PlayerItem
