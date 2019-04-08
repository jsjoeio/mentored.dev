import React from 'react'
import { Link } from 'gatsby'
import styled from '../../utils/styled'
import Username from '../atoms/Username'
import Profile from './Profile'
import DeveloperProgress from '../molecules/DeveloperProgress'
import DailyChallenges from '../molecules/DailyChallenges'
import Achievements from '../molecules/Achievements'
import Map from '../molecules/Map'
import AudioPlayer from '../atoms/AudioPlayer'
import Gamesound from '../../sounds/PixelCityGroovin.mp3'

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
    <AudioPlayer url={Gamesound} />
    <Map />
    <Sidebar>
      <Profile />
      <DailyChallenges />
      <Achievements />
      <DeveloperProgress />
    </Sidebar>
  </Container>
)

export default Dashboard
