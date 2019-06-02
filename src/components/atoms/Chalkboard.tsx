import React from 'react'
import styled from 'styled-components'
import { fadeIn } from '../../utils/mixins'

const Container = styled.div`
  position: absolute;
  left: 0;
  margin: 20px;

  svg {
    #green-board {
      fill: ${props => props.theme.primary.darker};
    }
    #board-bottom {
      fill: ${props => props.theme.neutral.dark};
    }
    #white-chalk {
      fill: ${props => props.theme.neutral.lightest};
    }

    #lesson-visual {
      transition: all 0.3s ease;
      animation: ${fadeIn} 500ms ease;
    }
  }
`
const Chalkboard: React.FC<{ hasImage?: boolean; image?: string }> = ({
  hasImage = false,
  image = 'https://previews.123rf.com/images/sonyaillustration/sonyaillustration1504/sonyaillustration150400174/38329399-chalkboard-drawing-of-light-bulb-.jpg'
}) => (
  <Container>
    <svg
      width="957"
      height="478"
      viewBox="0 0 957 478"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect id="green-board" x="10.8013" width="937.558" height="464.483" />
      <rect id="board-bottom" y="462.026" width="964" height="15.9743" />
      <rect
        id="white-chalk"
        x="43.2054"
        y="454.653"
        width="35.6445"
        height="7.37277"
      />
      {hasImage && (
        <svg
          id="lesson-visual"
          width="957"
          height="478"
          viewBox="0 0 957 478"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image xlinkHref={image} height="400" width="400" x="288.5" y="22" />
        </svg>
      )}
    </svg>
  </Container>
)

export default Chalkboard
