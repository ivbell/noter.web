import { Box, Link, useColorModeValue, useToast } from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks/redux'
import { useWowheadLink } from '../../../lib/hooks/useWowheadLink'
import { noteBossAbilityDelete } from '../../../lib/store/action/noteAction'

type Props = {
  name: string
  id?: string
  delete?: boolean
}

const BossAbilityItem: FC<Props> = (props) => {
  const { boss_ability } = useAppSelector((state) => state.note)
  const dispatch = useAppDispatch()
  const toast = useToast()

  const wowheadLink = useWowheadLink('spell', Number(props.id))
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

  return (
    <Box position={'relative'}>
      <Link
        display={'inline-block'}
        border={'1px'}
        borderColor={useColorModeValue('gray.100', 'gray.600')}
        px={3}
        py={2}
        rounded={4}
        target={'_blank'}
        href={wowheadLink}>
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
