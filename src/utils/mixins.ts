import { css, keyframes } from 'styled-components'

export const hideElement = () => css`
  border: 0;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const addFocus = () => css`
  border-color: ${props => props.theme.focus.main};
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
    0 0 0 0.2em ${props => props.theme.focus.lighter};
`



