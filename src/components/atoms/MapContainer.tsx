import React, { useState, useEffect } from 'react'
import styled from '../../utils/styled'
import { isBrowser } from '../../utils/functions'

const Container = styled.div`
  border-radius: 5px;
  margin: 0 1rem 0 2.5rem;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    height: auto;
    margin-bottom: 32px;
    margin-left: 25px;
  }

  svg {
    @media screen and (max-width: 768px) {
      width: 95vw;
      height: auto;
    }
  }
`

function getWindowDim() {
  if (isBrowser()) {
    return [window.outerHeight, window.outerWidth]
  }
}

const MapContainer: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [dimensions, setDimensions] = useState([745, 902])

  useEffect(() => {
    const currentDimensions = getWindowDim()
    setDimensions(currentDimensions)
  }, [])

  return (
    <Container>
      <svg
        width={dimensions[1] * 0.6}
        height={dimensions[0] * 0.8}
        viewBox="0 0 902 745"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </Container>
  )
}

export default MapContainer
