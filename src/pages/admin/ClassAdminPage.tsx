import {Box, Heading, Skeleton, Stack} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useParams} from 'react-router-dom'
import AbilityContainer from '../../components/admin/ability/AbilityContainer'
import AddSpec from '../../components/admin/spec/AddSpec'
import SpecItem from '../../components/admin/spec/SpecItem'
import AdminLayout from '../../components/layouts/AdminLayouts'
import {useOneClass} from '../../lib/data/useOneClass'
import {useSpeClass} from '../../lib/data/useSpecClass'

const ClassAdminPage: FC = () => {
  const {id} = useParams()
  const {oneClass} = useOneClass(id)
  const {classSpec, isClassSpecLoading} = useSpeClass(id)

  const specList = classSpec?.map((spec) => (
    <SpecItem key={spec._id} id={spec._id} icon={spec.icon} name={spec.name}/>
  ))

  return (
    <AdminLayout defaultIndexAccordion={0}>
      <Box w={320}>
        {isClassSpecLoading ? (
          <Stack>
            <Skeleton height="20px"/>
            <Skeleton height="20px"/>
            <Skeleton height="20px"/>
          </Stack>
        ) : (
          <>
            <Heading textAlign={'center'} size={'md'}>
              Specializations {oneClass?.name}
            </Heading>
            <Stack>{specList}</Stack>
            <AddSpec class_id={id}/>
          </>
        )}
      </Box>
      <AbilityContainer class_id={id}/>
    </AdminLayout>
  )
}

export default ClassAdminPage
