import React from 'react'
import { Frame, Keyframes } from '../../utils/react-keyframes/'

export default ({ isTalking }) => (
  <Keyframes component="Fragment" loop={!isTalking}>
    <Frame duration={4000}>
      <circle fill="#1B2D3C" cx="82.5" cy="89.5" r="8.5" />
      <circle fill="#1B2D3C" cx="149.5" cy="91.5" r="8.5" />
    </Frame>
    <Frame duration={130}>
      <ellipse cx="82.5" cy="89.5" rx="8.5" ry="2.23684" fill="#1B2D3C" />
      <ellipse cx="149.5" cy="91.5" rx="8.5" ry="2.23684" fill="#1B2D3C" />
    </Frame>
  </Keyframes>
)
