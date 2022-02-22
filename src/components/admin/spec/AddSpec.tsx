import {
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
    useDisclosure,
} from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { Spec } from '../../../lib/type'

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
    const [newSpec, setNewSpec] = useState<NewSpec>()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { class_id } = props

    return (
        <Box>
            <Button variant='ghost' onClick={onOpen}>
                Add spec
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add new spec</ModalHeader>
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
    )
}

export default AddSpec
