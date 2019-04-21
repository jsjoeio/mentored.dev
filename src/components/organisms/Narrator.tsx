import React from 'react'
import styled, { keyframes } from 'styled-components'
import MouthE from '../atoms/Mouths/MouthE'
import MouthAnimation from '../molecules/MouthAnimation'
import Eyes from '../atoms/Eyes'
import EyesAnimation from '../molecules/EyesAnimation'

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const Container = styled.div`
  svg {
    margin-right: 2rem;
    transition: all 300ms ease;
    animation: ${slideInRight} 800ms cubic-bezier(0.51, 0.04, 0.66, 0.57);
  }
`
export interface NarratorProps {
  isTalking: boolean
  setTalking: React.Dispatch<React.SetStateAction<boolean>>
}

const Narrator: React.FC<NarratorProps> = ({ isTalking, setTalking }) => {
  return (
    <Container>
      <svg
        width="233"
        height="221"
        viewBox="0 0 233 221"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="117" cy="110.5" rx="98" ry="110.5" fill="#F0BD9F" />
        <ellipse cx="117" cy="115.5" rx="7" ry="3.5" fill="#DC8D82" />
        {!isTalking && <EyesAnimation isTalking={isTalking} />}
        {isTalking && <Eyes />}
        <circle cx="33" cy="100" r="33" fill="#F0BD9F" />
        <path
          d="M8 99.5C8 107.508 14.4919 114 22.5 114V85C14.4919 85 8 91.4919 8 99.5Z"
          fill="#DC8D82"
        />
        <circle
          cx="200"
          cy="100"
          r="33"
          transform="rotate(-180 200 100)"
          fill="#F0BD9F"
        />
        <path
          d="M225 100.5C225 92.4919 218.508 86 210.5 86L210.5 115C218.508 115 225 108.508 225 100.5Z"
          fill="#DC8D82"
        />
        {isTalking && <MouthAnimation isTalking={isTalking} />}
        {!isTalking && <MouthE />}
        <path
          d="M116.5 128C94.6848 128 77 139.641 77 154L116.5 154L156 154C156 139.641 138.315 128 116.5 128Z"
          fill="#9FBFD4"
        />
        <rect x="6" y="55" width="55" height="17" rx="8.5" fill="#9FBFD4" />
        <rect x="173" y="54" width="54" height="18" rx="9" fill="#9FBFD4" />
      </svg>
    </Container>
  )
}

export default Narrator
