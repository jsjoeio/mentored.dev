import React from 'react'
import { Link } from 'gatsby'
import Username from '../atoms/Username'
import Profile from './Profile'

const Dashboard = () => (
  <div style={{ marginTop: '12vh' }}>
    <Profile />
    <p style={{ fontSize: '2.5vh', textAlign: 'right', marginRight: '20px' }}>
      Go to <Link to="/dashboard">Game</Link>
    </p>
  </div>
)

export default Dashboard
