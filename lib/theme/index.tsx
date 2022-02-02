import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Button } from './component/ButtonStyle'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#f4f4f4', '#202023')(props),
    },
  }),
}

const components = { Button }

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components })

export default theme
