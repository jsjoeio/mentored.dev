import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Container = styled.div<{ show: boolean }>`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: #fff;
  transition: all 0.3s ease;
  animation: ${fadeIn} 500ms ease;
  display: ${props => (props.show ? 'block' : 'none')};
`

const ExitButton = styled.button`
  padding: 8px 16px;
  background-color: teal;
  color: #fff;
  font-size: 2rem;
  margin: 20px;
`

const Overlay: React.FC<{
  children: React.ReactNode
  show: boolean
  toggleOverlay: () => void
}> = ({ show = false, toggleOverlay, children }) => (
  <Container show={show} id="overlay">
    <ExitButton onClick={() => toggleOverlay(!show)}>exit</ExitButton>
    {children}
  </Container>
)

export default Overlay
