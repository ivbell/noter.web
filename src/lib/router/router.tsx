import Home from '../../pages/Home'
import React from 'react'
import Login from '../../pages/Login'
import Create from '../../pages/Create'
import Profile from '../../pages/Profile'
import Dashboard from '../../pages/Dashboard'

export interface Router {
  readonly path: string
  readonly element: React.ReactElement
}

export enum RouterNames {
  HOME = '/',
  LOGIN = '/login',
  PROFILE = '/profile',
  CREATE = '/create',
  ADMIN = '/admin',
}

export const publicRoutes: Router[] = [
  { path: RouterNames.HOME, element: <Home /> },
  { path: RouterNames.LOGIN, element: <Login /> },
  { path: RouterNames.CREATE, element: <Create /> },
]

export const privateRoutes: Router[] = [
  { path: RouterNames.PROFILE, element: <Profile /> },
]

export const adminRoutes: Router[] = [
  { path: RouterNames.ADMIN, element: <Dashboard /> },
]
