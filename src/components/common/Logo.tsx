import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo: FC = () => {
  const LogoDiv = styled.h3`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.lime[400]};
    text-decoration: none;
  `
  return (
    <Link to={'/'}>
      <LogoDiv>Noter</LogoDiv>
    </Link>
  )
}

export default Logo
