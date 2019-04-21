import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '../../utils/styled'
import Username from '../atoms/Username'
import Profile from './Profile'
import DeveloperProgress from '../molecules/DeveloperProgress'
import DailyChallenges from '../molecules/DailyChallenges'
import Achievements from '../molecules/Achievements'
import Map from '../molecules/Map'
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

const Dashboard = () => {
  const [mapLocation, setMapLocation] = useState('main-campus')
  return (
    <Container>
      <Map location={mapLocation} setMapLocation={setMapLocation} />
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
