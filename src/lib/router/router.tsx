import Home from '../../pages/Home'
import React from 'react'
import Login from '../../pages/Login'
import Create from '../../pages/Create'
import Profile from '../../pages/Profile'
import Dashboard from '../../pages/Dashboard'
import Registration from '../../pages/Registration'
import NoteCollection from '../../pages/NoteCollection'
import Note from '../../pages/Note'
import ClassAdminPage from '../../pages/admin/ClassAdminPage'

export interface Router {
    readonly path: string
    readonly element: React.ReactElement
}

export enum RouterNames {
    HOME = '/',
    LOGIN = '/login',
    REGISTRATION = '/registration',
    PROFILE = '/profile',
    CREATE = '/create',
    ADMIN = '/admin',
    COLLECTION = '/collection',
    NOTE = '/note/:id',
    CLASS = '/admin/class/:id',
}

export const publicRoutes: Router[] = [
    { path: RouterNames.HOME, element: <Home /> },
    { path: RouterNames.LOGIN, element: <Login /> },
    { path: RouterNames.CREATE, element: <Create /> },
    { path: RouterNames.REGISTRATION, element: <Registration /> },
]

export const privateRoutes: Router[] = [
    { path: RouterNames.PROFILE, element: <Profile /> },
    { path: RouterNames.COLLECTION, element: <NoteCollection /> },
    { path: RouterNames.NOTE, element: <Note /> },
]

export const adminRoutes: Router[] = [
    { path: RouterNames.ADMIN, element: <Dashboard /> },
    { path: RouterNames.CLASS, element: <ClassAdminPage /> },
]
