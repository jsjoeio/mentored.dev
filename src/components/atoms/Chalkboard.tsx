import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  left: 0;
  margin: 20px;

  svg {
    #green-board {
      fill: ${props => props.theme.primary.darker};
    }
    #board-bottom {
      fill: ${props => props.theme.neutral.dark};
    }
    #white-chalk {
      fill: ${props => props.theme.neutral.lightest};
    }
  }
`

const Chalkboard = () => (
  <Container>
    <svg
      width="957"
      height="478"
      viewBox="0 0 957 478"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect id="green-board" x="10.8013" width="937.558" height="464.483" />
      <rect id="board-bottom" y="462.026" width="964" height="15.9743" />
      <rect
        id="white-chalk"
        x="43.2054"
        y="454.653"
        width="35.6445"
        height="7.37277"
      />
    </svg>
  </Container>
)

export default Chalkboard
