import React, { FC } from 'react'
import {
  Avatar,
  Box,
  Button,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

type Props = {
  name: string
  id: string
  icon: string
  wowhead_link: string
}

const AbilityItem: FC<Props> = (props) => {
  const { name, id, wowhead_link, icon } = props
  console.log(wowhead_link)
  return (
    <Box p={1} rounded={4} bgColor={useColorModeValue('gray.200', 'gray.700')}>
      <Stack
        direction={['column', 'row']}
        justify={'space-between'}
        align={'center'}>
        <Stack direction={['column', 'row']} alignItems={'center'}>
          <Link display={'block'} href={wowhead_link}>
            <Avatar size={'sm'} name={name} src={icon} />
          </Link>
          <Text>{name}</Text>
        </Stack>
        <Button variant={'ghost'} size={'xs'}>
          123
        </Button>
      </Stack>
    </Box>
  )
}

export default AbilityItem
