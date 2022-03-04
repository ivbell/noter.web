import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { adminRoutes, privateRoutes, publicRoutes } from '../lib/router/router'
import { userSelector } from '../lib/store/reducers/UserSlice'

const AppRouter: FC = () => {
  const { isAuth, role } = useSelector(userSelector)

  if (isAuth) {
    return (
      <Routes>
        {publicRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
        <Route path={'*'} element={<Navigate to='/' />} />
      </Routes>
    )
  }

  switch (role) {
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
