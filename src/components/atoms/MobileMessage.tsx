import React from 'react'
import styled from '../../utils/styled'

const Container = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  text-align: center;
  font-size: 2rem;
  margin: 3rem;
`

const OldManShocked = () => (
  <svg
    width="233"
    height="221"
    viewBox="0 0 233 221"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: 'auto' }}
  >
    <ellipse cx="117" cy="110.5" rx="98" ry="110.5" fill="#F0BD9F" />
    <ellipse cx="117" cy="115.5" rx="7" ry="3.5" fill="#DC8D82" />
    <circle cx="82.5" cy="89.5" r="8.5" fill="#1B2D3C" />
    <circle cx="149.5" cy="91.5" r="8.5" fill="#1B2D3C" />
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
    <path
      d="M117 142C99.8792 142 86 152.745 86 166L117 164.5L148 166C148 152.745 134.121 142 117 142Z"
      fill="#1B2D3C"
    />
    <path
      d="M116.5 128C94.6848 128 77 139.641 77 154L156 154C156 139.641 138.315 128 116.5 128Z"
      fill="#9FBFD4"
    />
    <rect x="6" y="55" width="55" height="17" rx="8.5" fill="#9FBFD4" />
    <rect x="173" y="54" width="54" height="18" rx="9" fill="#9FBFD4" />
  </svg>
)

const deviceMessage =
  "Hmm...Looks like you're visiting from a mobile or tablet device."

const explanationmessage =
  'Unfortunately, this game has lessons which require a text editor and a command line so we suggest you come back and visit us on a desktop or laptop!'

const MobileMessage = () => (
  <Container>
    <OldManShocked />
    <Text>{deviceMessage}</Text>
    <Text>{explanationmessage}</Text>
    <p style={{ fontSize: '1.25rem' }}>&mdash; jsjoeio</p>
  </Container>
)

export default MobileMessage
