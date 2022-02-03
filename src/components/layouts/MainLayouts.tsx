import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import Navbar from '../Navbar'

interface Props {
  readonly title?: string
}

const MainLayouts: FC<Props> = ({ children, title }) => {
  document.title = title ? `${title} | Noter` : 'Noter'
  return (
    <>
      {/* TODO */}
      <Navbar />
      <Container maxW={'container.xl'} py={3}>
        {children}
      </Container>
      {/* Footer */}
    </>
  )
}

export default MainLayouts
