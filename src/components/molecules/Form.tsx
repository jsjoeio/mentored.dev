import React from 'react'

const Form = ({ name, onChange, handleSubmit, value }) => (
  <form>
    <label htmlFor={name}>{name}</label>
    <input
      value={value}
      onChange={onChange}
      type="text"
      name={name}
      id={name}
    />
    <button onClick={handleSubmit} type="submit">
      Submit
    </button>
  </form>
)

export default Form
