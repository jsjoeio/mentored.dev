import React from 'react'

const Form = ({ name, handleOnChange, value }) => {
  return (
    <form>
      <label htmlFor={name}>{name}</label>
      <input
        value={value}
        onChange={handleOnChange}
        type="text"
        name={name}
        id={name}
      />
    </form>
  )
}
export default Form
