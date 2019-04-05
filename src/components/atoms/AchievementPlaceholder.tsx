import React from 'react'
import styled from '../../utils/styled'

const SVG = styled.svg`
  opacity: 0.4;
`

const AchievementPlaceholder = () => (
  <SVG
    width="65"
    height="81"
    viewBox="0 0 65 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 15C0 6.71573 6.71573 0 15 0H32.5H50C58.2843 0 65 6.71573 65 15V55.8019C65 61.5415 61.7247 66.778 56.5637 69.2896L39.0637 77.8058C34.9202 79.8222 30.0798 79.8222 25.9363 77.8058L8.43631 69.2896C3.27531 66.778 0 61.5415 0 55.8019V15Z"
      fill="#C4C4C4"
    />
  </SVG>
)

export default AchievementPlaceholder
