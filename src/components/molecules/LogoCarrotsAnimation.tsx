import React from 'react'

// @ts-ignore
import { Frame, Keyframes } from '../../utils/react-keyframes/'
import LogoCarrotsFrameOne from '../atoms/LogosCarrots/LogoCarrotsFrameOne'
import LogoCarrotsFrameTwo from '../atoms/LogosCarrots/LogoCarrotsFrameTwo'
import LogoCarrotsFrameThree from '../atoms/LogosCarrots/LogoCarrotsFrameThree'
import LogoCarrotsFrameFour from '../atoms/LogosCarrots/LogoCarrotsFrameFour'

const LogoCarrotsAnimation = () => (
  <Keyframes component="Fragment" loop>
    <Frame duration={150}>
      <LogoCarrotsFrameOne />
    </Frame>
    <Frame duration={150}>
      <LogoCarrotsFrameTwo />
    </Frame>
    <Frame duration={150}>
      <LogoCarrotsFrameThree />
    </Frame>
    <Frame duration={150}>
      <LogoCarrotsFrameFour />
    </Frame>
  </Keyframes>
)

export default LogoCarrotsAnimation
