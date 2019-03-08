import React from 'react'

const InputText = ({ questionKey, value, onChange }) => (
  <React.Fragment>
    <label htmlFor={questionKey}>{questionKey}</label>
    <input
      value={value}
      onChange={onChange}
      type="text"
      name={questionKey}
      id={questionKey}
    />
  </React.Fragment>
)

export default InputText
