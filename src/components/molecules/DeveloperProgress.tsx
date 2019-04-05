import React from 'react'
import styled from '../../utils/styled'
import { ProgressBar, ProgressBarContainer } from './XPBar'

const Container = styled.div`
  width: 475px;
  margin-left: auto;

  h3 {
    font-size: 2.75rem;
  }

  ${ProgressBarContainer} {
    margin-left: 0;
  }

  ${ProgressBar} {
    color: ${props => props.theme.neutral.lightest};
    font-size: 2rem;
    padding-left: 1rem;
    line-height: 25px;
  }
`

const DeveloperProgress = () => (
  <Container>
    <h3>Developer Progress</h3>
    <ProgressBarContainer height="25px" width="460px">
      <ProgressBar height="25px" width={460} percent={0.1}>
        2%
      </ProgressBar>
    </ProgressBarContainer>
  </Container>
)

export default DeveloperProgress
