import React from 'react'

const InputText = ({ name, value, onChange }) => (
  <React.Fragment>
    <label htmlFor={name}>{name}</label>
    <input
      value={value}
      onChange={onChange}
      type="text"
      name={name}
      id={name}
    />
  </React.Fragment>
)

export default InputText
