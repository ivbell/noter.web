import { Center, Heading, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React, { FC } from 'react'
import AdminClassContainer from '../components/admin/class/AdminClassContainer'
import AdminUserContainer from '../components/admin/user/AdminUserContainer'
import AdminSpecController from '../components/admin/spec/AdminSpecContainer'
import MainLayouts from '../components/layouts/MainLayouts'

const Dashboard: FC = () => {
    return (
        <MainLayouts>
            <Center py={2}>
                <Heading>Admin panel</Heading>
            </Center>
            <Wrap spacing={10}>
                <WrapItem>
                    <Stack>
                        <AdminClassContainer />
                        <AdminUserContainer />
                    </Stack>
                </WrapItem>
                <WrapItem>
                    <AdminSpecController />
                </WrapItem>
            </Wrap>
        </MainLayouts>
    )
}

export default Dashboard
