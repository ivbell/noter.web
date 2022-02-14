import React, { FC } from 'react'
import { Button } from '../lib/theme/components/Button'
import { Container } from '../lib/theme/components/Container'
import { Grid } from '../lib/theme/components/Grid'
import Logo from './common/Logo'
import RouterLink from './common/RouterLink'

const Navbar: FC = () => {
  return (
    <Container>
      <Grid alignItems={'center'} justify={'space-between'}>
        <Logo />
        <RouterLink to={'/create'}>Create</RouterLink>
        <Button>Login</Button>
      </Grid>
    </Container>
  )
}

export default Navbar
