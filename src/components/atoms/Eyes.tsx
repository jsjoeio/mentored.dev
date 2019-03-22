import React from 'react'
import styled from 'styled-components'

const Eye = styled.circle`
  fill: #1b2d3c;
`

const Eyes = ({ isTalking }) => (
  <React.Fragment>
    <circle fill="#1b2d3c" cx="82.5" cy="89.5" r="8.5" />
    <circle fill="#1b2d3c" cx="149.5" cy="91.5" r="8.5" />
  </React.Fragment>
)

export default Eyes
