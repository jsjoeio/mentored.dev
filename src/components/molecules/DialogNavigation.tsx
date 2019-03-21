import React from 'react'
import styled from 'styled-components'
import Next from '../atoms/Next'
import Previous from '../atoms/Previous'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DialogNavigation = ({ transition, transitionPrevious, showForm }) => (
  <Container>
    <Previous transition={transitionPrevious}>Previous</Previous>
    <Next transition={transition} hasForm={showForm} />
  </Container>
)

export default DialogNavigation
