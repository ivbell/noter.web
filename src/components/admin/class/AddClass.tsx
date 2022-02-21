import {
    Avatar,
    Box,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    useToast,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { ColorResult, SliderPicker } from 'react-color'
import { useSWRConfig } from 'swr'
import useTokenCookie from '../../../lib/hooks/userTokenCookie'

interface NewClass {
    name: string
    icon: string
    color: string
}

const AddClass = () => {
    const initialNewClassState: NewClass = {
        name: '',
        icon: '',
        color: '#efefef',
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [newClass, setNewClass] = useState<NewClass>(initialNewClassState)
    const toast = useToast()
    const { mutate } = useSWRConfig()

    const handleColor = (color: ColorResult) => {
        setNewClass({ ...newClass, color: color.hex })
    }

    const handlerNewClass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewClass({ ...newClass, [event.target.name]: event.target.value })
    }

    const postNewClass = () => {
        const { name, color, icon } = newClass
        if (name.length > 0 && icon.length > 0) {
            const { token } = useTokenCookie()
            const url = `${import.meta.env.VITE_SERVER}/classes`
            axios({
                method: 'post',
                url: url,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: { ...newClass },
            })
                .then((res) => {
                    setNewClass(initialNewClassState)
                    onClose()
                    mutate(url)
                    toast({
                        title: 'Class created',
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
        } else {
            toast({
                title: 'Error',
                description: 'Fill in the fields',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <Box py={3}>
            <Button variant='ghost' onClick={onOpen}>
                Add class
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Class name:</Text>
                        <Input
                            name={'name'}
                            value={newClass.name}
                            onChange={handlerNewClass}
                            mb={3}
                            placeholder='Class name'
                        />
                        <Text>Color:</Text>
                        <SliderPicker
                            color={newClass.color}
                            onChange={handleColor}
                        />
                        <Box
                            mt={3}
                            rounded={4}
                            w={'full'}
                            h={'40px'}
                            bgColor={newClass.color}></Box>
                        <Box mt={3}>
                            <Text>Icon:</Text>
                            <Wrap align={'center'}>
                                <WrapItem w={'80%'}>
                                    <Input
                                        name={'icon'}
                                        value={newClass.icon}
                                        onChange={handlerNewClass}
                                    />
                                </WrapItem>
                                <WrapItem>
                                    <Avatar
                                        size={'md'}
                                        src={newClass.icon}
                                        name={newClass.name}
                                    />
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={postNewClass} variant='ghost'>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default AddClass
