import { Accordion, Box, Center, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import React, { FC } from 'react'
import AdminClassContainer from '../admin/class/AdminClassContainer'
import AdminUserContainer from '../admin/user/AdminUserContainer'
import MainLayouts from './MainLayouts'

type Props = {
  defaultIndexAccordion?: number
}

const AdminLayout: FC<Props> = (props) => {
  const { children, defaultIndexAccordion } = props

  const defaultIndex = defaultIndexAccordion || 0
  return (
    <MainLayouts>
      <Center py={2}>
        <Heading>Admin panel</Heading>
      </Center>
      <Wrap>
        <WrapItem>
          <Box w={320}>
            <Accordion defaultIndex={defaultIndex} allowToggle>
              <AdminClassContainer />
              <AdminUserContainer />
            </Accordion>
          </Box>
        </WrapItem>
        <WrapItem>{children}</WrapItem>
      </Wrap>
    </MainLayouts>
  )
}
export default AdminLayout
