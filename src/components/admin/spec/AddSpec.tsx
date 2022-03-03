import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { FC, useState } from 'react'
import { useSWRConfig } from 'swr'
import useUserTokenCookie from '../../../lib/hooks/useUserTokenCookie'

type Props = {
  class_id?: string
}

type NewSpec = {
  name: string
  icon: string
}

const AddSpec: FC<Props> = (props) => {
  const initialNewSpec: NewSpec = {
    name: '',
    icon: '',
  }
  const [newSpec, setNewSpec] = useState<NewSpec>(initialNewSpec)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { class_id } = props
  const toast = useToast()
  const { mutate } = useSWRConfig()

  const handlerSpec = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSpec({ ...newSpec, [e.target.name]: e.target.value })
  }

  const createSpec = () => {
    const { token } = useUserTokenCookie()
    if (newSpec.name.length > 0 && newSpec.icon.length > 0) {
      axios({
        method: 'post',
        url: `${import.meta.env.VITE_SERVER}/spec`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          name: newSpec.name,
          icon: newSpec.icon,
          class_id: class_id,
        },
      })
        .then((res) => {
          onClose()
          mutate(`${import.meta.env.VITE_SERVER}/spec/${class_id}`)
          toast({
            status: 'success',
            title: `Spec created`,
            description: newSpec.name,
            isClosable: true,
            duration: 5000,
          })
          setNewSpec(initialNewSpec)
        })
        .catch((error) => {
          toast({
            status: 'error',
            title: 'Error',
            description: error.message,
            isClosable: true,
            duration: 5000,
          })
        })
    }
  }

  return (
    <Box m={1}>
      <Button variant='ghost' onClick={onOpen}>
        Add spec
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new spec</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Spec name:</FormLabel>
              <Input
                onChange={handlerSpec}
                name={'name'}
                placeholder='Spec name'
              />
            </FormControl>
            <FormControl mt={2}>
              <FormLabel>Spec icon:</FormLabel>
              <Input
                onChange={handlerSpec}
                name={'icon'}
                placeholder='Spec icon'
              />
              {newSpec.icon.length > 0 && (
                <Avatar mt={2} src={newSpec.icon} name={newSpec.name} />
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={createSpec} variant='ghost'>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default AddSpec
