import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 6px;
  background-color: ${props => props.theme.primary.main};
  position: absolute;
  top: -13px;
  left: 48px;
  padding: 2px 20px;
  z-index: -1;
  user-select: none;
`

const Title = styled.h3`
  color: ${props => props.theme.secondary.main};
  text-transform: uppercase;
  font-size: 1.75rem;
  font-weight: normal;
`

const CharacterTitle: React.FC<{ name: string }> = ({ name }) => (
  <Container>
    <Title>{name}</Title>
  </Container>
)

export default CharacterTitle
