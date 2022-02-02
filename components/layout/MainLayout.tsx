import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import React, { FC } from 'react'
import Navbar from '../Navbar'

interface Props {
  readonly title?: string
}

const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Noter` : 'Noter'}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Container py={3} maxW={'container.xl'}>
        {children}
      </Container>
      {/* Footer */}
    </>
  )
}

export default MainLayout
