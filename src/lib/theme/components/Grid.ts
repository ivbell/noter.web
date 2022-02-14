import styled from 'styled-components'
import { AlignItems, JustifyContent } from '../type'

export const Grid = styled.div<AlignItems & JustifyContent>`
  display: flex;
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  justify-content: ${({ justify = 'start' }) => justify};
`
