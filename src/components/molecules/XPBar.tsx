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

const ProgressBarContainer = styled.div`
  display: inline-block;
  height: 18px;
  width: 200px;
  background-color: ${props => props.theme.neutral.darker};
  margin-left: 1rem;
`

const ProgressBar = styled.div`
  background-color: ${props => props.theme.accentBlue.main};
  height: 18px;
  width: ${200 * 0.4 * 2 + 'px'};
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
