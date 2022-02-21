import {
    Avatar,
    Box, Heading, Stack,
    Text,
    useColorModeValue, Wrap,
    WrapItem
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import AddSpec from '../../components/admin/spec/AddSpec'
import AdminLayout from '../../components/layouts/AdminLayouts'
import { useOneClass } from '../../lib/data/useOneClass'

const ClassAdminPage: FC = () => {
    const { id } = useParams()
    const { oneClass } = useOneClass(id)

    return (
        <AdminLayout>
            <Box w={320}>
                <Heading textAlign={'center'} size={'md'}>
                    Specializations {oneClass?.name}
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
                <AddSpec class_id={id} />
            </Box>
        </AdminLayout>
    )
}

export default ClassAdminPage
