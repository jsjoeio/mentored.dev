import React, { useRef, useEffect } from 'react'


/*
  Might be better to swithc to this

  https://github.com/jstejada/react-typist
*/
const TypedComponent = ({ speed, strings }) => {
  return (
    <span
      style={{ whiteSpace: 'pre' }}
      className='typed-string'
      ref={(el) => spanElement = el}
    />
  )
}

export default TypedComponent
