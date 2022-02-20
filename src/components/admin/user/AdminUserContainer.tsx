import {
    Badge,
    Box, Heading, Stack,
    Text,
    useColorModeValue, Wrap,
    WrapItem
} from '@chakra-ui/react'
import React, { FC } from 'react'

const AdminUserContainer: FC = () => {
    return (
        <>
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
        </>
    )
}

export default AdminUserContainer
