import React, { FC } from 'react'
import { Container } from '../../lib/theme/components/Container'
import Navbar from '../Navbar'

interface Props {
  readonly title?: string
}

const MainLayouts: FC<Props> = ({ children, title }) => {
  document.title = title ? `${title} | Noter` : 'Noter'
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  )
}

export default MainLayouts
