import React, { useRef, useEffect } from 'react'

const Enter = ({ onClick }) => {
  const enterText = useRef(null)
  useEffect(() => {
    enterText.current.focus()
  }, [enterText])
  return (
    <button ref={enterText} tabIndex="1" onClick={onClick}>
      Enter
    </button>
  )
}

export default Enter
