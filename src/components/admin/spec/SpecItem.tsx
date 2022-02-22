import {
  Avatar,
  Box,
  Wrap,
  WrapItem,
  Text,
  useColorModeValue,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiOutlineEllipsis } from 'react-icons/ai'

type Props = {
  icon: string
  name: string
}

const SpecItem: FC<Props> = (props) => {
  const { icon, name } = props
  return (
    <Box
      my={1}
      rounded={4}
      p={2}
      bgColor={useColorModeValue('gray.100', 'gray.700')}
      position={'relative'}>
      <Wrap align={'center'} justify={'space-between'}>
        <WrapItem>
          <Wrap align={'center'}>
            <WrapItem>
              <Avatar size={'sm'} name={name} src={icon} />
            </WrapItem>
            <WrapItem>
              <Text>{name}</Text>
            </WrapItem>
          </Wrap>
        </WrapItem>
        <WrapItem>
          <Popover>
            <PopoverTrigger>
              <Button variant={'ghost'}>
                <AiOutlineEllipsis />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Are you sure you want to have that milkshake?
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export default SpecItem
