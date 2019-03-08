import React from 'react'

const InputRadio = ({ currentValue, questionKey, options, onChange }) => (
  <React.Fragment>
    {options.map(option => (
      <div key={option}>
        <input
          value={option}
          checked={option === currentValue}
          onChange={onChange}
          type="radio"
          name={option}
          id={option}
        />
        <label htmlFor={option}>{option}</label>
      </div>
    ))}
  </React.Fragment>
)

export default InputRadio
