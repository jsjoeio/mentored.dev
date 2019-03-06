import React from 'react'

const Form = ({ name, handleOnChange, handleSubmit, value }) => {
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
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  )
}
export default Form
