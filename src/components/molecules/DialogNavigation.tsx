import React from 'react'
import styled, { keyframes } from 'styled-components'
import Next from '../atoms/Next'
import Previous from '../atoms/Previous'

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease;
  animation: ${slideUp} 500ms ease;
`

const DialogNavigation = ({
  hasNext,
  hasPrevious,
  transition,
  transitionPrevious,
  showForm
}) => (
  <Container>
    {hasPrevious && (
      <Previous
        transition={transition}
        transitionPrevious={transitionPrevious}
      />
    )}
    {hasNext && (
      <Next
        transition={transition}
        transitionPrevious={transitionPrevious}
        showForm={showForm}
      />
    )}
  </Container>
)

export default DialogNavigation
