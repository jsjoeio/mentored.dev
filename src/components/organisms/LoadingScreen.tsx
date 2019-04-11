import React from 'react'
import styled from 'styled-components'
import Logo from '../molecules/Logo'

const Container = styled.div`
  text-align: center;
  margin: 150px auto;
`

const TipTitle = styled.h3`
  margin-top: 10px;
  font-size: 4vh;
`

const TipDescription = styled.p`
  font-size: 2rem;
`

const LoadingScreen = () => (
  <Container>
    <Logo />
    <TipTitle>Tip #1</TipTitle>
    <TipDescription>
      The best time to become a developer is today.
    </TipDescription>
  </Container>
)

export default LoadingScreen
