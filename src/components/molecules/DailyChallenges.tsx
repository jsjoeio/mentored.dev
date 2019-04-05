import React from 'react'
import styled from '../../utils/styled'
import { Container } from '../organisms/Profile'

const ChallengeContainer = styled.div`
  display: flex;
  align-items: center;
`

const Challenge = styled.p`
  font-size: 2rem;
  margin-left: 1.5rem;
  margin-bottom: 0;
`

const Box = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${props => props.theme.neutral.light};
`

const challenges = [
  {
    id: '1',
    description: 'Achieve 100% on command line quiz'
  },
  {
    id: '2',
    description: 'Invite a friend to mentored.dev'
  },
  {
    id: '3',
    description: 'Share one new thing you learned'
  }
]

const DailyChallenges = () => (
  <Container>
    <h3>Daily Challenges</h3>
    <ul style={{ margin: '0' }}>
      {challenges.map(challenge => (
        <ChallengeContainer key={challenge.id}>
          <Box />
          <Challenge>{challenge.description}</Challenge>
        </ChallengeContainer>
      ))}
    </ul>
  </Container>
)

export default DailyChallenges
