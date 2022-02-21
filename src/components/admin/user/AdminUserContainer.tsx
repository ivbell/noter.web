import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
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
    Text,
    useColorModeValue,
    useDisclosure,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import React, { FC } from 'react'

const AdminUserContainer: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <AccordionItem>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    <Heading size='md'>Users</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                <Stack>
                    <Box
                        cursor={'pointer'}
                        bgColor={useColorModeValue('gray.100', 'gray.600')}
                        p={1}
                        rounded={4}>
                        <Text>Username</Text>
                        <Wrap align={'center'}>
                            <WrapItem>
                                <Wrap align={'center'}>
                                    <WrapItem>Last date:</WrapItem>
                                    <WrapItem>
                                        <Badge>22.02.2010</Badge>
                                    </WrapItem>
                                </Wrap>
                            </WrapItem>
                            <WrapItem>
                                <Wrap align={'center'}>
                                    <WrapItem>Notes:</WrapItem>
                                    <WrapItem>
                                        <Badge>1000</Badge>
                                    </WrapItem>
                                </Wrap>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Stack>
                <Box py={3}>
                    <Button variant='ghost' onClick={onOpen}>
                        Add user
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
                                <Button
                                    colorScheme='blue'
                                    mr={3}
                                    onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='ghost'>Save</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </AccordionPanel>
        </AccordionItem>
    )
}

export default AdminUserContainer
