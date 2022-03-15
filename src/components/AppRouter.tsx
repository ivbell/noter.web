import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { adminRoutes, privateRoutes, publicRoutes } from '../lib/router/router'

type Props = {
  isAuth: boolean
  role: string
}

const AppRouter: FC<Props> = (props) => {
  if (!props.isAuth) {
    return (
      <Routes>
        {publicRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
        <Route path={'*'} element={<Navigate to='/' />} />
      </Routes>
    )
  }

  switch (props.role) {
    case 'admin':
      return (
        <Routes>
          {publicRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          {privateRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          {adminRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          <Route path={'*'} element={<Navigate to='/' />} />
        </Routes>
      )

    default:
      return (
        <Routes>
          {publicRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          {privateRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          <Route path={'*'} element={<Navigate to='/' />} />
        </Routes>
      )
  }
}

export default AppRouter
