import React from 'react'
import styled from '../../utils/styled'
import CodeCash from '../atoms/CodeCash'
import ProfileHeaderAvatarWithName from '../molecules/ProfileHeaderAvatarWithName'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const ProfileHeader = () => (
  <Container>
    <ProfileHeaderAvatarWithName />
    {/* <CodeCash /> */}
  </Container>
)

export default ProfileHeader
