import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Container = styled.div`
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  padding-top: 150px;
  transition: all 0.3s ease;
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
