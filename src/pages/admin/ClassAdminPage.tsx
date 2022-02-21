import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import AdminSpecContainer from '../../components/admin/spec/AdminSpecContainer'
import AdminLayout from '../../components/layouts/AdminLayouts'

const ClassAdminPage: FC = () => {
    const { id } = useParams()
    return (
        <AdminLayout>
            <AdminSpecContainer />
        </AdminLayout>
    )
}

export default ClassAdminPage
