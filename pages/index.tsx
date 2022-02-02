import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import MainLayout from '../components/layout/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Button>123</Button>
      <Button>213</Button>
    </MainLayout>
  )
}

export default Home
