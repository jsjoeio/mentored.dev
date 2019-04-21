import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '../../utils/styled'
import Username from '../atoms/Username'
import Profile from './Profile'
import DeveloperProgress from '../molecules/DeveloperProgress'
import DailyChallenges from '../molecules/DailyChallenges'
import Achievements from '../molecules/Achievements'
import Map from '../molecules/Map'
// @ts-ignore
import Gamesound from '../../sounds/PixelCityGroovin.mp3'
import { slideUp } from '../../utils/mixins'

const Container = styled.div`
  margin: 3vh 1.5vw;
  display: flex;
  transition: all 0.3s ease;
  animation: ${slideUp} 500ms ease;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin: 20px 25px 15px;
  }
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 34px;
`

// TODO
/*
  3. then I need to make Ritchie Hall an SVG and add an onClick to it.
  4. onClick => setMapLocation('ritchie-hall)
*/

const Dashboard = () => {
  const [mapLocation, setMapLocation] = useState('main-campus')

  return (
    <Container>
      <Map location={mapLocation} />
      <Sidebar>
        <Profile />
        <DailyChallenges />
        <Achievements />
        <DeveloperProgress />
      </Sidebar>
    </Container>
  )
}

export default Dashboard
