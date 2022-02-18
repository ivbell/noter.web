import React, { FC } from 'react'
import {
    Avatar,
    Box,
    Button,
    Center,
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
    Text,
    useColorModeValue,
    useDisclosure,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'

const AdminSpecContainer: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box w={320}>
            <Heading textAlign={'center'} size={'md'}>
                Spec
            </Heading>
            <Stack>
                <Box
                    my={1}
                    rounded={4}
                    p={2}
                    bgColor={useColorModeValue('gray.100', 'gray.700')}>
                    <Wrap align={'center'}>
                        <WrapItem>
                            <Avatar
                                size={'sm'}
                                name={'Spec name'}
                                src={'asd'}
                            />
                        </WrapItem>
                        <WrapItem>
                            <Text>Spec name</Text>
                        </WrapItem>
                    </Wrap>
                </Box>
            </Stack>
            {/* Add class */}
            <Box>
                <Button variant='ghost' onClick={onOpen}>
                    Add spec
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Input placeholder='Spec name' />
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
        </Box>
    )
}

export default AdminSpecContainer
