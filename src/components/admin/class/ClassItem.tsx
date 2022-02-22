import {
  Avatar,
  Box,
  Button,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import axios, { AxiosError } from 'axios'
import React, { FC, useState } from 'react'
import { ColorResult, SliderPicker } from 'react-color'
import { Link } from 'react-router-dom'
import { useSWRConfig } from 'swr'
import useTokenCookie from '../../../lib/hooks/userTokenCookie'

interface Props {
  name: string
  icon: string
  id: string
  color: string
}

type InitialClassState = Omit<Props, 'id'>

const ClassItem: FC<Props> = (props) => {
  const { name, icon, id, color } = props
  const { mutate } = useSWRConfig()
  const { onOpen, onClose, isOpen } = useDisclosure()
  const toast = useToast()

  const initialClassState: InitialClassState = {
    name: name,
    icon: icon,
    color: color,
  }
  const [classState, setClassState] = useState(initialClassState)

  const handleClass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassState({ ...classState, [e.target.name]: e.target.value })
  }
  const handleColor = (color: ColorResult) => {
    setClassState({ ...classState, color: color.hex })
  }

  const resetState = () => {
    setClassState(initialClassState)
  }

  const saveClass = () => {
    const { token } = useTokenCookie()
    const url = `${import.meta.env.VITE_SERVER}/classes`
    axios({
      method: 'patch',
      url: `${url}/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { ...classState },
    })
      .then((res) => {
        mutate(url)
        onClose()
        toast({
          title: 'Class updated',
          description: res.data.name,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      })
      .catch((error: AxiosError) => {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }

  return (
    <Box
      cursor={'pointer'}
      p={2}
      bgColor={useColorModeValue('gray.100', 'gray.700')}
      rounded={4}
      my={1}
      position={'relative'}>
      <Link to={`/admin/class/${id}`}>
        <Wrap align={'center'}>
          <WrapItem>
            <Avatar bgColor={color} size={'sm'} name={name} src={icon} />
          </WrapItem>
          <WrapItem>
            <Text>{name}</Text>
          </WrapItem>
        </Wrap>
      </Link>
      <Box position={'absolute'} right={'10px'} top={'8px'}>
        <Button onClick={onOpen}>edit</Button>
        <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Edit: {name}!</PopoverHeader>
            <PopoverBody>
              <Text>Name:</Text>
              <Input
                name={'name'}
                value={classState.name}
                onChange={handleClass}
              />
              <Text>Icon (url):</Text>
              <Wrap align={'center'}>
                <WrapItem>
                  <Input
                    name={'icon'}
                    value={classState.icon}
                    onChange={handleClass}
                  />
                </WrapItem>
                <WrapItem>
                  <Avatar
                    size={'md'}
                    src={classState.icon}
                    name={classState.name}
                  />
                </WrapItem>
              </Wrap>
              <Text>Color:</Text>
              <SliderPicker onChange={handleColor} color={classState.color} />
              <Wrap mt={3} justify={'end'}>
                <WrapItem>
                  <Button onClick={resetState} colorScheme={'blue'}>
                    Reset
                  </Button>
                </WrapItem>
                <WrapItem>
                  <Button onClick={saveClass}>Save</Button>
                </WrapItem>
              </Wrap>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  )
}

export default ClassItem
