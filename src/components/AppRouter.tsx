import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { adminRoutes, privateRoutes, publicRoutes } from '../lib/router/router'

const AppRouter: FC = () => {
  const isAuth = true
  const userRole = 'admin'

  if (!isAuth) {
    return (
      <Routes>
        {publicRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
        <Route path={'*'} element={<Navigate to='/' />} />
      </Routes>
    )
  }

  console.log(userRole)

  switch (userRole) {
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
