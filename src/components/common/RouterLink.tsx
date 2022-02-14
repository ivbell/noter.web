import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  readonly to: string
}

const RouterLink: FC<Props> = (props) => {
  const SLink = styled.div`
    &.active {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
    }
  `

  const { to, children } = props
  return (
    <NavLink
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      to={to}>
      <SLink>{children}</SLink>
    </NavLink>
  )
}

export default RouterLink
