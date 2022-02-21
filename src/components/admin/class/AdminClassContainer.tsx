import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box, Heading, Stack
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { useClass } from '../../../lib/data/useClass'
import AddClass from './AddClass'
import ClassItem from './ClassItem'

const AdminClassContainer: FC = () => {
    const { classes, classLoading, isClassError } = useClass()

    const classList = classes?.map((c) => (
        <ClassItem
            key={c._id}
            name={c.name}
            icon={c.icon}
            id={c._id}
            color={c.color}
        />
    ))

    return (
        <AccordionItem>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                    <Heading size={'md'}>Class</Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                <Stack>{classLoading ? 'Loading' : classList}</Stack>
                <AddClass />
            </AccordionPanel>
        </AccordionItem>
    )
}

export default AdminClassContainer
