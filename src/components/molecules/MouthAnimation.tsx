import React from 'react'
import { Frame, Keyframes } from '../../utils/react-keyframes/'
import MouthIH from '../atoms/Mouths/MouthIH'
import MouthLUH from '../atoms/Mouths/MouthLUH'
import MouthCON from '../atoms/Mouths/MouthCON'
import MouthAH from '../atoms/Mouths/MouthAH'

export default ({ isTalking, endAnimation }) => (
  <Keyframes component="Fragment" loop={isTalking} onEnd={endAnimation}>
    <Frame duration={130}>
      <MouthIH />
    </Frame>
    <Frame duration={170}>
      <MouthLUH />
    </Frame>
    <Frame duration={120}>
      <MouthCON />
    </Frame>
    <Frame duration={170}>
      <MouthAH />
    </Frame>
  </Keyframes>
)
