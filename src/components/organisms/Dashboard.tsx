import React from 'react'
import { Link } from 'gatsby'
import styled from '../../utils/styled'
import Username from '../atoms/Username'
import Profile from './Profile'

const Container = styled.div`
  margin: 3vh 1.5vw;
  display: flex;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 475px;
`

const MapPlaceholder = styled.div`
  background-color: #a8dbbd;
  border-radius: 5px;
  width: 75vw;
  margin-right: 1vw;
  height: 94vh;
`

const Challenges = styled.div`
  background-color: yellow;
  width: 97%;
  height: calc(100vh * 0.3);
`

const Achievements = styled.div`
  background-color: gray;
  width: 97%;
  height: calc(100vh * 0.3);
`

const Progress = styled.div`
  background-color: blue;
  width: 97%;
  height: calc(100vh * 0.1);
`

const Dashboard = () => (
  <Container>
    <MapPlaceholder />
    <Sidebar>
      <Profile />
      <Challenges />
      <Achievements />
      <Progress />
    </Sidebar>
    {/* <p style={{ fontSize: '2.5vh', textAlign: 'right', marginRight: '20px' }}>
      Go to <Link to="/dashboard">Game</Link>
    </p> */}
  </Container>
)

export default Dashboard
