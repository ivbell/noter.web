import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const TableLineAddItem: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button size={'xs'}>
          <AiOutlinePlus />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Header</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Button colorScheme='blue'>Button</Button>
          </PopoverBody>
          <PopoverFooter>This is the footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default TableLineAddItem
