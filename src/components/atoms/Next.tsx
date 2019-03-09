import React, { useRef, useEffect } from 'react'

const Next = ({ transition, hasForm }) => {
  const nextText = useRef(null)
  useEffect(() => {
    // Only focus nextText if doesn't have form
    if (!hasForm) {
      nextText.current.focus()
    }
  }, [nextText, hasForm])
  return (
    <button
      ref={nextText}
      onClick={transition}
      tabIndex={hasForm ? null : '1'}
      onKeyUp={e => {
        if (e.keyCode === 39) {
          transition()
        }
      }}
    >
      Next
    </button>
  )
}

export default Next
