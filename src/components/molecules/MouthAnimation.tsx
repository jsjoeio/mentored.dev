import React from 'react'
import { Frame, Keyframes } from 'react-keyframes'
import MouthIH from '../atoms/Mouths/MouthIH'
import MouthLUH from '../atoms/Mouths/MouthLUH'
import MouthCON from '../atoms/Mouths/MouthCON'
import MouthAH from '../atoms/Mouths/MouthAH'

const MouthAnimation: React.FC<{ isTalking: boolean }> = ({ isTalking }) => (
  <Keyframes component={React.Fragment} loop={isTalking}>
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

export default MouthAnimation
