import React from 'react'
import styled from '../../utils/styled'
import Streak from '../atoms/Streak'
import XPBar from '../molecules/XPBar'
import ProfileStatBars from '../molecules/ProfileStatBars'
import ProfileHeader from '../molecules/ProfileHeader'

const Container = styled.div`
  width: 475px;
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
