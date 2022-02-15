import {
  Avatar,
  Badge,
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
  WrapItem
} from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import MainLayouts from '../components/layouts/MainLayouts'

const Dashboard: FC = () => {
  const [classes, useClasses] = useState<string>()
  const [spec, useSpec] = useState<string>()

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <MainLayouts>
      <Center py={2}>
        <Heading>Admin panel</Heading>
      </Center>
      <Wrap spacing={10}>
        <WrapItem>
          <Stack>
            <Box w={320}>
              <Heading size={'md'}>Class</Heading>
              <Stack>
                <Box cursor={'pointer'} p={2} border={'1px'} rounded={4} my={1}>
                  <Wrap align={'center'}>
                    <WrapItem>
                      <Avatar size={'sm'} name={'Class name'} src={'asd'} />
                    </WrapItem>
                    <WrapItem>
                      <Text>Class name</Text>
                    </WrapItem>
                  </Wrap>
                </Box>
              </Stack>
            </Box>
            {/* Add class */}
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

            {/* User */}
            <Heading size='md'>Users</Heading>
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
          </Stack>
        </WrapItem>
        <WrapItem>
          <Box w={320}>
            <Heading textAlign={'center'} size={'md'}>
              Spec
            </Heading>
            <Stack>
              <Box my={1} rounded={4} p={2} bgColor={useColorModeValue('gray.100', 'gray.700')}>
                <Wrap align={'center'}>
                  <WrapItem>
                    <Avatar size={'sm'} name={'Spec name'} src={'asd'} />
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
        </WrapItem>
      </Wrap>
    </MainLayouts>
  )
}

export default Dashboard
