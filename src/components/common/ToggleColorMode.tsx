import { Box, useColorMode } from '@chakra-ui/react'
import React, { FC } from 'react'

const ToggleColorMode: FC = () => {
  const { toggleColorMode } = useColorMode()
  return <Box onClick={toggleColorMode}>Mode</Box>
}

export default ToggleColorMode
