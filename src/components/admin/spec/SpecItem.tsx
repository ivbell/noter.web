import {
  Avatar,
  Box, Button, Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, Stack, Text,
  useColorModeValue, useDisclosure, useToast, Wrap,
  WrapItem
} from '@chakra-ui/react'
import React, {FC, useState} from 'react'
import {AiOutlineEllipsis} from 'react-icons/ai'
import axios from 'axios'
import useUserTokenCookie from '../../../lib/hooks/useUserTokenCookie'

type Props = {
  icon: string
  name: string
  id: string

}

type SpecState = {
  name: string
  icon: string
}

const SpecItem: FC<Props> = (props) => {
  const {icon, name, id} = props
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [edit, setEdit] = useState<boolean>(false)
  const toast = useToast()

  const initialSpecState = {
    name: name,
    icon: icon,
  }
  const [spec, setSpec] = useState<SpecState>(initialSpecState)

  const editSpec = () => {
    setEdit(true)
    onClose()
  }

  const handleSpec = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpec({...spec, [e.target.name]: e.target.value})
  }

  const deleteSpec = () => {
    onOpen()
  }


  const postSpecOnServer = () => {
    const validateName = name !== spec.name
    const validateIcon = icon !== spec.icon
    const validate = validateName || validateIcon

    if (validate) {
      const url = `${import.meta.env.VITE_SERVER}/spec/${id}`
      const {token} = useUserTokenCookie()
      axios({
        method: 'patch',
        url: url,
        headers: {Authorization: `Bearer ${token}`},
        data: spec
      }).then(res => {
        toast({
          status: 'success',
          isClosable: true,
          duration: 5000,
          title: 'Spec update'
        })
      }).catch(err => {
        toast({
          status: 'error',
          title: 'Error',
          isClosable: true,
          duration: 5000,
          description: err.message
        })
      })
    } else {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Name or icon have not changed',
        isClosable: true,
        duration: 5000
      })
    }
  }

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
              <Avatar size={'sm'} name={spec.name} src={spec.icon}/>
            </WrapItem>
            <WrapItem>
              <Text>{spec.name}</Text>
            </WrapItem>
          </Wrap>
        </WrapItem>
        <WrapItem>
          <Popover onClose={onClose} onOpen={onOpen} isOpen={isOpen}>
            <PopoverTrigger>
              <Button variant={'ghost'}>
                <AiOutlineEllipsis/>
              </Button>
            </PopoverTrigger>
            <PopoverContent w={100}>
              <PopoverBody>
                <Stack>
                  <Button onClick={editSpec}>Edit</Button>
                  <Button onClick={deleteSpec} colorScheme={'red'}>
                    Delete
                  </Button>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </WrapItem>
      </Wrap>
      {edit && (
        <Box mt={2}>
          <Stack spacing={4}>
            <Input onChange={handleSpec} name={'name'} value={spec.name}/>
            <Input onChange={handleSpec} name={'icon'} value={spec.icon}/>
            <Box>
              <Stack direction={['column', 'row']} spacing={4} justify={'end'}>
                <Button onClick={postSpecOnServer} variant={'ghost'}>Save</Button>
                <Button onClick={() => setSpec(initialSpecState)} colorScheme={'blue'}>Reset</Button>
                <Button onClick={() => setEdit(false)} colorScheme={'red'}>
                  Close
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      )}
    </Box>
  )
}

export default SpecItem
