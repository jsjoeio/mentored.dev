import React from 'react'
import styled from '../../utils/styled'
import IconCoin from './IconCoin'

const Container = styled.div`
  display: flex;
  margin-left: 25px;
  p {
    margin-left: 8px;
    display: inline-block;
    font-size: 18px;
  }
`

const CodeCash = () => (
  <Container>
    <IconCoin />
    <p>$200</p>
  </Container>
)

export default CodeCash
