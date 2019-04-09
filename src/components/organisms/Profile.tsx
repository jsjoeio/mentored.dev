import React from 'react'
import styled from '../../utils/styled'
import Streak from '../atoms/Streak'
import XPBar from '../molecules/XPBar'
import ProfileStatBars from '../molecules/ProfileStatBars'
import ProfileHeader from '../molecules/ProfileHeader'

export const Container = styled.div`
  width: 100%;
  margin-left: auto;

  h3 {
    font-size: 2.75rem;
  }
`

const Profile = () => (
  <Container>
    <div>
      <ProfileHeader />
    </div>
    <ProfileStatBars />
  </Container>
)

export default Profile
