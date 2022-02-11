import { Link } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Link as RoutersLink } from 'react-router-dom'

interface Props {
  readonly to: string
}

const RouterLink: FC<Props> = (props) => {
  return (
    <Link as={RoutersLink} to={props.to}>
      {props.children}
    </Link>
  )
}

export default RouterLink
