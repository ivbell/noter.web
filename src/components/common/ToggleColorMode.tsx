import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { FC } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

const ToggleColorMode: FC = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}>
        <Box
          onClick={toggleColorMode}
          cursor={'pointer'}
          p={2}
          rounded={6}
          bgColor={useColorModeValue('gray.700', 'yellow.300')}
          textColor={useColorModeValue('white', 'gray.700')}>
          {colorMode === 'dark' ? <BsSun /> : <BsMoon />}
        </Box>
      </motion.div>
    </AnimatePresence>
  )
}

export default ToggleColorMode
