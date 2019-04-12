import React from 'react'
import LogoCarrotsAnimation from './LogoCarrotsAnimation'

const Logo = () => (
  <svg
    width="115"
    height="115"
    viewBox="0 0 115 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="18" y="11" width="78" height="93" rx="6" fill="#2574A9" />
    <rect x="18" y="11" width="78" height="91" rx="6" fill="white" />
    <rect x="18" y="11" width="78" height="85" rx="6" fill="#2574A9" />
    <path
      d="M18 17C18 13.6863 20.6863 11 24 11H26V104H24C20.6863 104 18 101.314 18 98V17Z"
      fill="#474747"
    />

    <LogoCarrotsAnimation />
  </svg>
)

export default Logo
