import { css } from 'styled-components'

export const hideElement = () => css`
  border: 0;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip; rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`
