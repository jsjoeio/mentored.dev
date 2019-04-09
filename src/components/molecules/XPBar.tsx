import React from 'react'
import styled from '../../utils/styled'
import IconFire from '../atoms/IconFire'
import IconStar from '../atoms/IconStar'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  p {
    display: inline;
    font-size: 2.25rem;
    margin-left: 1.5rem;
  }
`

export const ProgressBarContainer = styled.div<{
  height?: string
  width?: string
}>`
  display: inline-block;
  height: ${props => props.height || '18px'};
  width: ${props => props.width || '200px'};
  background-color: ${props => props.theme.neutral.darker};
  margin-left: 1rem;
`

export const ProgressBar = styled.div<{
  height?: string
  width?: number
  percent?: number
}>`
  background-color: ${props => props.theme.accentBlue.main};
  height: ${props => props.height || '18px'};
  width: ${props => (props.width || 200) * (props.percent || 0.2) + 'px'};
`

const XPBar = () => (
  <Container>
    <div>
      <p>XP</p>
      <ProgressBarContainer>
        <ProgressBar />
      </ProgressBarContainer>
      <p>40/50</p>
    </div>
  </Container>
)

export default XPBar
