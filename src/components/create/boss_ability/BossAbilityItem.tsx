import React, { FC } from 'react'
import { Box, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import { useWowheadLink } from '../../../lib/hooks/useWowheadLink'

type Props = {
  name: string
  id?: string
}

const BossAbilityItem: FC<Props> = (props) => {
  const wowheadLink = useWowheadLink('spell', Number(props.id))
  return (
    <Link
      display={'inline-block'}
      border={'1px'}
      borderColor={useColorModeValue('gray.100', 'gray.600')}
      px={3}
      py={2}
      rounded={4}
      target={'_blank'}
      href={wowheadLink}>
      {props.name}
    </Link>
  )
}

export default BossAbilityItem
