import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../lib/router/router'

const AppRouter: FC = () => {
  const isAuth = false

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

export default AppRouter
