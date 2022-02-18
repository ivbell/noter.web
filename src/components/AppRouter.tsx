import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../lib/hooks/redux'
import { adminRoutes, privateRoutes, publicRoutes } from '../lib/router/router'

const AppRouter: FC = () => {
    const { isAuth, role } = useAppSelector((state) => state.userReducer)

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
