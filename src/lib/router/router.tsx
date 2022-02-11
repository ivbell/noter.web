import Home from '../../pages/Home'
import React from 'react'
import Login from '../../pages/Login'
import Create from '../../pages/Create'
import Profile from '../../pages/Profile'

export interface Router {
  readonly path: string
  readonly element: React.ReactElement
}

export enum RouterNames {
  HOME = '/',
  LOGIN = '/login',
  PROFILE = '/profile',
  CREATE = '/create',
}

export const publicRoutes: Router[] = [
  { path: RouterNames.HOME, element: <Home /> },
  { path: RouterNames.LOGIN, element: <Login /> },
  { path: RouterNames.CREATE, element: <Create /> },
]

export const privateRoutes: Router[] = [
  { path: RouterNames.PROFILE, element: <Profile /> },
]
