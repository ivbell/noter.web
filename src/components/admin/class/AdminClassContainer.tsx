import {
    Box,
    Button,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import ClassItem from './ClassItem'

const AdminClassContainer: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box w={320}>
                <Heading size={'md'}>Class</Heading>
                <Stack>
                    <ClassItem name='Death knight' id='123' />
                </Stack>
            </Box>
            <Box>
                <Button variant='ghost' onClick={onOpen}>
                    Add class
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Input placeholder='Class name' />
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Save</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    )
}

export default AdminClassContainer
