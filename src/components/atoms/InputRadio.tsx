import React, { useRef, useEffect } from 'react'

const InputRadio = ({
  currentValue,
  questionKey,
  options,
  onChange,
  transition
}) => {
  const inputRadioRef = useRef(null)
  useEffect(() => {
    inputRadioRef.current.focus()
  }, [inputRadioRef])
  return (
    <React.Fragment>
      {options.map((option, index) => (
        <div key={option}>
          <input
            ref={index === 0 ? inputRadioRef : null}
            tabIndex={index === 0 ? '1' : ''}
            value={option}
            checked={option === currentValue}
            onChange={onChange}
            onKeyUp={e => {
              if ((e.keyCode === 13 || e.keyCode === 39) && currentValue) {
                transition()
              }
            }}
            type="radio"
            name={option}
            id={option}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </React.Fragment>
  )
}

export default InputRadio
