import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import Button from './components/ButtonStyle'
import Input from './components/InputStyle'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fonts = {
  heading: "'Comfortaa', cursive",
  body: "'Montserrat', sans-serif",
}

const components = {
  Button,
  Input,
}
const theme = extendTheme({ config, colors, fonts, components })

export default theme
