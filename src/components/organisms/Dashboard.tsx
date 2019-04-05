import React from 'react'
import { Link } from 'gatsby'
import styled from '../../utils/styled'
import Username from '../atoms/Username'
import Profile from './Profile'
import DeveloperProgress from '../molecules/DeveloperProgress'
import DailyChallenges from '../molecules/DailyChallenges'
import Achievements from '../molecules/Achievements'

const Container = styled.div`
  margin: 3vh 1.5vw;
  display: flex;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 475px;
`

const MapPlaceholder = styled.div`
  background-color: #a8dbbd;
  border-radius: 5px;
  width: 75vw;
  margin-right: 2vw;
  height: 94vh;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 4rem;
  }
`

const Dashboard = () => (
  <Container>
    <MapPlaceholder>
      <p>MAP PLACEHOLDER</p>
    </MapPlaceholder>
    <Sidebar>
      <Profile />
      <DailyChallenges />
      <Achievements />
      <DeveloperProgress />
    </Sidebar>
    {/* <p style={{ fontSize: '2.5vh', textAlign: 'right', marginRight: '20px' }}>
      Go to <Link to="/dashboard">Game</Link>
    </p> */}
  </Container>
)

export default Dashboard
