import React, { useRef, useEffect } from 'react'

const InputText = ({ questionKey, value, onChange, transition }) => {
  const inputTextRef = useRef(null)
  useEffect(() => {
    inputTextRef.current.focus()
  }, [inputTextRef])
  return (
    <React.Fragment>
      <label htmlFor={questionKey}>{questionKey}</label>
      <input
        ref={inputTextRef}
        tabIndex="1"
        value={value}
        onChange={onChange}
        onKeyUp={e => {
          if ((e.keyCode === 13 || e.keyCode === 39) && value !== '') {
            transition()
          }
        }}
        type="text"
        name={questionKey}
        id={questionKey}
      />
    </React.Fragment>
  )
}

export default InputText
