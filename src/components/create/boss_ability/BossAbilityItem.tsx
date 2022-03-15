import { Box, Link, useColorModeValue, useToast } from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/redux'
import { noteBossAbilityDelete } from '../../../lib/store/action/noteAction'
import { noteSelector } from '../../../lib/store/reducers/NoteSlice'

type Props = {
  name: string
  id?: string
  delete?: boolean
}

const BossAbilityItem: FC<Props> = (props) => {
  const { boss_ability } = useAppSelector(noteSelector)
  const dispatch = useAppDispatch()
  const toast = useToast()

  const name = props.name.length > 29 ? props.name.substr(0, 26) + '...' : props.name

  const deleteBossAbility = () => {
    const candidate = boss_ability.find((boss_ability) => boss_ability.name === props.name)
    if (candidate) {
      dispatch(noteBossAbilityDelete(props.name))
    } else {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Boss ability not found',
        isClosable: true,
        duration: 5000,
      })
    }
  }
  // <a href="#" data-wowhead="item=2828">hai</a>
  return (
    <Box position={'relative'}>
      <Link
        display={'inline-block'}
        border={'1px'}
        borderColor={useColorModeValue('gray.100', 'gray.600')}
        px={3}
        py={2}
        data-wowhead={`spell=${props.id}`}
        rounded={4}
        href={'#'}>
        {name}
      </Link>
      {!props.delete && (
        <Box
          onClick={deleteBossAbility}
          _hover={{ color: 'red.400' }}
          color={'red.200'}
          rounded={'full'}
          bgColor={useColorModeValue('white', 'gray.800')}
          cursor={'pointer'}
          right={'-5px'}
          top={'-5px'}
          position={'absolute'}>
          <AiOutlineCloseCircle />
        </Box>
      )}
    </Box>
  )
}

export default BossAbilityItem
