import React from 'react'
import styled from '../../utils/styled'
import { Container } from '../organisms/Profile'
import AchievementPlaceholder from '../atoms/AchievementPlaceholder'
import AchievementCommandLine from '../atoms/AchievementCommandLine'

const Row = styled.div`
  display: flex;

  svg {
    margin-right: 10px;
    margin-bottom: 5px;
  }

  &:last-child {
    margin-right: 0;
  }
`

const Achievements = () => (
  <Container>
    <h3>Achievements</h3>
    <Row>
      <AchievementCommandLine />
      <AchievementPlaceholder />
      <AchievementPlaceholder />
      <AchievementPlaceholder />
      <AchievementPlaceholder />
      <AchievementPlaceholder />
    </Row>
    <Row>
      <AchievementPlaceholder />
      <AchievementPlaceholder />
      <AchievementPlaceholder />
      <AchievementPlaceholder />
      <AchievementPlaceholder />
      <AchievementPlaceholder />
    </Row>
  </Container>
)

export default Achievements
