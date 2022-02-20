import {
    Box,
    Button,
    Center,
    Checkbox,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import MainLayouts from '../components/layouts/MainLayouts'

const Registration: FC = () => {
    return (
        <MainLayouts>
            <Box>
                <Center h={500}>
                    <Stack>
                        <Heading textAlign={'center'}>Registration</Heading>
                        <Input placeholder={'Login'} />
                        <Input placeholder={'Email'} />
                        <Input placeholder={'Password'} />
                        <Input placeholder={'Confirm password'} />
                        <Checkbox defaultIsChecked>
                            <Text as={'span'} fontSize={'xs'}>
                                Accepted privacies{' '}
                                <Link to='/privacies'>
                                    <Text
                                        as={'span'}
                                        color={useColorModeValue(
                                            'blue',
                                            'gray'
                                        )}>
                                        police
                                    </Text>
                                </Link>
                            </Text>
                        </Checkbox>
                        <Stack
                            direction={['column', 'row']}
                            justify={'space-between'}>
                            <Button>Registration</Button>
                            <Link to={'/login'}>
                                <Button colorScheme={'blue'}>Login</Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Center>
            </Box>
        </MainLayouts>
    )
}
export default Registration
