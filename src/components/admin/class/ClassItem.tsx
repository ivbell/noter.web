import { Avatar, Text, Box, Wrap, WrapItem, Button } from '@chakra-ui/react'
import React, { FC, useState } from 'react'

interface Props {
  name: string
  image?: string
  id: string
}

type InitialClassState = Omit<Props, 'id'>

const ClassItem: FC<Props> = (props) => {
  const { name, image, id } = props
  const initialClassState: InitialClassState = {
    name: name,
    image: image,
  }
  const [classState, setClassState] = useState(initialClassState)
  const [edit, setEdit] = useState<boolean>(false)

  const handleClass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassState({ ...classState, [e.target.name]: e.target.value })
  }

  return (
    <Box cursor={'pointer'} p={2} border={'1px'} rounded={4} my={1}>
      <Wrap align={'center'} justify={'space-between'}>
        <WrapItem>
          <Avatar size={'sm'} name={classState.name} src={classState.image} />
        </WrapItem>
        <WrapItem>
          <Text>{classState.name}</Text>
        </WrapItem>
        <WrapItem>
          <Button>Edit</Button>
        </WrapItem>
      </Wrap>
    </Box>
  )
}

export default ClassItem
