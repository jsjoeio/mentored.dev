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
// @ts-ignore
import Gamesound from '../../sounds/PixelCityGroovin.mp3'

const Container = styled.div`
  margin: 3vh 1.5vw;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin: 20px 25px 15px;
  }
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 475px; */
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
