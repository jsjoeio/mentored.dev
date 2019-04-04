import React from 'react'
import styled from '../../utils/styled'
import IconStar from '../atoms/IconStar'
import IconFire from '../atoms/IconFire'
import XPBar from './XPBar'
import Streak from '../atoms/Streak'

const Container = styled.div`
  display: flex;
`

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon-star {
    margin-bottom: 5px;
  }
`
const Bars = styled(Icons)`
  align-items: flex-start;
`

const ProfileStatBars = () => (
  <Container>
    <Icons>
      <IconStar className="icon-star" />
      <IconFire />
    </Icons>
    <Bars>
      <XPBar />
      <Streak />
    </Bars>
  </Container>
)

export default ProfileStatBars
