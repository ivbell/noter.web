import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import Button from './components/ButtonStyle'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = {
  heading: "'Comfortaa', cursive",
  body: "'Montserrat', sans-serif",
}

const components = {
  Button,
}
const theme = extendTheme({ config, colors, fonts, components })

export default theme
